import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CTAButton from "../ui/CTAButton";
import { COSMETIC_SERVICES } from "@/lib/services";

export default function ServicesPreview() {
  // Show popular surgeries on the homepage (Gynecomastia, Liposuction, Tummy Tuck)
  const popularServices = COSMETIC_SERVICES.filter(s => 
    s.slug === "gynecomastia-surgery-in-delhi" || 
    s.slug === "liposuction-surgery-in-delhi" || 
    s.slug === "tummy-tuck"
  );

  return (
    <section id="services" className="py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Popular Procedures"
          subtitle="Clinical Specialties"
          align="center"
        />

        <div className="flex flex-col gap-24 mt-16">
          {popularServices.map((svc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative aspect-4/3 w-full border border-brand-border bg-brand-card ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-4 max-w-lg ${
                    isEven ? "" : "lg:order-1 ml-auto"
                  }`}
                >
                  <span className="text-brand-accent font-sans text-xs tracking-[0.2em] uppercase font-semibold">
                    Procedure 0{index + 1}
                  </span>
                  <h3 className="font-serif text-3xl text-brand-text font-light">
                    {svc.title}
                  </h3>
                  <p className="text-brand-text-sec text-sm leading-relaxed font-sans mb-4">
                    {svc.description}
                  </p>
                  <div>
                    <CTAButton href={`/${svc.slug}`}>
                      View Procedure Details
                    </CTAButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
