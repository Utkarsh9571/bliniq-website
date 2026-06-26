import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-brand-bg to-brand-bg-sec">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl animate-fade-in">
            <span className="text-brand-accent font-sans text-xs sm:text-sm tracking-[0.3em] uppercase block mb-4 font-semibold">
              Premium Medical Aesthetics
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-brand-text tracking-wide leading-[1.1] mb-6">
              Feel Your Best,
              <br />
              <span className="italic text-brand-accent">Look Your Best</span>
            </h1>
            <p className="text-brand-text-sec font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Experience the pinnacle of advanced skincare, premium cosmetic procedures,
              and non-surgical treatments tailored to reveal your natural radiance in an
              environment of pure luxury.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto">
                Explore Services
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                View Gallery
              </Button>
            </div>
          </div>

          {/* Hero Graphic / Image */}
          <div className="lg:col-span-5 flex justify-center relative w-full h-[400px] sm:h-[500px] lg:h-[550px] animate-fade-in [animation-delay:200ms]">
            {/* Elegant outer border framing the portrait */}
            <div className="absolute inset-0 border border-brand-accent/20 translate-x-4 translate-y-4 pointer-events-none transition-transform duration-700 hover:translate-x-2 hover:translate-y-2" />

            <div className="relative w-full h-full border border-brand-border overflow-hidden bg-brand-card">
              <Image
                src="/hero-portrait.png"
                alt="Clinic Luxury Portrait"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"
              />
              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
