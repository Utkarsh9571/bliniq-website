const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const uploadsDir = path.join(rootDir, 'uploads');
const outDir = path.join(rootDir, 'out');
const docsDir = path.join(rootDir, 'docs');

// Create docs dir if not exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

function getAllFiles(dir, fileList = [], extensions = null) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList, extensions);
    } else {
      if (!extensions || extensions.some(ext => file.endsWith(ext))) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

console.log("=== Building Production Media Manifest ===");

// 1. Gather all physical upload files relative to root
const physicalFiles = getAllFiles(uploadsDir).map(file => {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  return '/' + relPath;
});
console.log(`Found ${physicalFiles.length} physical files under /uploads/`);

// 2. Scan sources
const referencedUrls = new Set();
const sourceDirs = ['app', 'components', 'content', 'lib'];
const sourceExtensions = ['.js', '.ts', '.tsx', '.json', '.css'];

function scanFileForReferences(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Match anything like /uploads/20XX/YY/filename.ext or /images/home/filename.ext
  // and variations with domains
  const regexes = [
    /\/uploads\/[0-9a-zA-Z_\-\.\/]+/g,
    /\/images\/[0-9a-zA-Z_\-\.\/]+/g,
    /https?:\/\/(www\.)?bliniq\.in\/uploads\/[0-9a-zA-Z_\-\.\/]+/g,
    /https?:\/\/(www\.)?bliniq\.in\/images\/[0-9a-zA-Z_\-\.\/]+/g
  ];

  regexes.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      let url = match[0];
      if (url.startsWith('http')) {
        url = url.replace(/https?:\/\/(www\.)?bliniq\.in/, '');
      }
      url = url.split(/[?#]/)[0];
      // Strip trailing characters commonly found in HTML/attributes/JS
      url = url.replace(/["'()\[\]\s\\,<>:;]+$/, '');
      if (url.startsWith('/uploads/') || url.startsWith('/images/')) {
        // Strip duplicate slashes
        url = url.replace(/\/+/g, '/');
        referencedUrls.add(url);
      }
    }
  });
}

console.log("Scanning source files...");
sourceDirs.forEach(dir => {
  const fullDir = path.join(rootDir, dir);
  if (fs.existsSync(fullDir)) {
    const files = getAllFiles(fullDir, [], sourceExtensions);
    files.forEach(scanFileForReferences);
  }
});

// 3. Scan generated build files (HTML, CSS, JS) in out/
if (fs.existsSync(outDir)) {
  console.log("Scanning generated static build files under out/...");
  const buildFiles = getAllFiles(outDir, [], ['.html', '.css', '.js']);
  console.log(`Found ${buildFiles.length} files under out/ to inspect.`);
  buildFiles.forEach(scanFileForReferences);
} else {
  console.log("Note: out/ directory does not exist yet. Generated build scan will be completed in the post-build phase.");
}

console.log(`Detected ${referencedUrls.size} unique references to /uploads/ or /images/`);

// 4. Categorize referenced, missing, and unreferenced files
const referenced = [];
const missing = [];
const unreferenced = [];

const physicalSet = new Set(physicalFiles.map(f => f.toLowerCase()));

// We only process "/uploads/" references for pruning, "/images/" references are kept in public/images
referencedUrls.forEach(url => {
  if (url.startsWith('/uploads/')) {
    const normUrl = url.toLowerCase();
    if (physicalSet.has(normUrl)) {
      referenced.push(url);
    } else {
      missing.push(url);
    }
  }
});

physicalFiles.forEach(pf => {
  const normPf = pf.toLowerCase();
  let isReferenced = false;
  referencedUrls.forEach(ref => {
    if (ref.toLowerCase() === normPf) {
      isReferenced = true;
    }
  });
  if (!isReferenced) {
    unreferenced.push(pf);
  }
});

const stats = {
  totalUploadFiles: physicalFiles.length,
  referencedCount: referenced.length,
  unreferencedCount: unreferenced.length,
  missingCount: missing.length
};

const manifestPath = path.join(docsDir, 'production-media-manifest.json');
fs.writeFileSync(
  manifestPath,
  JSON.stringify({
    referenced: Array.from(new Set(referenced)).sort(),
    missing: Array.from(new Set(missing)).sort(),
    unreferenced: Array.from(new Set(unreferenced)).sort(),
    statistics: stats
  }, null, 2)
);

console.log(`Manifest created successfully at: docs/production-media-manifest.json`);
console.log(`Stats:`, stats);
