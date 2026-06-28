import { Metadata } from "next";
import { CLINIC_DATA } from "@/content/clinic";
import { DOCTOR_DATA } from "@/content/doctor";
import { ProcedureData } from "@/content/procedures";
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

// 1. Organization & MedicalClinic Schemas
export function getClinicSchemaJson() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bliniq.in/#organization",
        "name": CLINIC_DATA.name,
        "url": "https://bliniq.in",
        "logo": "https://bliniq.in/logo.png",
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

// 2. Physician Schema
export function getPhysicianSchemaJson() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": DOCTOR_DATA.name,
    "image": "https://bliniq.in/uploads/2024/02/Dr-Ashwini.jpg",
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

// 3. FAQPage Schema
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

// 4. Breadcrumb Schema
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
