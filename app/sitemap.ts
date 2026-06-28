import { MetadataRoute } from "next";
import { PROCEDURES_DATA } from "@/content/procedures";

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

  // Dynamic procedures pages
  const proceduresPages = PROCEDURES_DATA.map((proc) => ({
    url: `${baseUrl}/procedures/${proc.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...staticPages, ...proceduresPages];
}
