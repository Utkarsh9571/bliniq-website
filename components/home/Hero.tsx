import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-linear-to-b from-brand-bg to-brand-bg-sec">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl animate-fade-in">
            <span className="text-brand-accent font-sans text-xs sm:text-sm tracking-[0.3em] uppercase block mb-4 font-semibold">
              Delhi NCR's Premier Cosmetic Centre
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-text tracking-wide leading-[1.15] mb-6">
              Advanced & Safe
              <br />
              <span className="italic text-brand-accent">Liposuction Surgery</span>
            </h1>
            <p className="text-brand-text-sec font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Get rid of stubborn fat safely with USFDA-approved laser fat removal. Painless
              45-minute procedure with zero scars, performed by top Indian board-certified
              cosmetic surgeons.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8 w-full border-y border-brand-border py-6">
              <div>
                <span className="block font-serif text-2xl text-brand-accent font-light">
                  8000+
                </span>
                <span className="text-brand-text-sec text-[10px] sm:text-xs uppercase tracking-wider block mt-1">
                  Happy Patients
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-brand-accent font-light">
                  1500+
                </span>
                <span className="text-brand-text-sec text-[10px] sm:text-xs uppercase tracking-wider block mt-1">
                  Laser Procedures
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-brand-accent font-light">
                  100+
                </span>
                <span className="text-brand-text-sec text-[10px] sm:text-xs uppercase tracking-wider block mt-1">
                  Partner Hospitals
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a href="https://wa.me/918383061539" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full">
                  WhatsApp Consultation
                </Button>
              </a>
              <a href="#gallery" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  View Transformations
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Graphic / Image */}
          <div className="lg:col-span-5 flex justify-center relative w-full h-100 sm:h-125 lg:h-137.5 animate-fade-in [animation-delay:200ms]">
            {/* Elegant outer border framing the portrait */}
            <div className="absolute inset-0 border border-brand-accent/20 translate-x-4 translate-y-4 pointer-events-none transition-transform duration-700 hover:translate-x-2 hover:translate-y-2" />

            <div className="relative w-full h-full border border-brand-border overflow-hidden bg-brand-card">
              <Image
                src="/doctor-profile.png"
                alt="Dr. Ashwani Kumar"
                fill
                priority
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"
              />
              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-transparent to-transparent opacity-60" />

              {/* Doctor Details Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-bg-sec/90 backdrop-blur-md border border-brand-border p-4 text-left">
                <h4 className="text-brand-text text-sm font-semibold tracking-wider font-sans">
                  DR. ASHWANI KUMAR
                </h4>
                <p className="text-brand-accent text-xs mt-1">
                  MBBS, MS, M.Ch (Plastic Surgery)
                </p>
                <p className="text-brand-text-sec text-[10px] uppercase tracking-widest mt-2">
                  18+ Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
