import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

export default function StorySection() {
  return (
    <section className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container className="flex flex-col gap-32">
        {/* Row 1: Left Image, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative aspect-4/3 w-full border border-brand-border bg-brand-card">
            <Image
              src="/uploads/2023/12/Liposuction-Tummy360.jpeg"
              alt="Liposuction Tummy360"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-1000"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6 max-w-xl">
            <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase font-semibold">
              Bespoke Surgeries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text tracking-wide leading-tight">
              Be Confident Again
              <br />
              <span className="italic text-brand-accent">At BLINIQ</span>
            </h2>
            <p className="text-brand-text-sec text-sm leading-relaxed font-sans mt-2">
              BLINIQ has been present in Delhi since 2019, offering customised cosmetic
              surgeries to make you look fabulous. We bring advanced technologies used
              worldwide under a single roof.
            </p>
          </div>
        </div>

        {/* Row 2: Right Image, Left Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:order-2 relative aspect-4/3 w-full border border-brand-border bg-brand-card">
            <Image
              src="/uploads/2020/08/Doctor_01.jpg"
              alt="Medical Consultation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-1000"
            />
          </div>
          <div className="lg:col-span-6 lg:order-1 flex flex-col gap-6 max-w-xl ml-auto">
            <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase font-semibold">
              Founded by Dr. Ashwani Kumar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text tracking-wide leading-tight">
              Advanced Clinical
              <br />
              <span className="italic text-brand-accent">Cosmetic Excellence</span>
            </h2>
            <p className="text-brand-text-sec text-sm leading-relaxed font-sans mt-2">
              BLINIQ is a cosmetic surgery centre established by Dr. Ashwani Kumar as a dream
              project. We aim to help you achieve your desired appearance safely, with
              cutting-edge clinical procedures.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
