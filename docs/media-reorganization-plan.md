# Media Reorganization & Migration Plan

This document details the target layout structure, mapping schemes, and reference migration steps for the BLINIQ production media library.

---

## 1. Target Folder Layout

We will clean up the legacy `public/images/` and `uploads/` directories into a structured schema under `public/images/`:

```
public/images/
  brand/                # Logos, site identities, and favicon
  seo/                  # Social preview cards, OG images
  home/                 # Homepage-specific blocks
    hero/
    doctor/
    services/
    transformations/
  scrollers/            # Instagram / Transformation scrolling blocks
  gallery/              # Before/After cases and public galleries
  procedures/           # Subfolders grouped by treatment slug (hair-transplant, liposuction, etc.)
  doctors/              # Dr. Ashwani Kumar profile imagery
  clinic/               # Sterile theaters, lounge, interiors
  blogs/                # Article-specific images
  pages/                # About, Contact, and default markdown page graphics
  ui/                   # Patterns, textures, decorative inline indicators
```

---

## 2. Reorganization Directory Map

The reference details below outline how active media groups will map to target subdirectories:

| Current Source Path | Reorganized Target Path | Classification Category |
| :--- | :--- | :--- |
| `public/uploads/2024/02/Dr-Ashwini.jpg` | `public/images/doctors/dr-ashwani-kumar-profile.jpg` | DOCTOR / CLINIC |
| `public/uploads/2023/12/Liposuction-Tummy360.jpeg` | `public/images/procedures/liposuction-tummy360.webp` | PROCEDURE CONTENT |
| `public/images/lipo_after_*.png` | `public/images/scrollers/transformations/lipo-after.png` | INSTAGRAM / SCROLLERS |

---

## 3. Step-by-Step Reorganization Workflow

1. **Step 1: Staging Quarantine**: Move high-confidence deletion candidates into a non-public staging directory (`media-review/unused/`).
2. **Step 2: File Renaming & Migration**: Copy active files to their target folder layout with optimized, descriptive lowercase-kebab filenames (e.g. `gynecomastia-before-after-case-01-before.webp`).
3. **Step 3: Reference Replacements**: Run a replacement sweep across `legitimate-pages.json`, components, and styles to update old paths.
4. **Step 4: Prune Verification**: Run a full production build and validation pass.
5. **Step 5: Final Cleanup**: Delete the staging quarantine folder after manual review and approval.
