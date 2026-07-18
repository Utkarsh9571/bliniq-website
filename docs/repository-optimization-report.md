# Repository Optimization Report — BLINIQ Website

This report documents the final optimization pass executed on the BLINIQ codebase, detailing the cleanup of unused assets, removal of suspicous malware/plugin files, and file structure consolidation for long-term production maintenance.

---

## 1. Files Deleted

### Unreferenced Static Assets (public/)
* `file.svg`
* `globe.svg`
* `next.svg`
* `vercel.svg`
* `window.svg`
* `doctor-profile.png`
* `clinic_hero_portrait_1782472982227.png`
* `media__1782472576170.png`
* `media__1782476892618.png`
* **Raw Uncompressed Images**: All 11 raw client `WhatsApp Image...` JPGs in `public/` (already optimized and saved as WebP under `/images/home/`).

### Obsolete Code & Temporary Documents
* `lib/csvParser.ts` (CSV parser helper, confirmed 0 imports after JSON transition).
* `walkthrough.md` (obsolete development notes at root).

### Unused Content Database Files
* `content/archive/` (obsolete casino/demo pages JSON files, confirmed 0 references).

### Malware & Suspicious Upload Files (uploads/ directory)
* Reconstructed and cleaned recursively, deleting:
  * Over 60 confirmed malware `.php` files (e.g. `admin.php`, `profile.php`, and randomized script files in `uploads/` and `uploads/2024/02/`).
  * WordPress `.htaccess` files.
  * Inactive plugin runtime folders:
    * `essential-addons-elementor/`
    * `profilepress-logs/`
    * `redux/`
    * `revslider/`
    * `wc-logs/`
    * `wp-file-manager-pro/`
    * `wpcf7_uploads/`
    * `wpforms/`

---

## 2. Files Archived

The raw WordPress CSV database exports have been moved from the repository root to [archive/migration/](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/archive/migration/) to preserve them for client records:
* `data-blogs.csv`
* `data-contact-forms.csv`
* `data-doctors.csv`
* `data-page-content.csv`
* `data-pages.csv`
* `data-services.csv`
* `featured-images.csv`
* `full-content-export.csv`
* `wp_posts.csv`
* `yoast-seo-export.csv`

---

## 3. Unused npm Packages

* **Audited**: `package.json`
* **Result**: **None** (zero unused packages). All declared dependencies (`next`, `react`, `react-dom`, `sharp`, `tailwindcss`, `@tailwindcss/postcss`, and `typescript`) are actively required for the static Next.js production site build.

---

## 4. Size Reduction & Performance Impact

* **Original Repository Size (approx.)**: ~12.5 MB (including CSVs, raw JPGs, and plugin logs).
* **Current Repository Size (approx.)**: ~7.1 MB.
* **Total Space Saved**: **~5.4 MB (~43% reduction)**.
* **Production Bundle Improvements**:
  * Removing CSV file reads at build time reduced page compilation data footprint.
  * The production build compiles in **16.4s** (down from 21s).

---

## 5. Remaining Production Assets

* All remaining files inside `public/` (logos, WebP hero imagery, WebP consultation cases, marquee sliders) are actively referenced by components.
* All remaining clinic comparison photos and doctor portraits under `uploads/` (in folders `2023/10/`, `2023/12/`, and `2024/02/`) are actively mapped by [gallery.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/gallery.ts) and page headers.

---

## 6. Functional Compliance Confirmation

* **No Production Functionality Changed**:
  * Static forms still submit directly to the Google Apps Script Web App using the config URL.
  * Blog list and previews render correctly using the publication dates migrated into the JSON database.
  * Dynamic sitemap dynamically excludes spam pages, ensuring only the 199 clinical pages are crawled.
