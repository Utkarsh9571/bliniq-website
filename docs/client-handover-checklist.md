# Client Handover & Launch Checklist

This checklist defines completion milestones, outstanding client tasks, and verification steps for launch.

---

## 1. Development Complete (Engineering Sign-off)

- [x] **Website Migration**: Successfully migrated the legacy site layout to Next.js App Router.
- [x] **SEO Migration**: Migrated all Yoast metadata, titles, canonicals, and keywords.
- [x] **Mobile Optimization**: Resolved accordion lists, drawers, and optimized hit targets for mobile.
- [x] **Performance Optimization**: Lazy-loaded iframe players and optimized images.
- [x] **Forms Implementation**: Form inputs connected to the client-side `submitLead` helper utility.
- [x] **Gallery Migration**: Implemented a responsive picture gallery for before & after pictures.
- [x] **Structured Data**: Embedded JSON-LD schemas (MedicalClinic, Physician, dynamic Breadcrumbs, FAQs).
- [x] **Redirects**: Configured server-level 301 rules for numerical page suffixes.
- [x] **Analytics Preparation**: Created a GTM dataLayer push helper in `lib/analytics.ts`.

---

## 2. Client Actions Required (Awaiting Launch Assets)

- [ ] **Testimonials**: Provide final written patient reviews.
- [ ] **GTM**: Provide Google Tag Manager Container ID.
- [ ] **Analytics**: Provide Google Analytics 4 Measurement ID.
- [ ] **Google Sheets**: Deploy the Google Apps Script Web App and configure `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
- [ ] **Instagram Content**: Supply target transformation links for the marquee feed.

---

## 3. Post-Launch Actions (Go-Live Tasks)

- [ ] **Search Console Submission**: Verify domain ownership and submit the dynamic `sitemap.xml` for indexing.
- [ ] **Indexing Requests**: Submit inspection requests for high-priority surgical page slugs.
- [ ] **Analytics Verification**: Check live real-time reports inside Google Analytics to verify script trigger logs.
- [ ] **Conversion Testing**: Run test submissions through all forms to confirm rows are successfully added to Google Sheets and events fire in GTM.
