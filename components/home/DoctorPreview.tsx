import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function DoctorPreview() {
  const achievements = [
    "MBBS, MS, M.Ch (Plastic Surgery)",
    "18+ Years of Plastic & Cosmetic Surgery Experience",
    "Specialist in High-Definition Laser Liposuction & Gland Excision",
    "Performed over 1500+ successful body contouring procedures",
  ];

  return (
    <section id="doctors" className="py-20 bg-brand-bg">
      <Container>
        <SectionTitle
          title="Meet the Chief Surgeon"
          subtitle="Clinical Leadership"
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
          {/* Doctor Image */}
          <div className="lg:col-span-5 flex justify-center relative w-full h-112.5">
            <div className="absolute inset-0 border border-brand-accent/20 translate-x-4 translate-y-4 pointer-events-none" />
            <div className="relative w-full h-full border border-brand-border overflow-hidden bg-brand-card">
              <Image
                src="/doctor-profile.png"
                alt="Dr. Ashwani Kumar"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-transparent to-transparent opacity-55" />
            </div>
          </div>

          {/* Doctor Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-brand-accent font-sans text-xs tracking-widest uppercase font-semibold">
                Plastic, Cosmetic & Reconstructive Surgeon
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-brand-text mt-2 font-light">
                Dr. Ashwani Kumar
              </h3>
            </div>
            <p className="text-brand-text-sec text-sm leading-relaxed max-w-2xl">
              Dr. Ashwani Kumar is one of Delhi NCR&apos;s most respected plastic surgeons, renowned
              for his surgical precision, commitment to patient safety, and natural-looking
              results. He established Bliniq Cosmetic Surgery Centre to deliver state-of-the-art
              cosmetic care using international clinical standards.
            </p>
            <ul className="flex flex-col gap-3.5 border-t border-brand-border pt-6">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-brand-accent text-sm mt-0.5">■</span>
                  <span className="text-brand-text text-sm font-sans tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
