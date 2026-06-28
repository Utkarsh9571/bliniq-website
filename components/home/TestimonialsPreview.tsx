"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { TESTIMONIALS_ROW1, TESTIMONIALS_ROW2, Testimonial } from "@/content/testimonials";

export default function TestimonialsPreview() {
  const [isPaused, setIsPaused] = useState(false);

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

      {/* Marquee Track Wrapper with mobile touch events */}
      <div 
        className="mt-16 flex flex-col gap-6 w-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Row 1: Leftward Scrolling */}
        <div className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex">
          <div className={`marquee-container animate-marquee-left ${isPaused ? "paused" : ""}`}>
            {TESTIMONIALS_ROW1.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
            {TESTIMONIALS_ROW1.map((item) => (
              <TestimonialCard key={`dup1-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling */}
        <div className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex">
          <div className={`marquee-container animate-marquee-right ${isPaused ? "paused" : ""}`}>
            {TESTIMONIALS_ROW2.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
            {TESTIMONIALS_ROW2.map((item) => (
              <TestimonialCard key={`dup2-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-72 sm:w-80 lg:w-95 shrink-0 bg-[#0F1524]/65 border border-brand-border/40 p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-brand-accent/50 hover:bg-[#12192A]/85 hover:-translate-y-1 transition-all duration-300 select-none">
      <div className="space-y-4">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(item.rating)].map((_, i) => (
            <span key={i} className="text-brand-accent text-sm">★</span>
          ))}
        </div>

        {/* Clamped review text */}
        <p className={`text-brand-text-sec text-xs leading-relaxed font-sans italic ${expanded ? "" : "line-clamp-5"}`}>
          &ldquo;{item.text}&rdquo;
        </p>

        {item.text.length > 180 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="text-[10px] uppercase tracking-widest text-brand-accent font-mono font-bold mt-1 inline-flex items-center cursor-pointer focus:outline-none min-h-11"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
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
