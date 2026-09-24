import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalleryContent from "@/components/gallery/GalleryContent";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Surgical Journey Videos & Patient Testimonials | BLINIQ Delhi",
  description: "Watch verified patient recovery stories, surgical journeys, and treatment outcome videos from BLINIQ Cosmetic Surgery Centre in Dwarka, Delhi.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <>
      <Header />
      <GalleryContent />
      <Footer />
    </>
  );
}
