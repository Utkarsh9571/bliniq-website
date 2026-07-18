import { siteConfig } from "@/content/site-config";

export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  procedure?: string;
  preferredDate?: string;
  message?: string;
  sourcePage: string;
  submittedAt?: string;
  website?: string; // Honeypot field
}

export interface LeadSubmitResult {
  success: boolean;
  message?: string;
  error?: string;
}



/**
 * Submits a standardized lead payload directly to the Google Apps Script Web App.
 * If the configured Web App URL is missing, logs lead data to the console (development mode).
 */
export async function submitLead(data: LeadData): Promise<LeadSubmitResult> {
  // 1. Bot honeypot verification
  if (data.website && data.website.trim() !== "") {
    console.warn("Honeypot trigger: Bot submission discarded.");
    // Return mock success to prevent bots from attempting alternative bypasses
    return {
      success: true,
      message: "Lead submitted successfully!"
    };
  }

  const scriptUrl = siteConfig.googleScriptUrl;

  // 2. Dev simulation mode
  if (!scriptUrl) {
    console.log("----------------------------------------");
    console.log("SIMULATION: NEXT_PUBLIC_GOOGLE_SCRIPT_URL not configured.");
    console.log("Submitted payload details:", data);
    console.log("----------------------------------------");
    
    // Simulate minor network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message: "Form submitted successfully (simulated dev environment)."
    };
  }

  // 3. Browser-to-script delivery
  try {
    // Standardize structure for Apps Script parsing
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email || "",
      procedure: data.procedure || "",
      preferredDate: data.preferredDate || "",
      message: data.message || "",
      sourcePage: data.sourcePage,
      submittedAt: new Date().toISOString()
    };

    // Google Apps Script Web App POST endpoints are CORS-restricted for application/json preflights.
    // Sending the body as text/plain prevents the preflight OPTIONS request, executing the payload directly.
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors", // Crucial for client-side redirect chain in Google Apps Script Web App
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(payload)
    });

    // In no-cors mode, the browser returns an opaque response (status 0).
    // If the fetch call does not throw a network error, we treat it as successfully dispatched.
    return {
      success: true,
      message: "Lead submitted successfully!"
    };
  } catch (err) {
    console.error("Failed to submit lead to Apps Script:", err);
    return {
      success: false,
      error: "Connection error. Please try again or contact us directly."
    };
  }
}
