# BLINIQ — Static Production Deployment Guide

This document describes the static production build, media pruning workflow, and validation commands for deploying the BLINIQ website to GoDaddy cPanel hosting.

---

## 1. Production Build & Pruning Process

The deployment requires a 100% static output with no Node.js runtime or dynamic routing dependencies.

We use a custom, repeatable build command that:
1. Compiles the Next.js site statically (outputs to `out/`).
2. Scans both the project source files and the compiled HTML/CSS/JS in `out/` for `/uploads/` and `/images/` references to build a complete production media manifest.
3. Automatically deletes any unreferenced legacy media files from the `out/uploads/` directory.
4. Copies the production `.htaccess` configuration containing compression and caching rules into the `out/` directory.

### Build Command
Run this command from the repository root:
```bash
npm run build:production
```

---

## 2. Deployment Validation

Before uploading the compiled folder, you must run the deployment validator to check for build errors, missing files, or forbidden environments.

The validator checks:
- The presence of core static files (`index.html`, `sitemap.xml`, `robots.txt`, `.htaccess`, and `_next/static/`).
- That no `/_next/image` endpoint requests remain.
- That no `localhost` or `127.0.0.1` URLs remain.
- That **100% of referenced `/uploads/` and `/images/` paths** physically exist inside `out/`.

### Validation Command
```bash
npm run validate:deployment
```

---

## 3. GoDaddy cPanel Folder Structure & Upload

Upon a successful validation result (`DEPLOYMENT VALIDATION SUCCESSFUL`), upload the **contents** of the `out/` directory to your target hosting folder in cPanel File Manager.

### Target Directory Structure
Your cPanel folder (e.g. `public_html_new` or the primary subdomain document root) should contain:

```
public_html_new/
├── .htaccess                  <-- Copied configuration
├── index.html                 <-- Homepage HTML
├── sitemap.xml                <-- Static Sitemap
├── robots.txt                 <-- Robots file
├── _next/                     <-- Next.js static JS/CSS
├── images/                    <-- Local optimized assets
└── uploads/                   <-- PRUNED media library (~25 MB / 259 files)
```

> [!WARNING]
> Do NOT upload the parent `out/` folder itself; upload only the **contents** of the `out/` folder directly into the root destination folder.

---

## 4. Rebuilding for Content Updates (e.g., Instagram posts)

If you update the Instagram JSON file or add new blog/procedure/service posts with new image references:
1. Place the new images under the local `uploads/` folder.
2. Update the references in JSON databases or source code.
3. Run `npm run build:production`. The manifest builder will automatically identify the new references and ensure they are protected and copied into the `out/uploads` folder.
4. Run `npm run validate:deployment` and upload to cPanel.
