import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mb-8">
            Accessibility Statement
          </h1>
          <div className="prose prose-invert text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6 font-sans">
            <p>
              At BLINIQ, we strive to make our clinic site and patient coordinates fully accessible to all individuals. 
              We continuously optimize our layout flow, contrast values, and image tags to support screen readers and keyboard navigation.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
