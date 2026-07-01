"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { homepageImages } from "@/content/homepage-images";

export default function ConsultationSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0F19] text-brand-text border-b border-brand-border/40 font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Consultation Image */}
          <div className="lg:col-span-6 relative aspect-16/9 md:aspect-3/2 w-full border border-brand-border bg-brand-card shadow-2xl p-2 group">
            <div className="relative w-full h-full border border-brand-accent/20 overflow-hidden">
              <Image
                src={homepageImages.consultation.room01}
                alt="Personalized Medical Consultation at BLINIQ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.25em] font-mono">
              Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-text leading-tight tracking-wide">
              Your Transformation Begins With Trust
            </h2>
            <div className="text-brand-text-sec text-sm leading-relaxed space-y-4 font-sans">
              <p>
                Every cosmetic surgery procedure begins with an extensive, personal conversation. Dr. Ashwani Kumar conducts detailed consultations to understand your aesthetic aspirations, evaluate your anatomical baseline, and map out a surgical plan.
              </p>
              <p>
                We prioritize a patient-first philosophy, utilizing state-of-the-art diagnostic visualization tools to show expected post-op proportions and coordinate recovery guidelines, ensuring complete clarity at every milestone.
              </p>
            </div>
            
            <a href="#contact-form" className="mt-2">
              <Button variant="primary" className="px-8 py-3.5 text-xs uppercase tracking-widest font-semibold min-h-11">
                Book Consultation
              </Button>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}
