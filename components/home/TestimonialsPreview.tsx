"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

interface Testimonial {
  id: number;
  initials: string;
  name: string;
  procedure: string;
  location: string;
  rating: number;
  text: string;
  year: string;
}

const TESTIMONIALS_ROW1: Testimonial[] = [
  {
    id: 1,
    initials: "A.K.",
    name: "Amit Khanna",
    procedure: "FUE Hair Restoration",
    location: "New Delhi",
    rating: 5,
    text: "From start to finish with my HT procedure, the process was incredible. From meeting Dr. Ashwani and providing his expertise on how many grafts would work best, they work until they are 100% happy with coverage, not counting each graft. 1 year later my hair is like I was 18 again.",
    year: "2024"
  },
  {
    id: 2,
    initials: "M.S.",
    name: "Meera Sen",
    procedure: "Breast Symmetry correction",
    location: "Gurugram",
    rating: 5,
    text: "Dr. Ashwani is a very skilled plastic surgeon. I had a unique breast concern needing implants for lack of volume and a lift. He is masterful with breast symmetry and they are now perfect. The staff treated me like gold. Everything was daycare in office like taking a nice nap.",
    year: "2023"
  },
  {
    id: 3,
    initials: "V.S.",
    name: "Vikram Singh",
    procedure: "VASER 4D Liposuction",
    location: "New Delhi",
    rating: 5,
    text: "High definition liposuction results are unbelievable. The abdominal contouring is precise, and the post-op care guides you through every step. Dr. Ashwani Kumar is hands down the finest cosmetic surgeon in Delhi NCR.",
    year: "2024"
  },
  {
    id: 4,
    initials: "J.B.",
    name: "Jasmine Bhasin",
    procedure: "Rhinoplasty Surgery",
    location: "Noida",
    rating: 5,
    text: "Very satisfied with my structural rhinoplasty. The balance is completely natural, and my breathing has also improved. The clinic maintains absolute privacy which made me feel comfortable from day one.",
    year: "2023"
  }
];

const TESTIMONIALS_ROW2: Testimonial[] = [
  {
    id: 5,
    initials: "R.M.",
    name: "Rohan Malhotra",
    procedure: "Gynecomastia Correction",
    location: "Delhi NCR",
    rating: 5,
    text: "Painless daycare gynecomastia surgery. The areola incisions are practically invisible. Wore the support vest for 4 weeks as directed, and the chest profile is perfectly flat now. Exceptional professionalism by the clinical team.",
    year: "2024"
  },
  {
    id: 6,
    initials: "P.D.",
    name: "Priya Dutt",
    procedure: "Abdominoplasty Restoration",
    location: "Faridabad",
    rating: 5,
    text: "Recovering from a tummy tuck takes patience, but the muscle wall repair and skin tightening results are life-changing. Dr. Ashwani explained the horizontal scar placement perfectly, and it is fully hidden.",
    year: "2023"
  },
  {
    id: 7,
    initials: "K.A.",
    name: "Karan Adani",
    procedure: "Laser Medspa Care",
    location: "New Delhi",
    rating: 5,
    text: "Excellent aesthetic clinic environment. The staff is highly trained, utilizing advanced FDA approved tech. Standard of care is international. Recommended for anyone looking for authentic cosmetic enhancement.",
    year: "2024"
  },
  {
    id: 8,
    initials: "S.S.",
    name: "Sonia Sharma",
    procedure: "Facial Sculpting",
    location: "New Delhi",
    rating: 5,
    text: "The facial symmetry enhancements are subtle and graceful. They didn't push for overfilled cheeks or unnatural lips. Highly ethical medical recommendations and outstanding clinical safety standards.",
    year: "2024"
  }
];

export default function TestimonialsPreview() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.025)_0%,transparent_85%)] pointer-events-none" />

      {/* Inject custom CSS for infinite marquee scrolling and pause state */}
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
          animation: marqueeLeft 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 45s linear infinite;
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

      {/* Marquee Wrapper */}
      <div 
        className="mt-16 flex flex-col gap-6 w-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1: Leftward Scrolling */}
        <div className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex">
          <div className={`marquee-container animate-marquee-left ${isPaused ? "paused" : ""}`}>
            {/* First Set */}
            {TESTIMONIALS_ROW1.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
            {/* Duplicated Set for Seamless Loop */}
            {TESTIMONIALS_ROW1.map((item) => (
              <TestimonialCard key={`dup1-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling */}
        <div className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex">
          <div className={`marquee-container animate-marquee-right ${isPaused ? "paused" : ""}`}>
            {/* First Set */}
            {TESTIMONIALS_ROW2.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
            {/* Duplicated Set for Seamless Loop */}
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
  return (
    <div className="w-95 shrink-0 bg-[#0F1524]/65 border border-brand-border/40 p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-brand-accent/50 hover:bg-[#12192A]/85 hover:-translate-y-1 transition-all duration-300 select-none">
      <div className="space-y-4">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(item.rating)].map((_, i) => (
            <span key={i} className="text-brand-accent text-sm">★</span>
          ))}
        </div>

        {/* Text */}
        <p className="text-brand-text-sec text-xs leading-relaxed font-sans italic">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="border-t border-brand-border/30 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar / Initials */}
          <div className="w-8 h-8 rounded-full bg-brand-accent/5 border border-brand-accent/30 flex items-center justify-center text-[10px] font-mono font-bold text-brand-accent">
            {item.initials}
          </div>
          <div>
            <span className="text-[11px] text-brand-text font-serif block font-medium">
              {item.name}
            </span>
            <span className="text-[9px] text-brand-text-sec/60 block mt-0.5">
              {item.procedure} &bull; {item.location}
            </span>
          </div>
        </div>

        {/* Treatment Year */}
        <span className="text-[9px] text-brand-accent/60 font-mono">
          {item.year}
        </span>
      </div>
    </div>
  );
}
