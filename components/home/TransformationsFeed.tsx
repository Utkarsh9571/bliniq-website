"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { homepageImages } from "@/content/homepage-images";

export default function TransformationsFeed() {
  return (
    <section id="transformations" className="py-24 sm:py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40 font-sans">
      <Container>
        <SectionTitle
          title="Real Patient Transformations"
          subtitle="Clinical Case Profiles"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 items-center">
          
          {/* Left Column: Tummy Tuck Infographic (Desktop Wide / Mobile Vertical) */}
          <div className="lg:col-span-7 relative aspect-[1.25] w-full border border-brand-border bg-brand-card shadow-2xl p-2 group">
            <div className="relative w-full h-full border border-brand-accent/20 overflow-hidden">
              <Image
                src={homepageImages.transformations.infographic}
                alt="Tummy Tuck Transformation Case Infographic"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain transition-all duration-1000 scale-100 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Case Profile & Milestones */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#0F1524]/60 border border-brand-border/40 p-6 rounded">
              <span className="text-brand-accent text-[10px] tracking-[0.25em] font-mono uppercase font-semibold">
                Featured Case study
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-text mt-2 mb-4 font-light">
                Abdominoplasty Restoration
              </h3>
              <p className="text-brand-text-sec text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Real patient profile after significant core change. The procedure successfully excised redundant apron skin folds and re-approximated the diastasis recti core muscles to build a flat, firm abdominal wall.
              </p>

              {/* Milestones / Highlight Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-brand-bg/50 p-4 border-l-2 border-brand-accent">
                  <div>
                    <h4 className="text-xs font-serif text-brand-text font-bold uppercase tracking-wider">
                      Recovery Milestones
                    </h4>
                    <p className="text-[10px] text-brand-text-sec mt-1 leading-relaxed">
                      Day 1: Daycare discharge. Week 2: Light office return. Week 6: Gym and strenuous activities resume.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-bg/50 p-4 border-l-2 border-brand-border/60">
                  <div>
                    <h4 className="text-xs font-serif text-brand-text font-bold uppercase tracking-wider">
                      Lifestyle Benefits
                    </h4>
                    <p className="text-[10px] text-brand-text-sec mt-1 leading-relaxed">
                      Improved posture comfort, enhanced clothing options, and elevated baseline self-esteem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
