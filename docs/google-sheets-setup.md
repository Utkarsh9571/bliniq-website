# Google Sheets Lead Capture Integration Guide (Google Apps Script)

This guide details how to set up the client-side Google Sheets lead logging integration. Leads will submit directly from the user's browser to a Google Apps Script Web App, keeping the front-end codebase static and free from private credentials or server API handlers.

---

## 1. Required Environment Variables

Before deploying the static build, configure the following variable in your hosting platform (e.g., Vercel, Netlify, or local `.env.local` file):

```bash
# Google Apps Script published Web App URL (starts with https://script.google.com/macros/s/...)
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_published_web_app_url_here
```

---

## 2. Google Sheets & Apps Script Setup

Follow these steps to link your website forms to a Google Sheet:

1. **Create the Target Google Sheet**:
   * Open [Google Sheets](https://sheets.google.com/) and create a new blank spreadsheet.
   * Enter these header labels in the first row (**Row 1**):
     * Column A: `Timestamp`
     * Column B: `Name`
     * Column C: `Phone`
     * Column D: `Email`
     * Column E: `Procedure`
     * Column F: `Preferred Date`
     * Column G: `Message`
     * Column H: `Source Page`

2. **Open the Apps Script Editor**:
   * Inside your Google Sheet, go to the top menu and select **Extensions** > **Apps Script**.

3. **Paste the Script Code**:
   * Delete any default code inside the editor and paste the following snippet:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 1. Honeypot Spam Protection
    // Bots automatically auto-fill hidden input fields. If 'website' has a value, discard.
    if (data.website && data.website.toString().trim() !== "") {
      return ContentService.createTextOutput(JSON.stringify({ success: true, message: "Spam discarded." }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 2. Reject empty phone numbers
    if (!data.phone || data.phone.toString().trim() === "") {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: "Phone number is required." }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = "Enquiries"; // Default fallback
    
    // Route lead data to respective sheet name based on form source page parameter
    var source = data.sourcePage || "";
    if (source === "contact-us" || source === "appointment") {
      sheetName = "Appointments";
    }
    
    // Get target sheet or insert a new one with column headers
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      // Auto-create header labels in Row 1
      var headers = [
        "Timestamp",
        "Name",
        "Phone",
        "Email",
        "Procedure / Topic",
        "Preferred Date / Time",
        "Message",
        "Source Page"
      ];
      sheet.appendRow(headers);
      
      // Apply clean formatting styling to header row
      sheet.getRange("A1:H1").setFontWeight("bold").setBackground("#EFEFEF");
    }
    
    // 3. Format row details (uses Apps Script system clock for timestamp)
    var timestamp = new Date();
    var row = [
      timestamp,
      data.name || "",
      "'" + (data.phone || ""), // Prefix with single-quote to prevent scientific formatting
      data.email || "",
      data.procedure || "",
      data.preferredDate || "",
      data.message || "",
      source
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Deploy the Script as a Web App**:
   * Click **Save** (disk icon).
   * Click the blue **Deploy** button in the top-right corner, and select **New deployment**.
   * Click the gear icon next to "Select type" and select **Web App**.
   * Fill out the deployment configuration exactly as follows:
     * **Description**: `Bliniq Leads API`
     * **Execute as**: **Me (your-email@gmail.com)**
     * **Who has access**: **Anyone** *(This is mandatory so that form submissions from users can reach the script)*
   * Click **Deploy**.
   * If prompted, click **Authorize Access** and select your Google account to grant the script permission to write to the spreadsheet.

5. **Copy the Web App URL**:
   * Copy the generated **Web App URL** shown on the confirmation screen (e.g., `https://script.google.com/macros/s/AKfycb.../exec`).
   * You can configure this URL in one of two ways:
     * **Option A (Environment Variable)**: Add the URL to your deployment platform's environment variables as `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
     * **Option B (Codebase Fallback)**: For fully static hosting without environment variables (e.g., traditional CDNs, FTP servers, or Apache), open [lib/forms.ts](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/lib/forms.ts) and paste your URL directly into the `HARDCODED_GOOGLE_SCRIPT_URL` constant:
       ```typescript
       export const HARDCODED_GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/.../exec";
       ```

---

## 3. Troubleshooting "401 (Unauthorized)" Errors

If submissions result in a console error:
`script.google.com/macros/s/.../exec Failed to load resource: the server responded with a status of 401`

This is caused by incorrect Apps Script deployment configuration. Execute these steps to resolve:

1. **Verify "Who has access" settings**:
   * In Apps Script, click **Deploy** > **Manage deployments**.
   * Locate the active Web App deployment, click the **Pencil (Edit)** icon.
   * Ensure that **Who has access** is set to **Anyone** (not *Only myself* or *Anyone with Google Account*). If set incorrectly, change it to **Anyone**.

2. **Publish a New Version Deployment (Critical)**:
   * Google Apps Script cache prevents changes from taking effect immediately. Whenever you edit the code or update permissions, you **must publish a new version**:
   * Click **Deploy** > **Manage deployments**.
   * Click the **Pencil (Edit)** icon.
   * Under the **Version** dropdown, select **New version**.
   * Click **Deploy** and authorize permissions if prompted.
   * Note: The Web App URL remains the same across versions, but this forces Google to deploy the latest permission settings.


