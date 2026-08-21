"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PatientCaseModal from "@/components/gallery/PatientCaseModal";
import { GALLERY_CASES, GalleryCase } from "@/content/gallery";

// Collect all unique categories dynamically from cases
const CATEGORIES = ["All", ...Array.from(new Set(GALLERY_CASES.map(c => c.category)))].sort();

export default function PictureGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Lightbox/Modal State
  const [activeCase, setActiveCase] = useState<GalleryCase | null>(null);

  const filteredCases = selectedCategory === "All"
    ? GALLERY_CASES
    : GALLERY_CASES.filter(c => c.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text font-sans">
        <Container>
          <ScrollReveal variant="fade-up">
            <SectionTitle
              title="Clinical Pictures Gallery"
              subtitle="Procedure Transformations"
              align="center"
            />
            <p className="text-center text-brand-text-sec text-xs sm:text-sm max-w-2xl mx-auto mt-4 mb-10 font-sans">
              Archive of patient before & after records from the BLINIQ Delhi clinical database.
            </p>
          </ScrollReveal>

          {/* Category Filter Tabs */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  suppressHydrationWarning={true}
                  className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 border min-h-11 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-brand-accent border-brand-accent text-[#0B0F19] font-bold"
                      : "bg-[#0F1524]/60 border-brand-border/40 text-brand-text-sec hover:border-brand-accent/50 hover:text-brand-text"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry Layout: Responsive columns preserving original aspect ratios */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:balance] w-full">
            {filteredCases.map((c, i) => (
              <div key={i} className="break-inside-avoid mb-8">
                <ScrollReveal
                  variant="fade-up"
                  delay={Math.min(i * 30, 200)}
                >
                  <div 
                    onClick={() => setActiveCase(c)}
                    className="cursor-pointer"
                  >
                    <Card className="flex flex-col p-4 bg-brand-bg-sec hover:border-brand-accent/50 transition-all duration-350 group">
                      <div className="relative w-full border border-brand-border bg-brand-card overflow-hidden mb-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.coverImage}
                          alt={c.title}
                          loading="lazy"
                          className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-101"
                        />
                        
                        {/* Visual Case Indicator Badge */}
                        {c.images.length > 1 && (
                          <span className="absolute top-2 right-2 bg-brand-bg/95 border border-brand-border px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase text-brand-accent z-10">
                            {c.images.length} Photos
                          </span>
                        )}
                      </div>
                      <div className="px-1 text-left">
                        <span 
                          suppressHydrationWarning={true}
                          className="text-[10px] tracking-widest text-brand-accent uppercase block font-semibold mb-1"
                        >
                          {c.category}
                        </span>
                        <h4 className="font-serif text-base text-brand-text font-medium flex items-center justify-between">
                          <span suppressHydrationWarning={true}>{c.title}</span>
                          {c.images.length > 1 && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          )}
                        </h4>
                      </div>
                    </Card>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />

      {/* Shared Reusable Modal */}
      <PatientCaseModal
        isOpen={activeCase !== null}
        activeCase={activeCase}
        onClose={() => setActiveCase(null)}
      />
    </>
  );
}
