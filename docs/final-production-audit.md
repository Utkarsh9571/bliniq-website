# Final Production Audit — BLINIQ Website (Pre-Launch)

This report details a comprehensive, multidisciplinary audit of the BLINIQ Cosmetic & Plastic Surgery website codebase and assets immediately prior to production launch.

---

# Overall Score

* **Development Quality**: 9/10
* **Design**: 9/10
* **UX**: 8/10
* **Performance**: 9/10
* **SEO**: 6/10
* **Accessibility**: 7/10
* **Code Quality**: 8/10
* **Launch Readiness**: 7/10
* **Overall Score**: **77 / 100**

---

## 🔴 Critical Findings

### 1. Spam & Test Pages Active and Indexed in Sitemap
* **Problem**: Legacy WordPress spam content (such as cards/casino guides, test routes, and academic essay-writing pages) are present in the migrated pages database and dynamically outputted.
* **Location**: [legitimate-pages.json](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/migrated/legitimate-pages.json) (slugs: `how-to-play-a-hearts-card-game-online`, `term-paper-writers-needed-to-be`, `test`, `http-bliniq-in-about-us`) and outputted in `/sitemap.xml` via [sitemap.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/app/sitemap.ts#L30-L37).
* **Why it matters**: Search engines crawling the site will index unrelated casino, gaming, and essay writing content on a premium medical site. This causes immediate drops in Google E-E-A-T domain authority and damages clinic brand safety.
* **Recommended solution**: Delete these slugs from [legitimate-pages.json](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/migrated/legitimate-pages.json) completely and verify the build generates no static files for them.
* **Priority**: 🔴 Critical

### 2. Insecure Mixed-Content Asset References
* **Problem**: Embedded images in core page body content reference obsolete, insecure `http://` URLs pointing to the old WordPress directory structure.
* **Location**: [legitimate-pages.json](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/migrated/legitimate-pages.json) (About page content containing `http://www.bliniq.in/wp-content/...` src attributes).
* **Why it matters**: Insecure HTTP image links trigger mixed content warnings in modern HTTPS browsers. Furthermore, when the legacy WordPress site is shut down, these image references will break, resulting in missing layouts.
* **Recommended solution**: Upload these legacy media assets into the Next.js `/public/uploads/` directory, and update the paths in the page database to use relative roots (e.g. `/uploads/2021/06/12-3-906x1024.png`).
* **Priority**: 🔴 Critical

---

## 🟠 High Findings

### 3. Missing Custom SEO Metadata on Client-Rendered Pages
* **Problem**: Client-rendered pages (`"use client"`) cannot export static SEO metadata objects in Next.js App Router, resulting in missing custom titles and meta descriptions.
* **Location**: [contact-us/page.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/app/contact-us/page.tsx#L1), [gallery/page.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/app/gallery/page.tsx#L1), and [picture-gallery/page.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/app/picture-gallery/page.tsx#L1).
* **Why it matters**: High-intent pages inherit generic default layout metadata ("Bliniq - Dark Luxury Medical..."), lacking page-specific SEO keywords, reducing organic search click-through rates.
* **Recommended solution**: Refactor page routers to be server components (allowing metadata export) and import/render client modules for state handling.
* **Priority**: 🟠 High

### 4. Keyboard-Inaccessible Navigation Dropdowns
* **Problem**: Primary site dropdown submenus on desktop are toggled exclusively via hover interactions, lacking keyboard focus event bindings.
* **Location**: [Navigation.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/layout/Navigation.tsx#L112-L135).
* **Why it matters**: Keyboard-only and assistive screen-reader users cannot open the dropdowns or focus on individual treatment sub-pages, creating keyboard trap boundaries and violating basic web accessibility standards (WCAG 2.1).
* **Recommended solution**: Wire `onFocus`/`onBlur` properties and support click/spacebar toggles to display submenus for keyboard users.
* **Priority**: 🟠 High

### 5. Missing Production Client Keys & Integration Hooks
* **Problem**: Tracking IDs, Sheets submission triggers, and live reviews are mapped to simulated placeholders or default test settings.
* **Location**: [forms.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/lib/forms.ts#L21) (`HARDCODED_GOOGLE_SCRIPT_URL`), [layout.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/app/layout.tsx#L31-L32) (`process.env`), [testimonials.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/testimonials.ts), and [clinic-config.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/clinic-config.ts).
* **Why it matters**: Prevents GTM and GA4 analytics tracking from logging traffic, and leads submitted by users may land in test spreadsheets or get dropped if fallbacks fail.
* **Recommended solution**: Coordinate with the client to acquire and plug in the production GTM IDs, GA4 Measurement IDs, real testimonials, and target Spreadsheet URLs.
* **Priority**: 🟠 High

---

## 🟡 Medium Findings

### 6. Missing Text Labels / Accessible Names on Key Form Inputs
* **Problem**: Text input fields for form components lack explicit semantic labels, referencing only visual inline placeholders.
* **Location**: [AppointmentForm.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/appointment/AppointmentForm.tsx#L149-L178) (inputs for Name, Email, Phone) and [contact-us/page.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/app/contact-us/page.tsx#L129-L160).
* **Why it matters**: Assistive readers fail to announce form fields when placeholders disappear upon typing.
* **Recommended solution**: Provide `<label>` tags linked to inputs with corresponding `id` / `htmlFor` targets (can use a `.sr-only` class to hide them visually).
* **Priority**: 🟡 Medium

### 7. Hardcoded Fallback API URL in Client Bundle
* **Problem**: The Google Apps Script URL is written directly in the codebase as a fallback constant.
* **Location**: [forms.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/lib/forms.ts#L21) (`HARDCODED_GOOGLE_SCRIPT_URL`).
* **Why it matters**: Client-side visibility of Apps Script execution endpoints makes the endpoint discoverable, risking spam submission floods and complicating code management when Sheets URLs change.
* **Recommended solution**: Force endpoint configuration strictly via host environment variables (`process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL`) instead of hardcoding.
* **Priority**: 🟡 Medium

### 8. Empty Featured Images on Dynamic Procedure Pages
* **Problem**: The template supports displaying a featured image header, but dynamic pages have empty featured image properties in the database.
* **Location**: [legitimate-pages.json](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/migrated/legitimate-pages.json) (`"featuredImage": ""` across all entries).
* **Why it matters**: Dynamically generated procedures look visual-heavy but empty of illustrations, decreasing client conversion appeal.
* **Recommended solution**: Link high-quality clinical illustrations/stock assets to high-priority procedure entries in the JSON database.
* **Priority**: 🟡 Medium

---

## 🟢 Low Findings

### 9. Hardcoded Button Padding Overrides
* **Problem**: Button instances use manual inline class lists to override default sizes.
* **Location**: [Hero.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/home/Hero.tsx) (CTA buttons with arbitrary padding `py-2.5 px-5`).
* **Why it matters**: Hardcoding layouts across elements reduces visual design consistency.
* **Recommended solution**: Implement size props (e.g. `size="sm"`) in [Button.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/ui/Button.tsx).
* **Priority**: 🟢 Low

### 10. Legacy Schema Code Remnants
* **Problem**: Unused imports and schemas remain in utility files.
* **Location**: [seo.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/lib/seo.ts) (legacy functions `getClinicSchemaJson` and `getPhysicianSchemaJson`).
* **Why it matters**: Increases code maintenance baggage, although does not affect production bundle weight due to tree-shaking.
* **Recommended solution**: Clean up and remove these functions since they have been superseded by the connected `@graph` schema.
* **Priority**: 🟢 Low

---

## Must Fix Before Launch
- [ ] Remove legacy spam page entries from [legitimate-pages.json](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/content/migrated/legitimate-pages.json) (`how-to-play-a-hearts-card-game-online`, `term-paper-writers-needed-to-be`, `test`, `http-bliniq-in-about-us`).
- [ ] Replace HTTP insecure assets (wp-content URLs) in About page content with relative path configurations.
- [ ] Refactor client page wrappers (`app/contact-us/page.tsx`, `app/gallery/page.tsx`, `app/picture-gallery/page.tsx`) to server files to enable SEO metadata indexing.

## Should Fix Soon
- [ ] Wire keyboard focus handlers (`onFocus`/`onBlur`) for the main desktop navigation dropdowns in [Navigation.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/layout/Navigation.tsx).
- [ ] Add hidden accessible `<label>` names for form inputs in [AppointmentForm.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/appointment/AppointmentForm.tsx) and [ContactPage](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/app/contact-us/page.tsx).
- [ ] Supply real patient testimonials and Instagram URL parameters to clear out blockages.

## Nice To Have
- [ ] Map high-quality featured images to dynamic procedures inside the JSON database instead of leaving them empty.
- [ ] Refactor [Button.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/ui/Button.tsx) to accept sizing configurations.

## Client-Dependent Items
1. **Google Sheets Web App**: Production Apps Script deployment URL.
2. **GTM Container ID**: Required for `NEXT_PUBLIC_GTM_ID`.
3. **GA4 Measurement ID**: Required for `NEXT_PUBLIC_GA_ID`.
4. **Testimonial assets**: Real verified patient reviews and before/after transformation logs.

---

## Final Recommendation

As the Lead Technical Reviewer, I classify the BLINIQ website's production launch status as:

**NEAR READY (NOT APPROVED FOR LAUNCH)**

### Rationale
While the website is highly performant (compiling with 0 errors) and features a premium luxury design, it **cannot be approved for immediate launch** until the legacy WordPress spam pages (casino/essay guides) are purged from the dynamic sitemap database and insecure HTTP mixed content references are corrected. Launching in the current state would result in search engines indexing junk content under the clinic's brand name. Once these items are resolved, the site will be fully approved.
