import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-bg text-brand-text">
      {/* Background Cinematic Image from uploads */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/uploads/2023/12/Liposuction-Tummy360.jpeg"
          alt="Cinematic Clinic Background"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale brightness-25 contrast-125 scale-100"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-radial-to-c from-transparent via-brand-bg/60 to-brand-bg" />
      </div>

      <Container className="relative z-10 w-full py-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center animate-fade-in">
          <span className="text-brand-accent font-sans text-xs sm:text-sm tracking-[0.4em] uppercase block mb-6 font-semibold">
            Clinical Cosmetic Centre
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-brand-text tracking-wide leading-none mb-8">
            Be Confident Again
            <br />
            <span className="italic text-brand-accent">At BLINIQ</span>
          </h1>
          <div className="h-px w-20 bg-brand-accent/40 mb-8" />
          <p className="text-brand-text-sec font-sans text-sm sm:text-base leading-relaxed mb-10 max-w-lg uppercase tracking-wider">
            Established by Dr. Ashwani Kumar. Serving Delhi NCR since 2019.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact-form">
              <Button variant="primary" className="px-10">
                Book Consultation
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" className="px-10">
                Explore Services
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
