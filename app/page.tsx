import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StorySection from "@/components/home/StorySection";
import CategoryGrid from "@/components/home/CategoryGrid";
import ServicesPreview from "@/components/home/ServicesPreview";
import DoctorPreview from "@/components/home/DoctorPreview";
import Gallery from "@/components/home/Gallery";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import BlogPreview from "@/components/home/BlogPreview";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Clinic Story */}
        <StorySection />

        {/* 3. Category Grid */}
        <CategoryGrid />

        {/* 4. Popular Procedures */}
        <ServicesPreview />

        {/* 5. Doctor Spotlight */}
        <DoctorPreview />

        {/* 6. Before & After Gallery */}
        <Gallery />

        {/* 7. Testimonials */}
        <TestimonialsPreview />

        {/* 8. Latest Articles */}
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
