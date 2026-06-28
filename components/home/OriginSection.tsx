"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function OriginSection() {
  const safetyStandards = [
    {
      title: "Patient Privacy First",
      desc: "Strict clinical confidentiality protocols. Zero sharing of treatment records or patient photographs without explicit, formal consent."
    },
    {
      title: "Medical Ethics & Standards",
      desc: "Uncompromising patient safety guides our decisions. We recommend surgical interventions only when they align with realistic and safe aesthetic goals."
    },
    {
      title: "Advanced Safety Theatre",
      desc: "Ultra-clean operative environments utilizing certified FDA-approved technology, modern monitoring systems, and premium anesthesia protocols."
    }
  ];

  const milestones = [
    { year: "2019", title: "Foundation", desc: "Dr. Ashwani Kumar establishes BLINIQ in Delhi NCR to offer bespoke, custom-tailored surgeries." },
    { year: "2021", title: "Technology Expansion", desc: "Integration of high-definition VASER 4D ultrasound tech, upgrading body contouring standards." },
    { year: "2024", title: "Clinical Leadership", desc: "Over 3,000 successful aesthetic procedures performed with outstanding patient care." }
  ];

  return (
    <section id="origin" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="The Origin of BLINIQ"
          subtitle="Clinical Philosophy"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 items-start">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase font-semibold block mb-2">
                Our Story & Vision
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-brand-text font-light leading-tight tracking-wide mb-6">
                Redefining Aesthetic
                <br />
                <span className="italic text-brand-accent">Excellence in Delhi NCR</span>
              </h3>
              <p className="text-brand-text-sec text-sm leading-relaxed font-sans mb-6">
                Established in 2019 by Chief Surgeon Dr. Ashwani Kumar, BLINIQ was conceptualized as a premium 
                sanctuary for cosmetic transformations. We reject assembly-line clinical treatments, preferring a 
                bespoke approach where each procedure is customized to the patient&apos;s unique anatomical structure.
              </p>
              <p className="text-brand-text-sec text-sm leading-relaxed font-sans">
                Our mission is to help patients reclaim self-confidence by combining advanced clinical technologies 
                with artistic surgical precision. We maintain an unwavering vision of cosmetic procedures where safety, 
                privacy, and natural proportions dictate all surgical blueprints.
              </p>
            </div>

            {/* Safety & Ethics */}
            <div className="space-y-6 pt-6 border-t border-brand-border/30">
              <h4 className="font-serif text-lg text-brand-text font-light tracking-wider">
                Clinical Commitments & Ethics
              </h4>
              <div className="space-y-4">
                {safetyStandards.map((item, i) => (
                  <div key={i} className="bg-[#0F1524]/40 border border-brand-border/30 p-4 rounded">
                    <h5 className="font-serif text-xs text-brand-accent uppercase tracking-widest font-semibold mb-1">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-brand-text-sec leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Achievement counters */}
          <div className="lg:col-span-6 space-y-10 lg:pl-8">
            <div>
              <span className="text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase font-semibold block mb-6">
                Milestones & Timeline
              </span>
              <div className="relative border-l border-brand-border/40 pl-6 space-y-8">
                {milestones.map((item, i) => (
                  <div key={i} className="relative animate-fade-in">
                    {/* Bullet marker */}
                    <div className="absolute -left-7.5 top-1.5 w-2 h-2 rounded-full bg-brand-accent border border-brand-bg shadow-lg" />
                    <span className="font-mono text-xs text-brand-accent font-bold block mb-1">
                      {item.year}
                    </span>
                    <h5 className="font-serif text-sm text-brand-text font-medium mb-1">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-brand-text-sec leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Counters Grid */}
            <div className="border-t border-brand-border/30 pt-8 grid grid-cols-2 gap-6">
              <div className="text-left bg-brand-card/30 p-5 border border-brand-border/30 rounded">
                <span className="font-mono text-3xl text-brand-accent font-light block mb-1">
                  18+
                </span>
                <span className="text-[9px] text-brand-text-sec uppercase tracking-[0.2em] block font-semibold leading-normal">
                  Years Surgical Experience
                </span>
              </div>
              <div className="text-left bg-brand-card/30 p-5 border border-brand-border/30 rounded">
                <span className="font-mono text-3xl text-brand-accent font-light block mb-1">
                  3000+
                </span>
                <span className="text-[9px] text-brand-text-sec uppercase tracking-[0.2em] block font-semibold leading-normal">
                  Transformations Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
