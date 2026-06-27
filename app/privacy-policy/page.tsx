import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6 font-sans">
            <p>
              Your privacy is of utmost importance to BLINIQ. We are committed to maintaining the confidentiality 
              and security of all personal and clinical information collected through our consultation and medical booking channels.
            </p>
            <h2 className="font-serif text-2xl text-brand-text font-light pt-4">Data Collection and Use</h2>
            <p>
              We collect contact information (such as name, phone number, and email) to schedule appointments and provide medical coordinators 
              with the necessary details to guide your clinical treatment. All clinical records, before/after photography, and surgical notes 
              remain protected under strict medical privacy standards.
            </p>
            <p>
              We do not sell, trade, or transfer your personal credentials to external marketing companies. Data is shared exclusively 
              with certified surgeons and coordinate care coordinators assisting in your cosmetic procedure journey.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
