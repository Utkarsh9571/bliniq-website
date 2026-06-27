import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function DoctorPreview() {
  return (
    <section id="doctor" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Chief Surgeon Spotlight"
          subtitle="Clinical Leadership"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 items-center">
          {/* Left Column: Dr. Ashwani Kumar Portrait */}
          <div className="lg:col-span-5 relative aspect-3/4 w-full border border-brand-border bg-brand-card">
            <Image
              src="/uploads/2024/02/Dr-Ashwini.jpg"
              alt="Dr. Ashwani Kumar"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-brand-accent font-sans text-xs tracking-[0.2em] uppercase font-semibold">
                Founder & Chief Plastic Surgeon
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-brand-text mt-3 mb-6 font-light">
                Dr. Ashwani Kumar
              </h3>
              <p className="text-brand-text-sec text-sm leading-relaxed mb-6 font-sans">
                Dr. Ashwani Kumar is one of the leading plastic and cosmetic surgeons in Delhi NCR. 
                He established BLINIQ to provide world-class, safe, and custom-tailored cosmetic treatments. 
                Under his leadership, the clinic specializes in high-definition liposuction, gynecomastia reduction, 
                tummy tucks, and facial plastic surgery.
              </p>
            </div>

            <div className="border-t border-brand-border/40 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif text-sm text-brand-accent uppercase tracking-wider mb-2 font-medium">Qualifications</h4>
                <ul className="text-xs text-brand-text-sec space-y-1.5 list-disc pl-4 font-sans">
                  <li>M.S. General Surgery</li>
                  <li>M.Ch Plastic & Reconstructive Surgery</li>
                  <li>Specialist in Body Contouring & Liposuction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-sm text-brand-accent uppercase tracking-wider mb-2 font-medium">Core Expertise</h4>
                <ul className="text-xs text-brand-text-sec space-y-1.5 list-disc pl-4 font-sans">
                  <li>3000+ Successful Procedures</li>
                  <li>Gynecomastia Excision & VASER Lipo</li>
                  <li>Facial Aesthetic Enhancements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
