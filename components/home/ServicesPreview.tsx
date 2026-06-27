import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CTAButton from "../ui/CTAButton";
import { getCsvData } from "@/lib/csvParser";

export default function ServicesPreview() {
  const services = getCsvData("data-services.csv").slice(0, 3); // Top 3 departments

  const getServiceImage = (index: number) => {
    const images = [
      "/uploads/2023/12/Liposuction-Tummy360.jpeg",
      "/uploads/2023/12/Gynecomastia-1-724x1024.jpeg",
      "/uploads/2024/02/Grade-2-for-gynecomastia-treatment.jpg",
    ];
    return images[index % images.length];
  };

  return (
    <section id="services" className="py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Popular Procedures"
          subtitle="Clinical Specializations"
          align="center"
        />

        <div className="flex flex-col gap-24 mt-16">
          {services.map((svc, index) => {
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
                    src={getServiceImage(index)}
                    alt={svc.post_title}
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
                    {svc.post_title}
                  </h3>
                  <p className="text-brand-text-sec text-sm leading-relaxed font-sans mb-4">
                    Medical procedures and treatments mapped to the {svc.post_title}{" "}
                    department. Detailed guidelines are pending migration from WordPress slug:{" "}
                    <code className="text-brand-accent">{svc.post_name}</code>.
                  </p>
                  <div>
                    <CTAButton href={`/services#${svc.post_name}`}>
                      View Department Details
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
