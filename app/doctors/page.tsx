import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Our Surgeon"
            subtitle="Clinical Excellence"
            align="center"
          />

          <div className="max-w-3xl mx-auto mt-16">
            <Card className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8">
              <div className="relative w-48 h-60 shrink-0 border border-brand-border overflow-hidden bg-brand-bg-sec">
                <Image
                  src="/uploads/2024/02/Dr-Ashwini.jpg"
                  alt="Dr. Ashwani Kumar"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex-1 text-left">
                <span className="text-brand-accent font-sans text-xs tracking-widest uppercase font-semibold">
                  Founder & Chief Surgeon
                </span>
                <h3 className="font-serif text-3xl text-brand-text mt-2 mb-4 font-light">
                  Dr. Ashwani Kumar
                </h3>
                <p className="text-brand-text-sec text-sm leading-relaxed mb-6 font-sans">
                  Dr. Ashwani Kumar is the chief plastic and cosmetic surgeon at BLINIQ. 
                  He is highly qualified with an MS in General Surgery and M.Ch in Plastic and Reconstructive Surgery. 
                  With over 3,000 successful surgical procedures completed, he is a leading expert in high-definition liposuction, 
                  gynecomastia correction, tummy tucks, and facial aesthetics in Delhi NCR.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-brand-text-sec uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span>
                    <span>MS General Surgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span>
                    <span>M.Ch Plastic Surgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span>
                    <span>Body Contouring Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span>
                    <span>3000+ Success Stories</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
