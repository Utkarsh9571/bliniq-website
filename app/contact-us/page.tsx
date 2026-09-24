import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactUsContent from "@/components/contact/ContactUsContent";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Contact Us | Location, Phone & Consultation Booking | BLINIQ Delhi",
  description: "Get in touch with BLINIQ Cosmetic Surgery Centre in Dwarka, Delhi. Find our clinic address, phone numbers, map location, and direct messaging portal.",
  path: "/contact-us"
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactUsContent />
      <Footer />
    </>
  );
}
