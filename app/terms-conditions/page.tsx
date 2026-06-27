import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mb-8">
            Terms & Conditions
          </h1>
          <div className="prose prose-invert text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6 font-sans">
            <p>
              Welcome to BLINIQ. By accessing this website and booking a clinical consultation, you agree to comply with 
              and be bound by the following terms of use.
            </p>
            <h2 className="font-serif text-2xl text-brand-text font-light pt-4">Clinical Consultations</h2>
            <p>
              BLINIQ provides scheduling services and connects patients with verified M.Ch and MS cosmetic surgeons in Delhi NCR. 
              All medical diagnostic decisions, surgical risks, and post-operative recovery courses are discussed during direct clinical consultations.
            </p>
            <p>
              Any information provided on this website serves educational purposes only and does not replace professional surgical diagnoses.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
