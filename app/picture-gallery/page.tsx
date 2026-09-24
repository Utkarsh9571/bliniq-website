import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PictureGalleryContent from "@/components/gallery/PictureGalleryContent";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Before & After Picture Gallery | Cosmetic Transformations | BLINIQ Delhi",
  description: "Browse high-definition before and after results for gynecomastia, liposuction, rhinoplasty, and facial cosmetic procedures at BLINIQ Delhi.",
  path: "/picture-gallery"
});

export default function PictureGalleryPage() {
  return (
    <>
      <Header />
      <PictureGalleryContent />
      <Footer />
    </>
  );
}
