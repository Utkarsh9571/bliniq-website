# Media Hosting Plan & Inventory — BLINIQ Website

This plan details how static images and clinical media assets are hosted, managed, and referenced in the production environment.

---

## 1. Hosting Strategy

To keep the git repository lightweight and ensure high-speed page delivery, the BLINIQ website uses a hybrid media hosting strategy:
1. **Local Assets (Git Repo)**: Core UI branding assets, logos, and optimized WebP hero visuals are stored locally under `public/images/` and served directly.
2. **External Assets (GoDaddy Hosting)**: Reusable patient transformation case studies, historical blog illustrations, and clinical portfolio attachments are hosted externally on the GoDaddy server under `/uploads/`.

---

## 2. Media Directory Alignment

* All page content body text maps relative links starting with `/uploads/...` (e.g. `/uploads/2024/02/gynecomastia-treatment.jpg`).
* **Local environment**: Resolved via the directory symbolic link `public/uploads` pointing to the local `uploads` directory.
* **Production environment**: Deployed directly under the `/uploads/` root on the hosting provider (FTP or server folder structure).

---

## 3. Media Inventory Mappings

Below is the inventory mapping for high-priority media files:

| File Name | Current Usage | Status | Action / Final Hosting Location |
|---|---|---|---|
| `logo.png` | Main Header & Footer Brand Logo | **KEEP** | `/public/logo.png` (Local Git) |
| `doctor.jpeg` | surgeon Spotlight Preview Card | **KEEP** | `/public/doctor.jpeg` (Local Git) |
| `hero-beauty-desktop.webp` | Home Hero Slider Visual (Desktop) | **KEEP** | `/public/images/home/` (Local Git) |
| `surgeon-spotlight.webp` | Clinic Profile Surgeon Desk Image | **KEEP** | `/public/images/home/` (Local Git) |
| `Dr-Ashwini.jpg` | Chief Surgeon Portrait (About Us & Schema) | **KEEP** | `/uploads/2024/02/Dr-Ashwini.jpg` (External) |
| `Gallery-1.webp` to `Gallery-33.jpeg` | Case Studies Gallery Grids | **KEEP** | `/uploads/2023/10/` (External) |
| `Gynecomastia-1.jpeg` to `Liposuction-Tummy360.jpeg` | Before/After Gallery Details | **KEEP** | `/uploads/2023/12/` (External) |
| `WhatsApp Image 2026-06-30...` | Original Client Source Files | **REMOVE** | Already optimized to WebP in local images. Safe to delete. |
| `.php` malware files | WordPress spam fragments | **REMOVE** | Deleted. |
| WooCommerce placeholders | Default plugin empty graphics | **REMOVE** | Deleted. |
| Redux / Elementor logs | WordPress plugin logs | **REMOVE** | Deleted. |

---

## 4. Maintenance Guidelines

1. **New Clinic Transformations**: Compress any new before-after images using tinypng/squoosh, save as WebP, and upload them via FTP to the GoDaddy hosting `/uploads/` folder. Mappings can then be added directly in the content databases using `/uploads/...` paths.
2. **Git Repository Boundaries**: Do not add raw client photos directly to the git repository. All user-generated media or blog imagery must be routed to the external hosting uploads directories.
