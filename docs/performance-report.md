# Web Performance & Core Web Vitals Optimization Report

This report outlines the optimization passes executed on the BLINIQ codebase, evaluating LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), asset delivery, and bundle size metrics.

---

## 1. Audit Checklists & Solutions

### ✓ Image Compression & WebP Usage
- **Next.js Image Component**: Standardized on Next.js `<Image>` component for main editorial features, enforcing automatic sizing, layout constraints, and modern WebP generation.
- **Unoptimized Flag**: Mapped `unoptimized: true` in `next.config.ts` for dynamic CMS-hosted uploads (like patient case studies) to allow compatibility with direct database source strings.
- **Format**: All static graphic assets (logos, background glows, hero cases) are served using `.webp` or highly compressed `.png`.

### ✓ Lazy Loading & Code Splitting
- **Dynamic Imports**: Form widgets, scroll indicator sliders, and video players use dynamic split imports or code execution boundaries (`"use client"` modules) to keep the initial HTML bundle extremely small.
- **Scroll Handlers**: High-overhead event listeners (such as scroll height listeners for sticky banners) use passive flags (`{ passive: true }`) to prevent main thread blocking during scroll.

### ✓ Video Iframe Mounting (CLS & Thread Optimization)
- **Click-to-Mount Video Player**: Testimonial videos do not preload raw YouTube iframes, which would slow down initial page speeds. Instead, a lightweight thumbnail is rendered first.
- **Cinematic Lightbox**: Clicking a testimonial thumbnail mounts the dynamic iframe player inside a modal, isolating third-party scripts from the initial page load execution.

### ✓ CLS Prevention (Cumulative Layout Shift)
- **Aspect Ratio Locking**: Hero sliders, comparison sliders, and gallery items use explicit aspect-ratio declarations (e.g. `aspect-video`, `aspect-3/2`, `aspect-square`) to reserve space in the browser layout engine before images finish fetching.
- **Font Face Loading**: Custom Google Fonts (Inter and Cormorant Garamond) are imported using `next/font/google` with `display: "swap"`. This guarantees fallback system fonts are used instantly, preventing FOUT (Flash of Unstyled Text) layout shifts.

### ✓ LCP (Largest Contentful Paint) Improvements
- **Hero Image Priority**: The active slide image in the cinematic hero is declared with the `priority` attribute. This instructs the browser to download the LCP hero slide at maximum priority.

---

## 2. Target Lighthouse Performance Scores

The project has been optimized to reach the following scores upon production hosting deployment:

| Device Profile | Performance Target | Accessibility Target | Best Practices Target | SEO Target |
| :--- | :---: | :---: | :---: | :---: |
| **Desktop** | **95+** | **90+** | **95+** | **100** |
| **Mobile** | **85+** | **90+** | **95+** | **100** |

---

## 3. Post-Launch Performance Optimization Checklist

To sustain high performance post-launch:
1. **Configure CDN Edge Caching**: Ensure host provider (Vercel or Netlify) has global edge caching active to serve static HTML pages in `< 50ms`.
2. **Compress Next.js Dynamic Assets**: Enable Brotli compression on the serving web server for JSON payload fetches.
3. **Monitor Third-Party Script Weights**: Regularly evaluate the size of scripts added by GTM (such as hotjar or active chat boxes) as these are the main contributors to mobile performance drops.
4. **Perform Periodic Image Audits**: Compress any new before/after transformation pictures uploaded by the clinic staff using tinypng/squoosh before saving them to the CMS folders.
