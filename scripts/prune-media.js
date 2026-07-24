const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');
const outUploadsDir = path.join(outDir, 'uploads');
const docsDir = path.join(rootDir, 'docs');
const manifestPath = path.join(docsDir, 'production-media-manifest.json');

console.log("=== Pruning Unused Static Media ===");

if (!fs.existsSync(outDir)) {
  console.error("Error: out/ directory does not exist. Please run next build first.");
  process.exit(1);
}

if (!fs.existsSync(manifestPath)) {
  console.error("Error: docs/production-media-manifest.json does not exist. Run scripts/build-media-manifest.js first.");
  process.exit(1);
}

// 1. Read manifest
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const referencedLower = new Set(manifest.referenced.map(url => url.toLowerCase()));

// 2. Recursively traverse out/uploads/ and delete any file not present in referenced set
let filesPruned = 0;
let bytesSaved = 0;
let filesRetained = 0;

function pruneDir(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      pruneDir(itemPath);
      // Clean up empty directories
      if (fs.readdirSync(itemPath).length === 0) {
        fs.rmdirSync(itemPath);
      }
    } else {
      const relPath = path.relative(outDir, itemPath).replace(/\\/g, '/');
      const urlPath = '/' + relPath;
      
      if (!referencedLower.has(urlPath.toLowerCase())) {
        fs.unlinkSync(itemPath);
        filesPruned++;
        bytesSaved += stat.size;
      } else {
        filesRetained++;
      }
    }
  });
}

if (fs.existsSync(outUploadsDir)) {
  pruneDir(outUploadsDir);
}

console.log(`Pruning complete:`);
console.log(`- Files pruned: ${filesPruned}`);
console.log(`- Bandwidth/Space saved: ${(bytesSaved / (1024 * 1024)).toFixed(2)} MB`);
console.log(`- Files retained in out/uploads/: ${filesRetained}`);

// 3. Copy .htaccess to out/
const sourceHtaccess = path.join(rootDir, 'public', '.htaccess');
const targetHtaccess = path.join(outDir, '.htaccess');

if (fs.existsSync(sourceHtaccess)) {
  fs.copyFileSync(sourceHtaccess, targetHtaccess);
  console.log("Copied .htaccess to out/ successfully.");
} else {
  console.warn("Warning: public/.htaccess not found. No .htaccess copied to out/.");
}
