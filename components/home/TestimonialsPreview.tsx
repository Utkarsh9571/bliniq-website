"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { TESTIMONIALS_ROW1, TESTIMONIALS_ROW2, Testimonial } from "@/content/testimonials";

export default function TestimonialsPreview() {
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);
  
  // State for active modal testimonial
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const openModal = (item: Testimonial, rowNum: number) => {
    setActiveTestimonial(item);
    setActiveRow(rowNum);
    if (rowNum === 1) {
      setRow1Paused(true);
    } else if (rowNum === 2) {
      setRow2Paused(true);
    }
  };

  const closeModal = () => {
    if (activeRow === 1) {
      setRow1Paused(false);
    } else if (activeRow === 2) {
      setRow2Paused(false);
    }
    setActiveTestimonial(null);
    setActiveRow(null);
  };

  return (
    <section id="testimonials" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.025)_0%,transparent_85%)] pointer-events-none" />

      {/* Inject marquee styles, with mobile slow-scrolling definitions */}
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          gap: 1.5rem;
        }
        .animate-marquee-left {
          animation: marqueeLeft 55s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 55s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee-left {
            animation-duration: 75s;
          }
          .animate-marquee-right {
            animation-duration: 75s;
          }
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <Container className="relative z-10">
        <SectionTitle
          title="Patient Experiences"
          subtitle="Verified Testimonials"
          align="center"
        />
      </Container>

      {/* Marquee Track Wrapper */}
      <div className="mt-16 flex flex-col gap-6 w-full relative">
        
        {/* Row 1: Leftward Scrolling */}
        <div 
          className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex"
          onMouseEnter={() => setRow1Paused(true)}
          onMouseLeave={() => { if (!activeTestimonial || activeRow !== 1) setRow1Paused(false); }}
          onTouchStart={() => setRow1Paused(true)}
          onTouchEnd={() => { if (!activeTestimonial || activeRow !== 1) setRow1Paused(false); }}
        >
          <div className={`marquee-container animate-marquee-left ${row1Paused ? "paused" : ""}`}>
            {TESTIMONIALS_ROW1.map((item) => (
              <div key={item.id} onClick={() => openModal(item, 1)}>
                <TestimonialCard item={item} />
              </div>
            ))}
            {TESTIMONIALS_ROW1.map((item) => (
              <div key={`dup1-${item.id}`} onClick={() => openModal(item, 1)}>
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling */}
        <div 
          className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex"
          onMouseEnter={() => setRow2Paused(true)}
          onMouseLeave={() => { if (!activeTestimonial || activeRow !== 2) setRow2Paused(false); }}
          onTouchStart={() => setRow2Paused(true)}
          onTouchEnd={() => { if (!activeTestimonial || activeRow !== 2) setRow2Paused(false); }}
        >
          <div className={`marquee-container animate-marquee-right ${row2Paused ? "paused" : ""}`}>
            {TESTIMONIALS_ROW2.map((item) => (
              <div key={item.id} onClick={() => openModal(item, 2)}>
                <TestimonialCard item={item} />
              </div>
            ))}
            {TESTIMONIALS_ROW2.map((item) => (
              <div key={`dup2-${item.id}`} onClick={() => openModal(item, 2)}>
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Lightbox Modal */}
      {activeTestimonial && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-md p-4 animate-fade-in">
          <div className="absolute inset-0 cursor-default" onClick={closeModal} />
          
          <div className="relative max-w-xl w-full bg-[#0F1524] border border-brand-border/60 p-8 shadow-2xl z-10 rounded text-left">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-brand-text-sec/60 hover:text-brand-accent p-2 transition-colors cursor-pointer min-h-11 flex items-center justify-center"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-6">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-accent text-lg">★</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-brand-text text-sm sm:text-base leading-relaxed font-sans italic">
                &ldquo;{activeTestimonial.text}&rdquo;
              </p>

              {/* Author details */}
              <div className="flex items-center justify-between border-t border-brand-border/30 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/15 border border-brand-accent/40 flex items-center justify-center font-serif text-sm text-brand-accent font-medium">
                    {activeTestimonial.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-brand-text font-medium">{activeTestimonial.name}</span>
                    <span className="text-[10px] text-brand-text-sec/60 font-semibold">{activeTestimonial.procedure}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-brand-text-sec font-mono block">{activeTestimonial.location}</span>
                  <span className="text-[10px] text-brand-accent/60 font-mono block mt-0.5">{activeTestimonial.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-72 sm:w-80 lg:w-95 shrink-0 bg-[#0F1524]/65 border border-brand-border/40 p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-brand-accent/50 hover:bg-[#12192A]/85 hover:-translate-y-1 transition-all duration-300 select-none cursor-pointer">
      <div className="space-y-4">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(item.rating)].map((_, i) => (
            <span key={i} className="text-brand-accent text-sm">★</span>
          ))}
        </div>

        {/* Review text */}
        <p className="text-brand-text-sec text-xs leading-relaxed font-sans italic line-clamp-5">
          &ldquo;{item.text}&rdquo;
        </p>

        {item.text.length > 180 && (
          <span className="text-[10px] uppercase tracking-widest text-brand-accent font-mono font-bold mt-1 inline-flex items-center">
            Read Full Review
          </span>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-brand-border/30 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-accent/15 border border-brand-accent/40 flex items-center justify-center font-serif text-xs text-brand-accent font-medium">
            {item.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-brand-text font-medium">{item.name}</span>
            <span className="text-[9px] text-brand-text-sec/60">{item.procedure}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[9px] text-brand-text-sec font-mono block">{item.location}</span>
          <span className="text-[9px] text-brand-accent/60 font-mono block mt-0.5">{item.year}</span>
        </div>
      </div>
    </div>
  );
}
