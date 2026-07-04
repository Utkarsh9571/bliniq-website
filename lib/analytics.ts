// Google Tag Manager & Google Analytics 4 Event Tracking Helpers

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export interface TrackEventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

/**
 * Push a virtual pageview event to the GTM dataLayer.
 * @param url The page path (e.g., '/liposuction-surgery-in-delhi')
 */
export const trackPageview = (url: string) => {
  if (typeof window !== "undefined") {
    const dataLayer = window.dataLayer || [];
    window.dataLayer = dataLayer;
    dataLayer.push({
      event: "pageview",
      page_path: url,
    });
  }
};

/**
 * Push a custom interaction or conversion event to the GTM dataLayer.
 */
export const trackEvent = ({ action, category, label, value, ...customData }: TrackEventParams) => {
  if (typeof window !== "undefined") {
    const dataLayer = window.dataLayer || [];
    window.dataLayer = dataLayer;
    dataLayer.push({
      event: action,
      event_category: category,
      event_label: label || "",
      event_value: value !== undefined ? value : null,
      ...customData,
    });
  }
};

