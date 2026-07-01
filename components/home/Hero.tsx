"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { homepageImages } from "@/content/homepage-images";

interface SlideData {
  service: string;
  eyebrow: string;
  headingPart1: string;
  headingPart2Highlight: string;
  headingPart3: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const SLIDES: SlideData[] = [
  {
    service: "VASER 4D Liposuction",
    eyebrow: "PREMIUM BODY CONTOURING",
    headingPart1: "Define. Sculpt.",
    headingPart2Highlight: "Transform.",
    headingPart3: "",
    description: "Advanced Vaser 4D High-Definition Liposuction to target resistant pockets of fat, sculpt natural muscular outlines, and achieve precision body contouring.",
    beforeImage: "/lipo_before_1782474133850.png",
    afterImage: "/lipo_after_1782474148532.png"
  },
  {
    service: "Gynecomastia Surgery",
    eyebrow: "MALE CHEST CONTOURING",
    headingPart1: "Restore. Strength.",
    headingPart2Highlight: "Confidence.",
    headingPart3: "",
    description: "Natural-looking masculine chest correction with advanced glandular excision and lipo contouring. Minimally invasive daycare surgery tailored for athletic contouring.",
    beforeImage: "/gynecomastia_before_1782474167092.png",
    afterImage: "/gynecomastia_after_1782474181819.png"
  },
  {
    service: "Rhinoplasty",
    eyebrow: "FACIAL HARMONY",
    headingPart1: "Refine. Balance.",
    headingPart2Highlight: "Elevate.",
    headingPart3: "",
    description: "Subtle, elegant nasal reshaping and structural rhinoplasty tailored to your unique facial balance. Reconstructive excellence to elevate symmetry.",
    beforeImage: "/rhinoplasty_before.png",
    afterImage: "/rhinoplasty_after.png"
  },
  {
    service: "Hair Transplant",
    eyebrow: "ADVANCED HAIR RESTORATION",
    headingPart1: "Reclaim. Restore.",
    headingPart2Highlight: "Renew.",
    headingPart3: "",
    description: "High-density permanent hair restoration using micro-FUE graft techniques. Safe, clinical follicular insertion designed to rebuild natural hairlines.",
    beforeImage: "/hair_before.png",
    afterImage: "/hair_after.png"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Draggable slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play timer
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      setSliderPosition(50); // Reset handle position for next slide
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const slide = SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full min-h-screen bg-[#0B0F19] text-brand-text flex items-center justify-center overflow-hidden pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 px-4 md:px-8 lg:px-20 z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Luxury Editorial Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Desktop Background */}
        <div className="hidden sm:block absolute inset-0 opacity-20">
          <Image
            src={homepageImages.hero.desktop}
            alt="BLINIQ Luxury Facial Aesthetics BG"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Mobile Background */}
        <div className="block sm:hidden absolute inset-0 opacity-15">
          <Image
            src={homepageImages.hero.mobile}
            alt="BLINIQ Luxury Facial Aesthetics BG"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Cinematic animated gold light streaks background */}
        <div className="absolute inset-0 z-0 opacity-40 bg-linear-to-b from-[#0B0F19]/80 via-transparent to-[#0B0F19]">
          <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vh] rounded-full bg-radial-to-c from-[#C9A96E]/15 via-transparent to-transparent blur-3xl animate-pulse duration-8000" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-radial-to-c from-brand-accent/10 via-transparent to-transparent blur-3xl animate-pulse duration-6000" />
          {/* Subtle diagonal gold streak lines */}
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(201,169,110,0.03)_50%,transparent_55%)] bg-size-[200%_200%] animate-[goldStreak_20s_linear_infinite]" />
        </div>
      </div>

      {/* Grid aligned inside a standard Container */}
      <Container className="z-10 relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-6 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Side: Staggered Content Area */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left gap-4 md:gap-5 lg:gap-6 pr-0 lg:pr-8">
            
            {/* Text content wrapper */}
            <div className="flex flex-col gap-3 order-1 md:order-0 w-full">
              {/* Eyebrow Label */}
              <span 
                key={`eyebrow-${currentSlide}`}
                className="text-brand-accent font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase block font-semibold animate-[slideDown_0.6s_ease-out_forwards]"
              >
                {slide.eyebrow}
              </span>

              {/* Large Editorial Heading */}
              <h1 
                key={`heading-${currentSlide}`}
                className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-light text-brand-text leading-[1.1] tracking-wide animate-[fadeIn_0.8s_ease-out_forwards]"
              >
                {slide.headingPart1}{" "}
                <span className="italic text-brand-accent block sm:inline font-light">
                  {slide.headingPart2Highlight}
                </span>
              </h1>

              {/* Short Description */}
              <p 
                key={`desc-${currentSlide}`}
                className="text-brand-text-sec font-sans text-xs sm:text-sm leading-relaxed max-w-md animate-[slideUp_0.8s_ease-out_forwards]"
              >
                {slide.description}
              </p>
            </div>

            {/* Trust Indicators (2x2 grid on mobile, 3-column on desktop) */}
            <div className="order-2 md:order-0 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 border-t border-b border-brand-border/30 py-3 w-full text-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-brand-accent text-xs font-mono font-bold">3000+</span>
                <span className="text-[8px] sm:text-[9px] text-brand-text-sec uppercase tracking-wider mt-0.5">Procedures</span>
              </div>
              <div className="flex flex-col items-center justify-center border-l md:border-x border-brand-border/30">
                <span className="text-brand-accent text-xs font-mono font-bold">FDA</span>
                <span className="text-[8px] sm:text-[9px] text-brand-text-sec uppercase tracking-wider mt-0.5">Approved Tech</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r md:border-none md:border-r border-brand-border/30 md:border-transparent">
                <span className="text-brand-accent text-xs font-mono font-bold">EMI</span>
                <span className="text-[8px] sm:text-[9px] text-brand-text-sec uppercase tracking-wider mt-0.5">No-Cost Option</span>
              </div>
              <div className="flex flex-col items-center justify-center md:hidden">
                <span className="text-brand-accent text-xs font-mono font-bold">100%</span>
                <span className="text-[8px] text-brand-text-sec uppercase tracking-wider mt-0.5">Confidential</span>
              </div>
            </div>

            {/* Doctor Credentials Snippet */}
            <div className="order-3 md:order-0 w-full bg-brand-card/45 border border-brand-border/40 p-3 flex items-center justify-between gap-4 rounded font-sans">
              <div className="flex flex-col">
                <span className="text-xs font-serif text-brand-text font-medium">Dr. Ashwani Kumar</span>
                <span className="text-[8px] sm:text-[9px] text-brand-text-sec uppercase tracking-wider mt-0.5">Chief Surgeon</span>
              </div>
              <div className="h-6 w-px bg-brand-border/30" />
              <div className="text-right">
                <span className="text-[9px] sm:text-[10px] text-brand-accent font-mono block font-semibold">M.Ch Plastic Surgery</span>
                <span className="text-[8px] sm:text-[9px] text-brand-text-sec/60 block mt-0.5">18+ Yrs Experience</span>
              </div>
            </div>

            {/* Call-to-Actions */}
            <div className="order-4 md:order-0 flex flex-row gap-3 w-full sm:w-auto">
              <a href="#contact-form" className="grow sm:grow-0">
                <Button variant="primary" className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 text-[10px] sm:text-xs uppercase tracking-widest font-semibold min-h-11">
                  Book Consult
                </Button>
              </a>
              <a href="#services" className="grow sm:grow-0">
                <Button variant="outline" className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 text-[10px] sm:text-xs uppercase tracking-widest font-semibold min-h-11">
                  Procedures
                </Button>
              </a>
            </div>

            {/* Luxury Slide Indicators: 01 02 03 04 */}
            <div className="order-5 md:order-0 flex items-center gap-6 mt-4 md:mt-6 lg:mt-8">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setSliderPosition(50);
                  }}
                  className="flex flex-col items-center gap-1 group focus:outline-none cursor-pointer min-h-11 justify-center"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className={`font-mono text-xs transition-colors duration-300 ${
                    currentSlide === index ? "text-brand-accent font-semibold" : "text-brand-text-sec/40 group-hover:text-brand-text-sec"
                  }`}>
                    {index + 1}
                  </span>
                  <div className={`h-0.5 transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-brand-accent" : "w-4 bg-brand-border/30 group-hover:w-6"
                  }`} />
                </button>
              ))}
            </div>

          </div>

          {/* Right Side: Before/After Comparison Component */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full mt-4 lg:mt-0">
            
            {/* Glass Luxury Card Styling wrapper */}
            <div className="w-full bg-[#0F1524]/60 backdrop-blur-md border border-brand-border/60 p-3 md:p-6 shadow-2xl relative">
              
              {/* Header label in glass card */}
              <div className="text-center mb-3 border-b border-brand-border/30 pb-2 flex justify-between items-center px-1">
                <span className="text-[8px] sm:text-[10px] tracking-widest text-brand-text-sec uppercase font-mono">Case Profile</span>
                <span className="text-xs tracking-wider text-brand-accent uppercase font-serif font-light">{slide.service}</span>
              </div>

              {/* Draggable before/after panel */}
              <div 
                ref={containerRef}
                className="relative w-full aspect-4/3 overflow-hidden select-none touch-pan-y cursor-ew-resize border border-brand-border/40"
                onMouseMove={handleMouseMove}
                onMouseDown={(e) => handleMove(e.clientX)}
                onTouchStart={(e) => { if (e.touches.length > 0) handleMove(e.touches[0].clientX); }}
                onTouchMove={handleTouchMove}
              >
                {/* After Image (Background) - Full Color */}
                <div className="absolute inset-0 pointer-events-none select-none">
                  <Image
                    src={slide.afterImage}
                    alt={`${slide.service} After`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0B0F19]/90 backdrop-blur-sm border border-brand-border/40 px-2 py-0.5 text-[8px] sm:text-[10px] text-brand-accent uppercase tracking-widest font-mono z-20 select-none">
                  After
                </div>

                {/* Before Image (Foreground with Clip Path) - Full Color */}
                <div 
                  className="absolute inset-0 pointer-events-none select-none"
                  style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  }}
                >
                  <Image
                    src={slide.beforeImage}
                    alt={`${slide.service} Before`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-[#0B0F19]/90 backdrop-blur-sm border border-brand-border/40 px-2 py-0.5 text-[8px] sm:text-[10px] text-brand-text-sec uppercase tracking-widest font-mono z-20 select-none">
                  Before
                </div>

                {/* Vertical Slider Handle Line */}
                <div 
                  className="absolute top-0 bottom-0 w-px bg-brand-accent z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-accent text-[#0B0F19] flex items-center justify-center border-2 border-brand-bg shadow-2xl scale-110 active:scale-125 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Dot indicators beneath comparison images */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setSliderPosition(50);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer min-h-11 flex items-center justify-center`}
                    aria-label={`Show transformation slide ${idx + 1}`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-5 bg-brand-accent" : "bg-brand-text-sec/30"}`} />
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>
      </Container>

      {/* Tailwind inline animations injection */}
      <style jsx global>{`
        @keyframes goldStreak {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
