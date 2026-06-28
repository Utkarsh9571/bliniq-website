import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import DoctorPreview from "@/components/home/DoctorPreview";
import OriginSection from "@/components/home/OriginSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import TransformationsFeed from "@/components/home/TransformationsFeed";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ContactFormSection from "@/components/home/ContactFormSection";
import SurgeryVideosSection from "@/components/home/SurgeryVideosSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Doctor Introduction */}
        <DoctorPreview />

        {/* 3. BLINIQ Origin */}
        <OriginSection />

        {/* 4. Services Offered */}
        <ServicesPreview />

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
