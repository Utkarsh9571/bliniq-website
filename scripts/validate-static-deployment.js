const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');
const docsDir = path.join(rootDir, 'docs');
const manifestPath = path.join(docsDir, 'production-media-manifest.json');

console.log("=== Running Static Deployment Validation ===");

if (!fs.existsSync(outDir)) {
  console.error("FAIL: out/ directory does not exist. Run a production build first.");
  process.exit(1);
}

// 1. Helper to traverse files
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

// 2. Fundamental checklist
const checks = {
  'index.html': fs.existsSync(path.join(outDir, 'index.html')),
  '_next/static': fs.existsSync(path.join(outDir, '_next', 'static')),
  '.htaccess': fs.existsSync(path.join(outDir, '.htaccess')),
  'sitemap.xml': fs.existsSync(path.join(outDir, 'sitemap.xml')) || fs.existsSync(path.join(outDir, 'sitemap')),
  'robots.txt': fs.existsSync(path.join(outDir, 'robots.txt'))
};

let baseChecksFailed = false;
Object.entries(checks).forEach(([name, passed]) => {
  if (passed) {
    console.log(`[PASS] Fundamental file: ${name}`);
  } else {
    console.error(`[FAIL] Fundamental file missing: ${name}`);
    baseChecksFailed = true;
  }
});

// 3. Scan generated output for forbidden patterns and verify media
const buildFiles = getAllFiles(outDir, [], ['.html', '.css', '.js']);
const missingMedia = []; // Array of { url, fileReferencedIn }
const forbiddenPatterns = [
  { name: 'localhost URL', regex: /localhost:\d+/i },
  { name: '127.0.0.1 IP', regex: /127\.0\.0\.1/i },
  { name: 'Next.js Image Optimizer Endpoint', regex: /\/_next\/image\?/i }
];
const foundForbidden = [];

buildFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const relativeFile = path.relative(outDir, file).replace(/\\/g, '/');

  // Check forbidden patterns
  forbiddenPatterns.forEach(pattern => {
    if (pattern.regex.test(content)) {
      foundForbidden.push({
        pattern: pattern.name,
        file: relativeFile
      });
    }
  });

  // Extract /uploads/ and /images/ links
  const regexes = [
    /\/uploads\/[0-9a-zA-Z_\-\.\/]+/g,
    /\/images\/[0-9a-zA-Z_\-\.\/]+/g
  ];

  regexes.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      let url = match[0];
      url = url.split(/[?#]/)[0];
      url = url.replace(/["'()\[\]\s\\,<>:;]+$/, '');
      url = url.replace(/\/+/g, '/');

      // Check if it exists in out/
      const physicalPath = path.join(outDir, url);
      if (!fs.existsSync(physicalPath)) {
        // Exclude directory check or general extensions that aren't files
        if (url.includes('.') && !url.endsWith('/') && !url.includes('srcset')) {
          missingMedia.push({
            url: url,
            file: relativeFile
          });
        }
      }
    }
  });
});

// Report forbidden patterns
if (foundForbidden.length > 0) {
  console.error("\n[FAIL] Found Forbidden Patterns:");
  foundForbidden.forEach(err => {
    console.error(`  - ${err.pattern} in file: ${err.file}`);
  });
} else {
  console.log("[PASS] No localhost, 127.0.0.1, or /_next/image URLs found.");
}

// Report missing media
// De-duplicate missing media list by URL + File combination
const uniqueMissing = [];
const missingMap = new Set();
missingMedia.forEach(m => {
  const key = `${m.url}::${m.file}`;
  if (!missingMap.has(key)) {
    missingMap.add(key);
    uniqueMissing.push(m);
  }
});

if (uniqueMissing.length > 0) {
  console.error("\n[FAIL] Missing Media References (Referenced in build but missing physically):");
  uniqueMissing.forEach(item => {
    console.error(`  - Missing: ${item.url} (referenced in ${item.file})`);
  });
} else {
  console.log("[PASS] All referenced same-origin uploads and images exist in the build output.");
}

// Write a missing media report
const reportPath = path.join(docsDir, 'missing-media-report.md');
let reportContent = `# Missing Media Reference Report\n\nGenerated on: ${new Date().toISOString()}\n\n`;
if (uniqueMissing.length > 0) {
  reportContent += `## Missing Files\n\nThese files are referenced in the build but are missing physically:\n\n`;
  uniqueMissing.forEach(item => {
    reportContent += `- **${item.url}** referenced in \`${item.file}\`\n`;
  });
} else {
  reportContent += `## Status: Clean\n\nNo missing media references found in this build!\n`;
}
fs.writeFileSync(reportPath, reportContent);
console.log(`Missing media report updated at: docs/missing-media-report.md`);

// Final evaluation
if (baseChecksFailed || foundForbidden.length > 0 || uniqueMissing.length > 0) {
  console.error("\n=== RESULT: DEPLOYMENT VALIDATION FAILED ===");
  process.exit(1);
} else {
  console.log("\n=== RESULT: DEPLOYMENT VALIDATION SUCCESSFUL (READY FOR CPANEL) ===");
}
