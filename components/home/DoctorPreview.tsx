"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { homepageImages } from "@/content/homepage-images";

export default function DoctorPreview() {
  const stats = [
    { label: "High-Def VASER Lipo", value: "1200+" },
    { label: "Gynecomastia Reductions", value: "800+" },
    { label: "Rhinoplasty Reshaping", value: "500+" },
    { label: "Tummy Tuck Restorations", value: "400+" }
  ];

  const expertises = [
    "High-Definition 4D VASER Liposuction & Abdominal Carving",
    "Glandular Excision Gynecomastia Chest Corrections",
    "Aesthetic Nose Reshaping (Structural Rhinoplasty)",
    "Reconstructive Core Restorations (Abdominoplasty)"
  ];

  return (
    <section id="doctor" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Chief Surgeon Spotlight"
          subtitle="Clinical Leadership"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 items-start">
          {/* Left Column: Dr. Ashwani Kumar Portrait */}
          <div className="lg:col-span-5 relative aspect-3/4 w-full border border-brand-border bg-brand-card shadow-2xl p-2">
            <div className="relative w-full h-full border border-brand-accent/20">
              <Image
                src="/uploads/2024/02/Dr-Ashwini.jpg"
                alt="Dr. Ashwani Kumar - Founder and Chief Surgeon of BLINIQ"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top transition-all duration-1000"
                priority
              />
            </div>
          </div>

          {/* Right Column: Bio, Qualifications & Statistics */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase font-semibold">
                Founder & Chief Plastic Surgeon
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-brand-text mt-3 mb-6 font-light tracking-wide">
                Dr. Ashwani Kumar
              </h3>
              
              <div className="space-y-4 text-brand-text-sec text-sm leading-relaxed font-sans">
                <p>
                  Dr. Ashwani Kumar is one of the most prominent plastic, reconstructive, and cosmetic surgeons in Delhi NCR. 
                  He established BLINIQ as a state-of-the-art center dedicated to advanced body contouring, facial 
                  aesthetics, and gender reaffirmation surgeries.
                </p>
                <p>
                  With over 18 years of surgical experience, his clinical philosophy centers on the marriage of surgical 
                  artistry with anatomical balance. He believes that cosmetic enhancement should optimize, refine, and 
                  harmonize the body&apos;s natural proportions rather than create artificial distortions.
                </p>
                <blockquote className="border-l-2 border-brand-accent pl-4 italic text-brand-text-sec text-sm my-6 font-serif leading-relaxed">
                  "Aesthetics is not about changing who you are; it is about refining and restoring your natural contours with clinical precision."
                  <cite className="block text-[10px] uppercase tracking-widest text-brand-accent mt-2 font-mono not-italic">— Dr. Ashwani Kumar</cite>
                </blockquote>
              </div>
            </div>

            {/* Qualifications & Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-brand-border/30 pt-8">
              <div>
                <h4 className="font-serif text-xs text-brand-accent uppercase tracking-widest mb-3 font-semibold">
                  Board Qualifications
                </h4>
                <ul className="text-xs text-brand-text-sec space-y-2 list-disc pl-4 font-sans leading-relaxed">
                  <li>M.Ch in Plastic & Reconstructive Surgery</li>
                  <li>M.S. in General Surgery (Gold Medalist)</li>
                  <li>Specialized Body Sculpting Fellowship Training</li>
                  <li>Registered Member of Premier Surgical Associations</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-xs text-brand-accent uppercase tracking-widest mb-3 font-semibold">
                  Expertise Areas
                </h4>
                <ul className="text-xs text-brand-text-sec space-y-2 font-sans leading-relaxed">
                  {expertises.map((exp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-accent mt-0.5">&bull;</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Surgical Procedure Statistics */}
            <div className="border-t border-brand-border/30 pt-8">
              <h4 className="font-serif text-xs text-brand-accent uppercase tracking-widest mb-4 font-semibold">
                Surgical Procedure Statistics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((item, i) => (
                  <div key={i} className="bg-[#0F1524]/30 border border-brand-border/30 p-4 rounded text-center">
                    <span className="font-mono text-xl text-brand-accent font-bold block mb-1">
                      {item.value}
                    </span>
                    <span className="text-[9px] text-brand-text-sec uppercase tracking-wider block leading-normal">
                      {item.label}
                    </span>
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
