const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'out');

console.log("==================================================");
console.log("      DEEP CRAWL AUDIT & INTEGRITY CHECK         ");
console.log("==================================================");

if (!fs.existsSync(outDir)) {
  console.error("ERROR: out/ directory does not exist. Run npm run build first.");
  process.exit(1);
}

function getAllHtmlFiles(dir, list = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, list);
    } else if (file.endsWith('.html')) {
      list.push(fullPath);
    }
  }
  return list;
}

const htmlFiles = getAllHtmlFiles(outDir);
console.log(`Found ${htmlFiles.length} generated HTML pages in out/\n`);

const issues = {
  brokenLinks: [],
  missingImages: [],
  invalidJsonLd: [],
  missingTitles: [],
  missingDescriptions: [],
  missingCanonicals: [],
  canonicalMismatches: []
};

// Map of all valid routes in out/
const validRoutes = new Set();
htmlFiles.forEach(file => {
  const rel = path.relative(outDir, file).replace(/\\/g, '/');
  // if rel is index.html -> /
  // if rel is about-us/index.html -> /about-us, /about-us/
  if (rel === 'index.html') {
    validRoutes.add('/');
    validRoutes.add('');
  } else if (rel.endsWith('/index.html')) {
    const route = '/' + rel.slice(0, -'/index.html'.length);
    validRoutes.add(route);
    validRoutes.add(route + '/');
  } else if (rel.endsWith('.html')) {
    const route = '/' + rel.slice(0, -'.html'.length);
    validRoutes.add(route);
    validRoutes.add(route + '/');
    validRoutes.add('/' + rel);
  }
});

htmlFiles.forEach(filePath => {
  const relPath = path.relative(outDir, filePath).replace(/\\/g, '/');
  const html = fs.readFileSync(filePath, 'utf-8');

  // 1. Check Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    issues.missingTitles.push(relPath);
  }

  // 2. Check Meta Description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    issues.missingDescriptions.push(relPath);
  }

  // 3. Check Canonical Link
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i) ||
                         html.match(/<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i);
  if (!canonicalMatch || !canonicalMatch[1].trim()) {
    issues.missingCanonicals.push(relPath);
  } else {
    const canonicalUrl = canonicalMatch[1].trim();
    // Verify canonical ends with / (unless it's an asset or has query)
    if (!canonicalUrl.endsWith('/') && !canonicalUrl.includes('?')) {
      issues.canonicalMismatches.push({ file: relPath, canonical: canonicalUrl, reason: 'Missing trailing slash' });
    }
  }

  // 4. Check JSON-LD
  const jsonLdMatches = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
  if (jsonLdMatches) {
    jsonLdMatches.forEach(tag => {
      const jsonContent = tag.replace(/<script\s+type=["']application\/ld\+json["']>/i, '').replace(/<\/script>/i, '').trim();
      try {
        const parsed = JSON.parse(jsonContent);
        if (!parsed['@context'] && !parsed['@graph']) {
          issues.invalidJsonLd.push({ file: relPath, error: 'Missing @context or @graph' });
        }
      } catch (err) {
        issues.invalidJsonLd.push({ file: relPath, error: err.message });
      }
    });
  }

  // 5. Check all internal anchor links (<a href="...">)
  const aMatches = html.match(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>/gi);
  if (aMatches) {
    aMatches.forEach(aTag => {
      const hrefMatch = aTag.match(/href=["']([^"']*)["']/i);
      if (!hrefMatch) return;
      const href = hrefMatch[1].trim();

      // Skip external, anchors, tel, mailto, javascript
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
        return;
      }

      // Clean path
      const cleanHref = href.split('?')[0].split('#')[0];
      if (!cleanHref) return; // anchor only

      // Check if route or physical file exists
      if (!validRoutes.has(cleanHref) && !fs.existsSync(path.join(outDir, cleanHref.startsWith('/') ? cleanHref.slice(1) : cleanHref))) {
        // Special case: check if .html exists
        if (!fs.existsSync(path.join(outDir, (cleanHref.startsWith('/') ? cleanHref.slice(1) : cleanHref) + '.html'))) {
          issues.brokenLinks.push({ sourceFile: relPath, targetHref: href });
        }
      }
    });
  }

  // 6. Check images (<img src="...">)
  const imgMatches = html.match(/<img\s+[^>]*src=["']([^"']*)["'][^>]*>/gi);
  if (imgMatches) {
    imgMatches.forEach(imgTag => {
      const srcMatch = imgTag.match(/src=["']([^"']*)["']/i);
      if (!srcMatch) return;
      const src = srcMatch[1].trim();

      // Skip external, data URLs
      if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
        return;
      }

      const cleanSrc = src.split('?')[0].split('#')[0];
      const physicalSrc = path.join(outDir, cleanSrc.startsWith('/') ? cleanSrc.slice(1) : cleanSrc);
      if (!fs.existsSync(physicalSrc)) {
        issues.missingImages.push({ sourceFile: relPath, imageSrc: src });
      }
    });
  }
});

// Summary Report
let hasError = false;

console.log("--- AUDIT RESULTS ---");

if (issues.missingTitles.length === 0) {
  console.log("✔ Page Titles: 100% PASS (All pages have valid non-empty <title>)");
} else {
  console.error(`✖ Page Titles: FAIL (${issues.missingTitles.length} missing titles)`);
  issues.missingTitles.forEach(f => console.error(`  - ${f}`));
  hasError = true;
}

if (issues.missingDescriptions.length === 0) {
  console.log("✔ Meta Descriptions: 100% PASS (All pages have <meta name=\"description\">)");
} else {
  console.error(`✖ Meta Descriptions: FAIL (${issues.missingDescriptions.length} missing descriptions)`);
  issues.missingDescriptions.forEach(f => console.error(`  - ${f}`));
  hasError = true;
}

if (issues.missingCanonicals.length === 0 && issues.canonicalMismatches.length === 0) {
  console.log("✔ Canonical URLs: 100% PASS (All pages have canonical tags with strict trailing slashes)");
} else {
  if (issues.missingCanonicals.length > 0) {
    console.error(`✖ Missing Canonicals: ${issues.missingCanonicals.length}`);
    issues.missingCanonicals.forEach(f => console.error(`  - ${f}`));
    hasError = true;
  }
  if (issues.canonicalMismatches.length > 0) {
    console.error(`✖ Canonical Trailing Slash Mismatches: ${issues.canonicalMismatches.length}`);
    issues.canonicalMismatches.forEach(m => console.error(`  - ${m.file}: ${m.canonical} (${m.reason})`));
    hasError = true;
  }
}

if (issues.invalidJsonLd.length === 0) {
  console.log("✔ Schema.org JSON-LD: 100% PASS (All structured data blocks are valid JSON-LD)");
} else {
  console.error(`✖ Schema.org JSON-LD: FAIL (${issues.invalidJsonLd.length} invalid JSON-LD blocks)`);
  issues.invalidJsonLd.forEach(err => console.error(`  - ${err.file}: ${err.error}`));
  hasError = true;
}

if (issues.brokenLinks.length === 0) {
  console.log("✔ Internal Link Integrity: 100% PASS (All internal links resolve to valid destinations)");
} else {
  console.error(`✖ Broken Internal Links: ${issues.brokenLinks.length}`);
  issues.brokenLinks.slice(0, 10).forEach(b => console.error(`  - In ${b.sourceFile} -> target '${b.targetHref}'`));
  hasError = true;
}

if (issues.missingImages.length === 0) {
  console.log("✔ Image Asset Integrity: 100% PASS (All referenced images exist on disk)");
} else {
  console.error(`✖ Missing Image Assets: ${issues.missingImages.length}`);
  issues.missingImages.slice(0, 10).forEach(img => console.error(`  - In ${img.sourceFile} -> image '${img.imageSrc}'`));
  hasError = true;
}

console.log("\n==================================================");
if (hasError) {
  console.error("  AUDIT FAILED: Issues found above. Fix needed.");
  console.log("==================================================");
  process.exit(1);
} else {
  console.log("  AUDIT RESULT: 100% PERFECT PASS (ZERO DEFECTS)");
  console.log("==================================================");
}
