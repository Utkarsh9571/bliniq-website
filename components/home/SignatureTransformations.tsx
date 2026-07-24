"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";

interface SlideItem {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  link: string;
}

const SLIDES: SlideItem[] = [
  {
    title: "VASER Liposuction",
    description: "High-definition body sculpting to define abs, obliques, and contours using advanced ultrasonic technology.",
    highlights: [
      "Precision 4D muscle boundary framing",
      "Ultrasonic fat emulsification sparing blood vessels",
      "Stimulates natural skin tightening post-op"
    ],
    image: "/lipo_after_1782474148532.png",
    link: "/liposuction-surgery-in-delhi"
  },
  {
    title: "Gynecomastia Surgery",
    description: "Permanent correction of abnormally enlarged male chest tissue combining glandular excision and micro-liposuction.",
    highlights: [
      "Complete surgical excision of glandular tissue",
      "Virtually invisible incisions along the areola border",
      "Restores a flat, firm, and masculine chest contour"
    ],
    image: "/gynecomastia_after_1782474181819.png",
    link: "/gynecomastia-surgery-in-delhi"
  },
  {
    title: "Cosmetic Rhinoplasty",
    description: "Artistic nasal restructuring to optimize profile symmetry, tip definition, and functional nasal airways.",
    highlights: [
      "Tailored profile mapping for facial harmony",
      "Refines structural bridge contours and tip angles",
      "Minimally invasive closed and open approaches"
    ],
    image: "/rhinoplasty_after.png",
    link: "/nose-cosmetic-rhinoplasty"
  },
  {
    title: "FUE Hair Transplant",
    description: "Follicular unit extraction to restore dense hair growth, rebuild natural hairlines, and treat thinning hair.",
    highlights: [
      "Individual unit graft extraction and insertion",
      "Natural growth angle mapping for realistic results",
      "Rapid donor healing and high graft viability"
    ],
    image: "/hair_after.png",
    link: "/what-is-hair-transplant"
  }
];

export default function SignatureTransformations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Next slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  // Prev slide
  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diffX = touchStartX.current - currentX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <section 
      id="signature-transformations" 
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      className="py-12 md:py-16 bg-brand-bg border-b border-brand-border/40 overflow-hidden focus:outline-none"
      aria-label="Signature Transformations Procedure Showcase"
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-brand-accent text-[10px] font-semibold tracking-[0.25em] uppercase block mb-2 font-sans">
            Our Signature Transformations
          </span>
          <p className="font-serif text-xl md:text-2xl text-brand-text font-light leading-snug max-w-2xl mx-auto">
            Discover the procedures that have helped thousands of patients achieve natural, confidence-boosting results under the care of Dr. Ashwani Kumar.
          </p>
        </div>

        {/* Carousel composition container */}
        <div className="relative w-full min-h-100 lg:h-115 flex flex-col lg:block">
          
          {/* 1. Featured Image Gallery (Desktop Right 70%, Mobile Bottom) */}
          <div className="order-2 lg:order-0 relative w-full h-64 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[70%] lg:h-full overflow-hidden bg-[#0a0a0c] border border-brand-border/40">
            {SLIDES.map((slide, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1200 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.title} showcase`}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    priority={index === 0}
                    className={`object-cover transition-transform duration-1200 ease-out ${
                      isActive ? "scale-100" : "scale-[1.03]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/10 to-transparent lg:bg-linear-to-r lg:from-brand-bg lg:via-brand-bg/40 lg:to-transparent z-1 pointer-events-none" />
                </div>
              );
            })}

            {/* Pagination Indicators - Placed bottom-left of the image on desktop */}
            <div 
              className="absolute bottom-4 left-4 z-20 flex gap-2 lg:bottom-6 lg:left-6" 
              role="tablist" 
              aria-label="Showcase slide controls"
            >
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Go to showcase slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className="focus:outline-none cursor-pointer py-2 flex items-center"
                >
                  <div className={`h-0.75 rounded-full transition-all duration-500 ease-in-out ${
                    activeIndex === index 
                      ? "w-8 bg-brand-accent" 
                      : "w-4 bg-brand-text-sec/30 hover:bg-brand-text-sec/60"
                  }`} />
                </button>
              ))}
            </div>

            {/* Circular navigation buttons - Bottom-right of image on desktop */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-2 lg:bottom-6 lg:right-6">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full border border-brand-border/60 bg-brand-bg/60 backdrop-blur-sm text-brand-text hover:border-brand-accent hover:text-brand-accent transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full border border-brand-border/60 bg-brand-bg/60 backdrop-blur-sm text-brand-text hover:border-brand-accent hover:text-brand-accent transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* 2. Floating Overlapping Glass Card (Desktop Left 44%, Mobile Top) */}
          <div className="order-1 lg:order-0 lg:absolute lg:left-[5%] lg:top-[5%] lg:bottom-[5%] lg:w-[44%] z-20 bg-brand-card/85 backdrop-blur-md border border-brand-border/40 p-6 lg:p-8 flex flex-col justify-center shadow-2xl relative select-none">
            {SLIDES.map((slide, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isActive 
                      ? "opacity-100 transform translate-y-0 relative pointer-events-auto" 
                      : "opacity-0 transform translate-y-4 absolute inset-x-6 lg:inset-x-8 pointer-events-none"
                  }`}
                >
                  <span className="text-[9px] text-brand-accent font-mono uppercase tracking-[0.2em] block mb-1">
                    Signature Procedure
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl text-brand-text font-light mb-3 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-brand-text-sec text-[11px] leading-relaxed mb-4 font-sans">
                    {slide.description}
                  </p>
                  
                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-5 font-sans">
                    {slide.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-[10px] lg:text-[11px] text-brand-text-sec/90 leading-normal">
                        <span className="w-1 h-1 rounded-full bg-brand-accent/70 mt-1.5 mr-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1">
                    <CTAButton href={slide.link}>Explore Procedure</CTAButton>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
