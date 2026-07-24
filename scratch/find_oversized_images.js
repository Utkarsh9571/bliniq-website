const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/lenovo/Desktop/bliniq/blinic-website';
const manifestPath = path.join(rootDir, 'docs', 'production-media-manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.error("Manifest not found.");
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const activeFiles = manifest.referenced;

console.log("=== Oversized Active Media Files (> 500 KB) ===");
let count = 0;

activeFiles.forEach(url => {
  const relPath = url.startsWith('/') ? url.slice(1) : url;
  const filePath = path.join(rootDir, relPath);
  
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    const sizeKB = stat.size / 1024;
    
    if (stat.size > 500 * 1024) {
      console.log(`- ${url}: ${(sizeKB / 1024).toFixed(2)} MB`);
      count++;
    }
  }
});

console.log(`Total active oversized files found: ${count}`);
