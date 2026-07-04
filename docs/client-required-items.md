# Client-Required Items & Configurations (Blockers)

The items listed in this document are currently **Blocked by Client**. 

While the website's development and infrastructure are fully completed from the engineering side, these actual production assets, keys, and credentials must be supplied by the client before launch.

---

## 1. Credentials & Configuration Keys

### □ Google Tag Manager (GTM) Container ID
* **Current Status**: Pre-wired in layout templates (mocked as `GTM-MOCKID123` for local verification).
* **Action Required**: Client needs to create a GTM container at [Google Tag Manager](https://tagmanager.google.com/) and provide the container ID (format: `GTM-XXXXXXX`).

### □ Google Analytics (GA4) Measurement ID
* **Current Status**: Pre-wired in layout templates (mocked as `G-MOCKID456`).
* **Action Required**: Client needs to create a Google Analytics 4 property at [Google Analytics](https://analytics.google.com/) and supply the Measurement ID (format: `G-XXXXXXXXXX`).

### □ Google Apps Script Web App URL
* **Current Status**: Form submission library pre-wired (runs in console simulation mode if URL is not configured).
* **Action Required**: Client must create and publish a Google Apps Script Web App from their target Google Sheet, and supply the Web App URL (format: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 2. Content & Media Assets

### □ Written Testimonials
* **Current Status**: Testimonials preview layout designed with mock patient stories.
* **Action Required**: Client must supply the approved text copy for patient reviews to replace the placeholders in `content/testimonials.ts`.

### □ Video Testimonials & Case Approvals
* **Current Status**: Video player code and modal playlist operational.
* **Action Required**: Client to review the final list of patient video files/links in `content/videos.ts` and give written approval for publication.

### □ Instagram Transformation Posts
* **Current Status**: Infinite marquee slider component is complete.
* **Action Required**: Client to supply the specific Instagram post URLs, procedure tags, and cover images to link to the transformations feed.

### □ Final Approval on Replaced Media
* **Current Status**: Replaced Brooklyn theme placeholder images with generic medical/clinical files.
* **Action Required**: Client to sign off on the generic images or provide high-resolution replacement photos.
