"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { homepageImages } from "@/content/homepage-images";

export default function BodyContouringSection() {
  return (
    <section className="py-24 sm:py-32 bg-brand-bg text-brand-text border-b border-brand-border/40 font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy (Alternating Visual Rhythm) */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:order-1 order-2">
            <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.25em] font-mono">
              Body Aesthetics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-text leading-tight tracking-wide">
              Body Contouring & Sculpting
            </h2>
            <div className="text-brand-text-sec text-sm leading-relaxed space-y-4 font-sans">
              <p>
                Achieve refined, natural body curves through state-of-the-art body shaping procedures. We perform VASER 4D Liposuction, Tummy Tucks, and complete Mommy Makeovers to remove resistant fat and reconstruct abdominal core muscles.
              </p>
              <p>
                Our high-definition sculpting techniques are tailored to highlight natural muscular contours, tighten loose skin tissues, and deliver proportionate body shapes.
              </p>
            </div>
            
            <a href="#services" className="mt-2">
              <Button variant="primary" className="px-8 py-3.5 text-xs uppercase tracking-widest font-semibold min-h-11">
                Explore Body Treatments
              </Button>
            </a>
          </div>

          {/* Right Column: Large Lifestyle/Body Image */}
          <div className="lg:col-span-6 relative aspect-16/9 md:aspect-3/2 w-full border border-brand-border bg-brand-card shadow-2xl p-2 lg:order-2 order-1 group">
            <div className="relative w-full h-full border border-brand-accent/20 overflow-hidden">
              {/* Desktop view */}
              <div className="hidden sm:block absolute inset-0">
                <Image
                  src={homepageImages.bodyContouring.editorial}
                  alt="High Definition Body Contouring & Sculpting at BLINIQ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                />
              </div>
              {/* Mobile view */}
              <div className="block sm:hidden absolute inset-0">
                <Image
                  src={homepageImages.bodyContouring.mobile}
                  alt="High Definition Body Contouring & Sculpting at BLINIQ"
                  fill
                  sizes="100vw"
                  className="object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
