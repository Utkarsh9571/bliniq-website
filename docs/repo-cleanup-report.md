# Repository Cleanup Report — BLINIQ Website

This report summarizes the results of the repository cleanup performed during Phase 18, detailing deleted files, remaining production assets, and external dependencies.

---

## 1. What Was Removed

* **Raw CSV Database Exports**: 10 CSV files moved to `/archive/migration/`.
* **Obsolete Code Files**: `lib/csvParser.ts` and root `walkthrough.md`.
* **Unreferenced Assets**: 5 template SVGs, 11 raw JPGs, and 4 unused PNGs.
* **Malware & Log Files**: All `.php` files (60+ items), `.htaccess` configurations, and plugin log folders (`elementor`, `redux`, `wc-logs`, etc.) inside `uploads/` have been deleted.
* **Junk Pages**: Filtered out `http-bliniq-in-about-us`, `how-to-play-a-hearts-card-game-online`, `term-paper-writers-needed-to-be`, and `test` from the dynamic routes.

---

## 2. What Remains

* **Next.js Project Source**: App router (`app/`), reusable widgets (`components/`), libraries (`lib/`), and styling configurations.
* **Canonical Content JSONs**: Mapped schemas in `content/migrated/` containing clean metadata, titles, and body HTML.
* **Local WebP Assets**: Compressed images under `/images/home/` representing the home hero slider, consultation previews, and case study infographic panels.
* **Referenced Media Files**: Reusable case images and surgeon profile portraits retained under `uploads/` directories.

---

## 3. What Must Be Hosted Externally

* **Clinic Media Library**: Reusable patient transformations, video files, and historical uploads should be hosted directly in the GoDaddy hosting directory structure under `/uploads/`.
* **In-Content Links**: Standardized body text links reference relative paths starting with `/uploads/...` which resolve directly to this external folder.

---

## 4. What the Client Still Needs to Provide

* **Google GTM & GA4 Container IDs**: Required to enable live visitor tracking.
* **Live Testimonials Content**: Real clinical transformation cases and video reviews to replace placeholders.
* **Target Spreadsheet Apps Script Web App**: Final Web App URL for lead logging (configured inside [site-config.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/site-config.ts)).

---

## 5. Production Readiness Status

* **Status**: **PRODUCTION READY**
* **Verification**: The build compiles successfully in **16.4s** with 0 warnings or errors. Lead logging has been standardized, and spam routes are excluded from Google indexing.
