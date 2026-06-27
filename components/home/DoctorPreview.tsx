import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { getCsvData } from "@/lib/csvParser";

export default function DoctorPreview() {
  const doctors = getCsvData("data-doctors.csv");

  return (
    <section id="doctors" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Doctor Spotlight"
          subtitle="Clinical Leadership"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 items-center">
          {/* Left Column: Large Chief Surgeon Portrait */}
          <div className="lg:col-span-5 relative aspect-3/4 w-full border border-brand-border bg-brand-card">
            <Image
              src="/uploads/2020/08/Doctor_01.jpg"
              alt="Chief Surgeon"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Right Column: Profile and Doctors List */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="max-w-xl">
              <span className="text-brand-accent font-sans text-xs tracking-[0.2em] uppercase font-semibold">
                Founder & Chief Plastic Surgeon
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-brand-text mt-3 mb-6 font-light">
                Dr. Ashwani Kumar
              </h3>
              <p className="text-brand-text-sec text-sm leading-relaxed mb-6 font-sans">
                Dr. Ashwani Kumar established BLINIQ as Delhi NCR&apos;s premier cosmetic surgery
                centre. With a dream to make safe, state-of-the-art reconstructive care accessible,
                he leads our team of highly experienced practitioners.
              </p>
            </div>

            {/* Doctors List from data-doctors.csv */}
            <div className="border-t border-brand-border/60 pt-8">
              <h4 className="font-serif text-lg text-brand-accent mb-4 tracking-wide font-medium">
                Clinical Specialists & Practitioners
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doctors.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-2 border-b border-brand-border/30 text-xs text-brand-text-sec uppercase tracking-widest font-mono"
                  >
                    <span className="text-brand-accent">•</span>
                    <span>{doc.post_title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
