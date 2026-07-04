# GTM & Google Analytics (GA4) Infrastructure Configuration

This document outlines the setup details for GTM triggers, tags, custom event definitions, and recommended reporting dashboards for launch.

---

## 1. Required Variables

Provide these values in your hosting server context (e.g., `.env` or Vercel Environment Settings):

```bash
# Google Tag Manager Container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4 Measurement ID (if loading GA4 tag outside or inside GTM)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 2. GTM Container Installation

The container scripts are pre-integrated into `app/layout.tsx`:
1. The GTM client script is automatically loaded inside the `<head>` tag.
2. The GTM `<noscript>` iframe fallback loads inside the `<body>` tag to track users with disabled Javascript.
3. The initialization executes dynamically only if `NEXT_PUBLIC_GTM_ID` is present in the environment context.

---

## 3. Required Triggers Configuration (GTM Console)

To capture conversion actions, define the following triggers in your GTM container dashboard:

### A. Dynamic Pageview Trigger
* **Name**: `Custom Pageview Event`
* **Trigger Type**: Custom Event
* **Event Name**: `pageview`
* **This trigger fires on**: All Custom Events

### B. Lead Submission Triggers
Set up triggers that fire when the custom event is pushed onto the dataLayer:
1. **Consultation Submissions**:
   - **Name**: `Lead - Consultation Form`
   - **Trigger Type**: Custom Event
   - **Event Name**: `form_submit_consultation`
2. **Contact Page Messages**:
   - **Name**: `Lead - Contact Form`
   - **Trigger Type**: Custom Event
   - **Event Name**: `form_submit_contact`
3. **Appointment Requests**:
   - **Name**: `Lead - Appointment Form`
   - **Trigger Type**: Custom Event
   - **Event Name**: `form_submit_appointment`
4. **Procedure Evaluation Submissions**:
   - **Name**: `Lead - Evaluation Form`
   - **Trigger Type**: Custom Event
   - **Event Name**: `form_submit_evaluation`

### C. Click Interaction Triggers
Set up triggers for outbound links:
1. **WhatsApp Clicks**:
   - **Name**: `Click - WhatsApp`
   - **Trigger Type**: Custom Event
   - **Event Name**: `instagram_click` / `whatsapp_click` OR Link Clicks (Click URL starts with `https://wa.me/` or `https://api.whatsapp.com/`)
2. **Phone Clicks**:
   - **Name**: `Click - Phone`
   - **Trigger Type**: Custom Event
   - **Event Name**: `phone_click` OR Link Clicks (Click URL starts with `tel:`)

---

## 4. Tag Configuration & GA4 Mapping

Configure the following tags in GTM to relay these events to Google Analytics 4 (GA4):

| Trigger Event | GA4 Event Name | GA4 Parameters | Purpose |
| :--- | :--- | :--- | :--- |
| `pageview` | `page_view` | `page_path` | Virtual path tracking on dynamic SSG routes |
| `form_submit_consultation` | `generate_lead` | `form_id: consultation`, `procedure` | Tracks homepage consultation forms |
| `form_submit_contact` | `generate_lead` | `form_id: contact_page` | Tracks general messages sent from contact-us page |
| `form_submit_appointment` | `generate_lead` | `form_id: appointment`, `department_doctor` | Tracks appointment booking request |
| `form_submit_evaluation` | `generate_lead` | `form_id: evaluation`, `procedure` | Tracks dynamic treatment evaluation request |
| `phone_click` | `contact_click` | `contact_method: telephone` | Clicks on clinic phone links |
| `whatsapp_click` | `contact_click` | `contact_method: whatsapp` | Clicks on instant WhatsApp chat links |
| `video_testimonial_open` | `video_play` | `video_title` | Opening patient video stories |
| `instagram_click` | `outbound_click` | `destination: instagram` | Instagram transformations link clicks |

---

## 5. GA4 Conversion Setup & Reporting

1. **Mark Events as Conversions**:
   * Navigate to **GA4 Admin** > **Conversions** (under Property Settings).
   * Mark `generate_lead` and `contact_click` as **Conversions** to map them to marketing channels.

2. **Recommended Dashboards**:
   * **Realtime Overview**: Monitor active user paths and instant conversions during GTM debug tests.
   * **Engagement Pages & Screens**: Analyze dynamic `/procedures` path engagement times.
   * **User Acquisition**: Check which traffic sources (Search, Direct, Ads) generate the highest conversion leads.
