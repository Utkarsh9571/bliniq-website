import { Metadata } from "next";
import { CLINIC_DATA } from "@/content/clinic";
import { DOCTOR_DATA } from "@/content/doctor";
import { VideoStory } from "@/content/videos";

// Dynamic metadata generator
export function getPageMetadata({
  title,
  description,
  path = "",
  noIndex = false
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `https://bliniq.in${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: CLINIC_DATA.name,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: {
      index: !noIndex,
      follow: !noIndex
    }
  };
}

// 1. Organization & MedicalClinic Schemas (Legacy, kept for compatibility)
export function getClinicSchemaJson() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bliniq.in/#organization",
        "name": CLINIC_DATA.name,
        "url": "https://bliniq.in",
        "logo": "https://bliniq.in/images/seo/logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CLINIC_DATA.phone,
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": "en"
        },
        "sameAs": CLINIC_DATA.socialLinks
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://bliniq.in/#clinic",
        "name": CLINIC_DATA.name,
        "description": CLINIC_DATA.description,
        "url": "https://bliniq.in",
        "telephone": CLINIC_DATA.phone,
        "email": CLINIC_DATA.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CLINIC_DATA.address.streetAddress,
          "addressLocality": CLINIC_DATA.address.addressLocality,
          "addressRegion": CLINIC_DATA.address.addressRegion,
          "postalCode": CLINIC_DATA.address.postalCode,
          "addressCountry": CLINIC_DATA.address.addressCountry
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": CLINIC_DATA.geo.latitude,
          "longitude": CLINIC_DATA.geo.longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        "paymentAccepted": CLINIC_DATA.paymentMethods.join(", "),
        "priceRange": "$$$"
      }
    ]
  };
}

// 2. Physician Schema (Legacy, kept for compatibility)
export function getPhysicianSchemaJson() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": DOCTOR_DATA.name,
    "image": "https://bliniq.in/images/doctors/Dr-Ashwini.webp",
    "description": DOCTOR_DATA.description,
    "telephone": CLINIC_DATA.phone,
    "medicalSpecialty": "CosmeticProcedure",
    "knowsAbout": DOCTOR_DATA.clinicSpecialties,
    "alumniOf": DOCTOR_DATA.degrees.map((d) => ({
      "@type": "EducationalOrganization",
      "name": d
    })),
    "worksFor": {
      "@type": "MedicalClinic",
      "name": CLINIC_DATA.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLINIC_DATA.address.streetAddress,
        "addressLocality": CLINIC_DATA.address.addressLocality,
        "addressRegion": CLINIC_DATA.address.addressRegion,
        "postalCode": CLINIC_DATA.address.postalCode,
        "addressCountry": CLINIC_DATA.address.addressCountry
      }
    }
  };
}

// 3. FAQPage Schema (Legacy, kept for compatibility)
export function getFAQPageSchemaJson(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

// 4. Breadcrumb Schema (Legacy, kept for compatibility)
export function getBreadcrumbSchemaJson(crumbs: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  };
}

// 5. VideoObject Schema
export function getVideoObjectSchemaJson(vid: VideoStory) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": vid.title,
    "description": vid.desc,
    "thumbnailUrl": vid.thumbnail,
    "uploadDate": "2024-01-01T08:00:00Z",
    "duration": "PT4M30S",
    "embedUrl": `https://www.youtube.com/embed/${vid.id}`
  };
}

// --- NEW Connected Structured Data Graphs ---

// 6. Homepage Connected Schema Graph
export function getHomepageSchemaJson() {
  const homeFaqs = [
    {
      q: "Where is BLINIQ clinic located and what are the operational hours?",
      a: "BLINIQ Cosmetic Surgery Centre is located in Dwarka, Delhi. We are open every day (Monday to Sunday) from 09:00 AM to 09:00 PM for pre-booked consultations and treatment check-ups."
    },
    {
      q: "Do you offer No-Cost EMI financing options for surgical procedures?",
      a: "Yes, we offer flexible No-Cost EMI financing schemes in collaboration with major healthcare finance partners to make cosmetic treatments accessible and affordable."
    },
    {
      q: "Who conducts the surgeries and evaluations at BLINIQ?",
      a: "All evaluations, surgical planning, and operating procedures are personally performed by our chief board-certified plastic surgeon, Dr. Ashwani Kumar."
    },
    {
      q: "Is patient confidentiality guaranteed at your clinic?",
      a: "Absolutely. We adhere to the highest clinical standards of medical ethics. Patient files, case histories, and photographic records remain 100% confidential and secure."
    }
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bliniq.in/#website",
        "url": "https://bliniq.in",
        "name": "BLINIQ",
        "publisher": { "@id": "https://bliniq.in/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://bliniq.in/#organization",
        "name": CLINIC_DATA.name,
        "url": "https://bliniq.in",
        "logo": "https://bliniq.in/images/seo/logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CLINIC_DATA.phone,
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": "en"
        },
        "sameAs": CLINIC_DATA.socialLinks
      },
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": "https://bliniq.in/#clinic",
        "name": CLINIC_DATA.name,
        "description": CLINIC_DATA.description,
        "url": "https://bliniq.in",
        "logo": "https://bliniq.in/images/seo/logo.webp",
        "telephone": CLINIC_DATA.phone,
        "email": CLINIC_DATA.email,
        "priceRange": "$$$",
        "medicalSpecialty": "PlasticSurgery",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CLINIC_DATA.address.streetAddress,
          "addressLocality": CLINIC_DATA.address.addressLocality,
          "addressRegion": CLINIC_DATA.address.addressRegion,
          "postalCode": CLINIC_DATA.address.postalCode,
          "addressCountry": CLINIC_DATA.address.addressCountry
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": CLINIC_DATA.geo.latitude,
          "longitude": CLINIC_DATA.geo.longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        "hasMap": "https://maps.google.com/maps?q=Dwarka%20Delhi%20India",
        "paymentAccepted": CLINIC_DATA.paymentMethods.join(", ")
      },
      {
        "@type": "Physician",
        "@id": "https://bliniq.in/#physician",
        "name": DOCTOR_DATA.name,
        "jobTitle": DOCTOR_DATA.title,
        "image": "https://bliniq.in/images/doctors/Dr-Ashwini.webp",
        "description": DOCTOR_DATA.description,
        "telephone": CLINIC_DATA.phone,
        "medicalSpecialty": "PlasticSurgery",
        "knowsAbout": DOCTOR_DATA.clinicSpecialties,
        "url": "https://bliniq.in/about-us",
        "alumniOf": DOCTOR_DATA.degrees.map((d) => ({
          "@type": "EducationalOrganization",
          "name": d
        })),
        "worksFor": { "@id": "https://bliniq.in/#clinic" },
        "affiliation": { "@id": "https://bliniq.in/#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bliniq.in/#faq",
        "mainEntity": homeFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };
}

// 7. Extract FAQs from HTML safely without brittle regex where possible
export function extractFAQsFromHtml(html: string): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];
  if (!html) return faqs;

  const lowerHtml = html.toLowerCase();
  let faqIndex = lowerHtml.indexOf("frequently asked questions");
  if (faqIndex === -1) {
    faqIndex = lowerHtml.indexOf("faq</h2>");
    if (faqIndex === -1) {
      faqIndex = lowerHtml.indexOf("faqs</h2>");
    }
  }

  if (faqIndex === -1) return faqs;

  const faqContent = html.substring(faqIndex);

  // Split content by anchor tags to find questions
  const parts = faqContent.split(/<a\s+/i);
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const closeOpeningTagIndex = part.indexOf(">");
    if (closeOpeningTagIndex === -1) continue;

    const closeTagIndex = part.indexOf("</a>");
    if (closeTagIndex === -1 || closeTagIndex < closeOpeningTagIndex) continue;

    const questionText = part.substring(closeOpeningTagIndex + 1, closeTagIndex)
      .replace(/<[^>]*>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .trim();

    const postAnchor = part.substring(closeTagIndex + 4);
    const openParagraphIndex = postAnchor.indexOf("<p");
    if (openParagraphIndex === -1) continue;

    const closeOpeningParagraphIndex = postAnchor.indexOf(">", openParagraphIndex);
    if (closeOpeningParagraphIndex === -1) continue;

    const closeParagraphIndex = postAnchor.indexOf("</p>", closeOpeningParagraphIndex);
    if (closeParagraphIndex === -1) continue;

    const answerText = postAnchor.substring(closeOpeningParagraphIndex + 1, closeParagraphIndex)
      .replace(/<[^>]*>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .trim();

    if (questionText && answerText) {
      faqs.push({ q: questionText, a: answerText });
    }
  }

  // Fallback for Q1/A1 style text lists if no structured tags found
  if (faqs.length === 0) {
    let qNum = 1;
    while (true) {
      const qMarker = `Q${qNum}`;
      const aMarker = `A${qNum}`;
      const qIdx = lowerHtml.indexOf(qMarker.toLowerCase(), faqIndex);
      const aIdx = lowerHtml.indexOf(aMarker.toLowerCase(), faqIndex);

      if (qIdx === -1 || aIdx === -1 || aIdx < qIdx) {
        break;
      }

      let questionText = html.substring(qIdx + qMarker.length, aIdx)
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&nbsp;/g, " ")
        .trim();

      questionText = questionText.replace(/^[:\s\-\.\?]+/, "").trim();

      const nextQIdx = html.toLowerCase().indexOf(`q${qNum + 1}`, aIdx);
      let endIdx = nextQIdx !== -1 ? nextQIdx : html.length;

      const endTags = ["</h2>", "</div>", "</section>"];
      for (const tag of endTags) {
        const tagIdx = html.toLowerCase().indexOf(tag, aIdx);
        if (tagIdx !== -1 && tagIdx < endIdx) {
          endIdx = tagIdx;
        }
      }

      let answerText = html.substring(aIdx + aMarker.length, endIdx)
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&nbsp;/g, " ")
        .trim();

      answerText = answerText.replace(/^[:\s\-\.\?]+/, "").trim();

      if (questionText && answerText) {
        faqs.push({ q: questionText, a: answerText });
      }

      qNum++;
    }
  }

  return faqs;
}

// 8. Procedure Page Connected Schema Graph (BreadcrumbList + Service + FAQPage)
export function getProcedurePageSchemaJson(
  slug: string,
  title: string,
  description: string,
  contentHtml: string
) {
  const pageUrl = `https://bliniq.in/${slug}`;

  // 1. Breadcrumbs
  const crumbs = [
    { name: "Home", item: "https://bliniq.in" },
    { name: title, item: pageUrl }
  ];
  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  };

  // 2. Service
  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": title,
    "serviceType": "Cosmetic Surgery Procedure",
    "provider": {
      "@type": "MedicalBusiness",
      "@id": "https://bliniq.in/#clinic",
      "name": CLINIC_DATA.name,
      "url": "https://bliniq.in",
      "telephone": CLINIC_DATA.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLINIC_DATA.address.streetAddress,
        "addressLocality": CLINIC_DATA.address.addressLocality,
        "addressRegion": CLINIC_DATA.address.addressRegion,
        "postalCode": CLINIC_DATA.address.postalCode,
        "addressCountry": CLINIC_DATA.address.addressCountry
      }
    },
    "description": description,
    "audience": {
      "@type": "Audience",
      "audienceType": "Adults"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Delhi NCR"
    }
  };

  // 3. FAQPage (if FAQs exist)
  const faqs = extractFAQsFromHtml(contentHtml);
  const graph: unknown[] = [breadcrumbList, service];

  if (faqs.length > 0) {
    const faqPage = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
    graph.push(faqPage);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
