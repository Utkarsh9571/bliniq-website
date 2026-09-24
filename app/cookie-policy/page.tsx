import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Cookie Policy | BLINIQ Clinic Delhi",
  description: "Read about cookie usage and analytical preferences at BLINIQ Cosmetic Surgery Centre in Delhi.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mb-8">
            Cookie Policy
          </h1>
          <div className="prose prose-invert text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6 font-sans">
            <p>
              BLINIQ uses cookies to optimize your browsing experience. Cookies are small data files stored on your device 
              which help us understand visitor paths, session times, and general interactions with our cosmetic procedure galleries.
            </p>
            <p>
              We do not track external browsing history or collect private identification details through standard cookie utilization.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
