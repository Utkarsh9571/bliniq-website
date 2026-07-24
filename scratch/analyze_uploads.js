const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/lenovo/Desktop/bliniq/blinic-website';
const uploadsDir = path.join(rootDir, 'uploads');

// Helper to recursively get all files in a directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// 1. Get all physical upload files (relative to root, e.g. "uploads/2021/06/12-3.png")
console.log("Scanning physical uploads directory...");
const physicalFiles = getAllFiles(uploadsDir).map(file => {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  return {
    relPath: '/' + relPath,
    size: fs.statSync(file).size
  };
});

console.log(`Found ${physicalFiles.length} physical files in uploads/.`);

// 2. Scan project files for references to "/uploads/..."
console.log("Scanning code and JSON files for references to '/uploads/'...");
const referencedUrls = new Set();
const searchDirs = ['app', 'components', 'content', 'lib'];

// Read files recursively in search directories
function scanDirForReferences(dir) {
  const files = fs.readdirSync(path.join(rootDir, dir));
  files.forEach(file => {
    const filePath = path.join(rootDir, dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      scanDirForReferences(path.join(dir, file));
    } else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Match anything like /uploads/20XX/YY/filename.ext or variants (e.g. without leading slash, or fully qualified domain)
      const regexes = [
        /\/uploads\/[0-9a-zA-Z_\-\.\/]+/g,
        /https?:\/\/(www\.)?bliniq\.in\/uploads\/[0-9a-zA-Z_\-\.\/]+/g
      ];

      regexes.forEach(regex => {
        let match;
        while ((match = regex.exec(content)) !== null) {
          let url = match[0];
          // Strip domain if present
          if (url.startsWith('http')) {
            url = url.replace(/https?:\/\/(www\.)?bliniq\.in/, '');
          }
          // Normalize extension - strip trailing punctuation or params
          url = url.split(/[?#]/)[0];
          // Clean trailing quotes, parentheses, brackets, spaces, backslashes, etc.
          url = url.replace(/["'()\[\]\s\\,<>]+$/, '');
          referencedUrls.add(url);
        }
      });
    }
  });
}

searchDirs.forEach(dir => {
  if (fs.existsSync(path.join(rootDir, dir))) {
    scanDirForReferences(dir);
  }
});

console.log(`Found ${referencedUrls.size} unique referenced upload URLs in code/content.`);

// 3. Categorize
const referencedPhysical = [];
const unreferencedPhysical = [];
const missingReferenced = [];

// For direct lookup
const physicalMap = new Map();
physicalFiles.forEach(f => {
  physicalMap.set(f.relPath.toLowerCase(), f);
});

referencedUrls.forEach(url => {
  const normUrl = url.toLowerCase();
  if (physicalMap.has(normUrl)) {
    referencedPhysical.push(physicalMap.get(normUrl));
  } else {
    // Check if it's missing or a pattern like srcset that needs validation
    missingReferenced.push(url);
  }
});

physicalFiles.forEach(pf => {
  if (!referencedUrls.has(pf.relPath)) {
    // Case-insensitive check just in case
    let found = false;
    referencedUrls.forEach(ref => {
      if (ref.toLowerCase() === pf.relPath.toLowerCase()) {
        found = true;
      }
    });
    if (!found) {
      unreferencedPhysical.push(pf);
    }
  }
});

console.log(`- Referenced Physical Files: ${referencedPhysical.length}`);
console.log(`- Unreferenced Physical Files: ${unreferencedPhysical.length}`);
console.log(`- Missing/External referenced URLs: ${missingReferenced.length}`);

// Get top 10 largest files overall
const sortedBySize = [...physicalFiles].sort((a, b) => b.size - a.size);
console.log("\nTop 10 Largest Upload Files:");
sortedBySize.slice(0, 10).forEach((f, idx) => {
  console.log(`${idx + 1}. ${f.relPath} (${(f.size / (1024 * 1024)).toFixed(2)} MB)`);
});

// Output lists of candidates to a JSON file for analysis
fs.writeFileSync(
  path.join(rootDir, 'uploads_analysis.json'),
  JSON.stringify({
    stats: {
      totalPhysicalFiles: physicalFiles.length,
      totalPhysicalSize: physicalFiles.reduce((acc, f) => acc + f.size, 0),
      referencedPhysicalCount: referencedPhysical.length,
      referencedPhysicalSize: referencedPhysical.reduce((acc, f) => acc + f.size, 0),
      unreferencedPhysicalCount: unreferencedPhysical.length,
      unreferencedPhysicalSize: unreferencedPhysical.reduce((acc, f) => acc + f.size, 0),
      missingReferencedCount: missingReferenced.length
    },
    top10Largest: sortedBySize.slice(0, 10),
    missingReferenced: missingReferenced.slice(0, 50),
    unreferencedPhysicalSample: unreferencedPhysical.slice(0, 50).map(f => f.relPath)
  }, null, 2)
);

console.log("Analysis written to uploads_analysis.json");
