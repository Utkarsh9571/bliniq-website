import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import DoctorPreview from "@/components/home/DoctorPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import BlogPreview from "@/components/home/BlogPreview";
import FAQPreview from "@/components/home/FAQPreview";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesPreview />
        <DoctorPreview />
        <TestimonialsPreview />
        <BlogPreview />
        <FAQPreview />
      </main>
      <Footer />
    </>
  );
}
