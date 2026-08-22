import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import DoctorPreview from "@/components/home/DoctorPreview";
import SignatureTransformations from "@/components/home/SignatureTransformations";
import ConsultationSection from "@/components/home/ConsultationSection";
import OriginSection from "@/components/home/OriginSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import BodyContouringSection from "@/components/home/BodyContouringSection";
import TransformationsFeed from "@/components/home/TransformationsFeed";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ContactFormSection from "@/components/home/ContactFormSection";
import SurgeryVideosSection from "@/components/home/SurgeryVideosSection";
import { Metadata } from "next";
import { getPageMetadata, getHomepageSchemaJson } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "BLINIQ | Cosmetic & Plastic Surgery Clinic in Delhi",
  description: "Premier luxury aesthetic and cosmetic plastic surgery clinic in Dwarka, Delhi under Dr. Ashwani Kumar. Specializing in High-Definition Liposuction, Gynecomastia, & Rhinoplasty.",
  path: ""
});

export default function Home() {
  const homepageSchema = getHomepageSchemaJson();

  return (
    <>
      {/* Inject JSON-LD Schema script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <Header />
      <main className="grow">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Doctor Introduction */}
        <DoctorPreview />

        {/* 2c. Signature Transformations Carousel */}
        <SignatureTransformations />

        {/* 2b. Premium Consultation Experience */}
        <ConsultationSection />

        {/* 3. BLINIQ Origin */}
        <OriginSection />

        {/* 4. Services Offered */}
        <ServicesPreview />

        {/* 4b. Body Contouring Editorial */}
        <BodyContouringSection />

        {/* 5. Real Patient Transformations */}
        <TransformationsFeed />

        {/* 6. Why Choose BLINIQ */}
        <WhyChooseUs />

        {/* 7. Patient Stories / Testimonials */}
        <TestimonialsPreview />

        {/* 8. Consultation Contact Form */}
        <ContactFormSection />

        {/* 9. Surgery Video Testimonials */}
        <SurgeryVideosSection />
      </main>
      <Footer />
    </>
  );
}
