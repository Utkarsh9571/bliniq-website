import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

export default function OriginSection() {
  return (
    <section id="origin" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container className="flex flex-col gap-32">
        {/* Row 1: Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative aspect-4/3 w-full border border-brand-border bg-brand-card">
            <Image
              src="/uploads/2023/12/Liposuction-Tummy360.jpeg"
              alt="BLINIQ Cosmetic Surgery Clinic"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6 max-w-xl">
            <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase font-semibold">
              The Origin of BLINIQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text tracking-wide leading-tight">
              A Vision for Cosmetic
              <br />
              <span className="italic text-brand-accent">Excellence in Delhi</span>
            </h2>
            <p className="text-brand-text-sec text-sm leading-relaxed font-sans mt-2">
              BLINIQ has been serving patients in Delhi NCR since 2019, providing bespoke cosmetic 
              and reconstructive surgeries. Our clinic is built on the philosophy of helping patients 
              reclaim their self-confidence through safe, state-of-the-art procedures under unified clinical care.
            </p>
          </div>
        </div>

        {/* Row 2: Founder's Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:order-2 relative aspect-4/3 w-full border border-brand-border bg-brand-card">
            <Image
              src="/uploads/2024/02/Dr-Ashwini.jpg"
              alt="Dr. Ashwani Kumar performing consultation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="lg:col-span-6 lg:order-1 flex flex-col gap-6 max-w-xl ml-auto">
            <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase font-semibold">
              Dr. Ashwani Kumar&apos;s Dream Project
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text tracking-wide leading-tight">
              Personalized & Safe
              <br />
              <span className="italic text-brand-accent">Patient Transformations</span>
            </h2>
            <p className="text-brand-text-sec text-sm leading-relaxed font-sans mt-2">
              Established by M.Ch Plastic Surgeon Dr. Ashwani Kumar, BLINIQ was conceptualized as a premium 
              center where advanced FDA-approved technologies are leveraged to achieve natural, proportionate results. 
              We prioritize transparency, patient privacy, and customized clinical treatment courses for every visitor.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
