import { MetadataRoute } from "next";
import legitimatePages from "@/content/migrated/legitimate-pages.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bliniq.in";

  // Standard static pages
  const staticPages = [
    "",
    "/about-us",
    "/accessibility",
    "/appointment",
    "/blog",
    "/contact-us",
    "/cookie-policy",
    "/doctors",
    "/gallery",
    "/picture-gallery",
    "/privacy-policy",
    "/services",
    "/terms-conditions"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dynamic pages from migrated JSON (all flat root-level URLs)
  const dynamicPages = legitimatePages
    .filter((p) => p.type === "procedure" || p.type === "seo-page" || p.type === "blog" || p.type === "service" || p.type === "doctor")
    .map((p) => ({
      url: `${baseUrl}/${p.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: p.type === "blog" ? 0.7 : 0.9
    }));

  return [...staticPages, ...dynamicPages];
}
