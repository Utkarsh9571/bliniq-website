# BLINIQ Website — Content Page Generation Report

This report documents the results of Phase 13 Safe Page Generation for the flat root-level URL structure.

---

## 1. Page Generation Metrics

* **Total Legitimate Pages (KEEP)**: 105
* **Core Pages**: 5
* **Blog Posts**: 13
* **Doctors**: 0
* **Services**: 0
* **Procedures / SEO Landing Pages**: 87

---

## 2. Skipped & Excluded Records (Archive Summary)

* **Casino Spam Excluded**: 15 (Returning 404)
* **Demo Doctors Excluded**: 7 (Returning 404)
* **Demo Services Excluded**: 6 (Returning 404)

---

## 3. Pages Requiring Review

There are **2** pages flagged as `REVIEW_REQUIRED`:

| Slug | Title | Reason |
|---|---|---|
| `contact-us` | Contact Us | Contains partial matches or is Contact Us |
| `mole-removal-delhi` | Mole removal Delhi | Contains partial matches or is Contact Us |

---

## 4. Missing / Broken Image References

* **Total Broken References**: 0
* None. All mapped image files exist under `public/uploads/`.

---

## 5. Broken Internal Link Audit

* **Total Broken Links**: 1
* Page `gynecomastia-treatment-in-delhi` contains broken link destination: `/gynecomastia-surgery`

---

## 6. SEO Metadata Coverage

* **Focus Keyword Coverage**: 38.1% (40/105 pages)
* **Meta Title Coverage**: 37.1% (39/105 pages)
* **Meta Description Coverage**: 38.1% (40/105 pages)
* **Single Source of Truth**: Enabled via `content/migrated/seo-pages.json`.
