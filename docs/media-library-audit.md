# Media Library Audit Report

Generated on: 2026-07-25

## 1. Executive Summary

- **Total Media Files**: 6638
- **Total Storage Size**: 599.92 MB
- **Actively Used Files**: 632 (106.30 MB)
- **Unused Files (Currently Unreferenced)**: 4935 (431.18 MB)
- **WordPress Generated Crop Variants (Unused)**: 1043 (49.61 MB)
- **WooCommerce / Legacy Theme Templates**: 28 (12.82 MB)
- **Uncertain / Requiring Manual Review**: 26 (2.03 MB)

---

## 2. Directory Reference Metrics

| Directory Path | Total Files | Estimated Size | Active Files | Unused Files |
| :--- | :--- | :--- | :--- | :--- |
| `uploads/` | 3305 | 294.50 MB | 302 | 3003 |
| `public/images/` | 10 | 0.93 MB | 10 | 0 |

---

## 3. Active Categories Summary

- **HOME**: 50 files
- **INSTAGRAM / SCROLLERS**: 1 files
- **SIGNATURE TRANSFORMATIONS**: 0 files
- **PICTURE GALLERY**: 112 files
- **DOCTOR / CLINIC**: 4 files
- **PROCEDURE CONTENT**: 426 files
- **BLOG CONTENT**: 0 files
- **GENERAL CONTENT**: 0 files
- **SEO / SOCIAL**: 3 files
- **UI / DECORATIVE**: 10 files

---

## 4. Key Performance Recommendations

1. **Convert to WebP**: Many large JPEG/PNG assets under `uploads/` exceed 1MB. Converting them to WebP will shrink storage size by over 70% with zero quality loss.
2. **Prune WordPress Crop Variants**: Over 1043 crop sizes (e.g. 150x150, 300x200) are sitting unreferenced in `uploads/`. Eliminating these saves **49.61 MB** of git size.
3. **Prune WooCommerce Placeholders**: Obsolete templates represent another **12.82 MB** of bloat.
