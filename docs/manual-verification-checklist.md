# Phase 17: Final Manual Human Verification Checklist

This checklist defines the manual validation actions required by QA engineers and launch coordinators before setting the BLINIQ cosmetic surgery site live on production.

---

## 1. Forms & Lead Collection Testing
Submit test data to every lead-acquisition point and verify:
1. Valid submission triggers the success state without page reload.
2. In dev environment: Lead data is logged to the browser console.
3. In production environment: Lead data is posted to Google Apps Script and written to Google Sheets.
4. Input validation blocks short names (< 2 chars), short phones (< 8 digits), and invalid email addresses.

- [ ] **Homepage Consultation Form**:
  - [ ] Valid submission returns successful modal/status message.
  - [ ] GTM Event `form_submit_consultation` fires on success.
- [ ] **Contact Page Form**:
  - [ ] Valid submission returns successful status message.
  - [ ] GTM Event `form_submit_contact` fires on success.
- [ ] **Appointment Page Form**:
  - [ ] Practitioners dropdown populated correctly.
  - [ ] Clinical departments dropdown populated correctly.
  - [ ] GTM Event `form_submit_appointment` fires on success.
- [ ] **Procedure Evaluation Form** (Sidebar on dynamic pages):
  - [ ] Disabled procedure dropdown matches the current page slug title.
  - [ ] GTM Event `form_submit_evaluation` fires on success.

---

## 2. Analytics & Tracking Event Auditing
Verify that the `window.dataLayer` pushes match the tagging criteria when tested via GTM Preview Mode:

- [ ] **Pageviews**:
  - [ ] Direct landing on any dynamic page triggers the `pageview` event with correct `page_path` parameter.
  - [ ] SPA client-side routing transitions trigger subsequent `pageview` events.
- [ ] **Phone Clicks**:
  - [ ] Clicking the desktop popdown phone number triggers `phone_click`.
  - [ ] Clicking the footer telephone link triggers `phone_click`.
  - [ ] Clicking the mobile menu drawer phone link triggers `phone_click`.
- [ ] **WhatsApp Clicks**:
  - [ ] Clicks on floating WhatsApp buttons or content links push `whatsapp_click` to GTM.
- [ ] **Instagram Clicks**:
  - [ ] Clicking "View on Instagram" inside the transformations detail modal triggers `instagram_click`.
- [ ] **Video Opens**:
  - [ ] Clicking a video story thumbnail triggers `video_testimonial_open` with correct `video_title` details.
- [ ] **Form Submissions**:
  - [ ] Complete leads dispatch matching custom events (`form_submit_*`).

---

## 3. SEO & Crawl Integrity Verification
Test the compiled pages against search indexing parameters:

- [ ] **Rich Results Validation**:
  - [ ] Validate homepage schema structures using Google [Rich Results Test](https://search.google.com/test/rich-results). Check compliance of MedicalClinic, Physician, and Breadcrumbs.
- [ ] **Canonical Mappings**:
  - [ ] Verify that index and procedure pages render `<link rel="canonical" href="https://bliniq.in/[slug]" />` without double-slash errors.
- [ ] **OpenGraph / Social metadata**:
  - [ ] Check Facebook sharing debugger or metatags checker. Confirm description matches procedures keywords.
- [ ] **Sitemap.xml**:
  - [ ] Load `https://bliniq.in/sitemap.xml` in browser. Verify it is well-formed XML and lists clean dynamic pages.
- [ ] **Robots.txt**:
  - [ ] Load `https://bliniq.in/robots.txt` in browser. Verify `User-agent: *` is present and sitemap URL matches the target domain.

---

## 4. Mobile Responsiveness & Viewport Auditing
Inspect all pages across standard viewport breaks in Chrome Developer Tools, checking for horizontal scroll leakage, hit target sizing, and text overlapping:

- [ ] **Mobile Extra Small (320px)**:
  - [ ] Check navigation logo fits, drawer trigger responds, before/after slider handle is draggable by touch.
- [ ] **Mobile Standard (375px - 430px)**:
  - [ ] Grid layouts collapse into single column, fonts scale down readable, margins/paddings remain balanced.
- [ ] **Tablet Viewport (768px)**:
  - [ ] Layout grid adapts, margins check out, footer columns wrap cleanly.
- [ ] **Laptop/Desktop Small (1024px)**:
  - [ ] Sidebars sticky positioning works without overlap, menus transition from drawer to standard bar.
- [ ] **Large Desktop (1440px - 1920px)**:
  - [ ] Container limits container maximum width, image alignment checks out.

---

## 5. Migrated Content Completeness

- [ ] **Gallery Mappings**:
  - [ ] Inspect the picture gallery grid page to verify that all clinical pictures render.
- [ ] **Video Testimonials**:
  - [ ] Confirm video library holds active thumbnails.
- [ ] **Testimonials Content**:
  - [ ] Verify that real testimonials overwrite mock content when the client delivers approved reviews.
- [ ] **Instagram Feed**:
  - [ ] Check transformation links in the marquee slider point to the actual clinic social posts once links are configured.

---

## 6. Client Variables & Launch Configuration

- [ ] **Production Keys**:
  - [ ] Add real `NEXT_PUBLIC_GTM_ID` container ID.
  - [ ] Add real `NEXT_PUBLIC_GA_ID` property ID.
  - [ ] Add real `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` Web App URL.
- [ ] **Vercel Production Deployment**:
  - [ ] Check deployment logs on Vercel or similar host to ensure clean builds.
- [ ] **Domain Configuration**:
  - [ ] Point A/CNAME record at DNS provider to Vercel/Netlify host.
- [ ] **Search Console Submission**:
  - [ ] Register domain ownership and request indexing on GSC.
- [ ] **Analytics Verification**:
  - [ ] Open the site, run a test session, and verify that real-time activity pops up inside GA4 reports.
