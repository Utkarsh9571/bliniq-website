"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Link from "next/link";

interface EnrichedService {
  title: string;
  slug: string;
  shortDescription: string;
  benefits: string[];
  commonConcerns: string[];
  stats: { label: string; value: string }[];
  recoveryInfo: string;
  trustIndicators: string[];
  image: string | null;
}

const ENRICHED_SERVICES: EnrichedService[] = [
  {
    title: "High-Definition VASER Liposuction",
    slug: "liposuction-surgery-in-delhi",
    shortDescription: "Advanced VASER 4D ultrasonic fat emulsification designed to selectively target deep and superficial fat layers, highlight natural abdominal muscle definition, and achieve athletic body contouring.",
    benefits: [
      "Selectively targets stubborn fat cells while preserving blood vessels, nerves, and connective tissues.",
      "Ultrasonic thermal energy stimulates collagen production, resulting in superior post-op skin retraction.",
      "Allows precision carving of muscle definitions including athletic six-pack shadows and obliques."
    ],
    commonConcerns: [
      "Expect moderate localized swelling and mild bruising during the first 1 to 2 weeks.",
      "Requires wearing a custom post-op compression garment full-time for 4 to 6 weeks.",
      "Preserving results requires maintaining a stable post-operative body weight."
    ],
    stats: [
      { label: "Successful Cases", value: "1200+" },
      { label: "Patient Satisfaction", value: "98.4%" },
      { label: "Procedure Type", value: "Daycare / Lipo 4D" }
    ],
    recoveryInfo: "Most patients return to light desk work within 3 to 5 days. Full gym routines, heavy sports, and strenuous physical activities can be safely resumed at 4 to 6 weeks. Wearing compression wear is vital for shaping.",
    trustIndicators: ["FDA Approved VASER Tech", "Board Certified Care", "Daycare Discharge"],
    image: "/uploads/2023/12/Liposuction-Tummy360.jpeg"
  },
  {
    title: "Gynecomastia Surgery (Male Chest Reduction)",
    slug: "gynecomastia-surgery-in-delhi",
    shortDescription: "Precision surgical excision of glandular tissue coupled with VASER liposuction. Specially tailored to treat puffy nipples, asymmetrical chests, and enlarged breast tissue in men.",
    benefits: [
      "Provides an immediate, flat, and firm masculine chest contour with permanent reduction.",
      "Virtually scarless procedure utilizing minimal incisions hidden along the natural border of the lower areola.",
      "Perpetual elimination of glandular tissue ensures that recurrence is highly unlikely."
    ],
    commonConcerns: [
      "Mild post-surgical chest tightness and sensitivity resolving within 2 to 3 weeks.",
      "Surgical strategy is customized depending on gland tissue density vs. surrounding fat accumulation.",
      "Short-term post-op support vest is required to optimize skin adherence."
    ],
    stats: [
      { label: "Gland Excision Rate", value: "100%" },
      { label: "Chest Recurrence Rate", value: "Near 0%" },
      { label: "Anesthesia Level", value: "Sedation / General" }
    ],
    recoveryInfo: "Return to sedentary office duties can be resumed within 3 days. Post-operative swelling will subside gradually over 3 to 4 weeks. Gym workouts focusing on the chest should be paused for a minimum of 4 weeks.",
    trustIndicators: ["Gland Excision Speciality", "Daycare Discharge", "No-Cost EMI Options"],
    image: "/uploads/2023/12/Gynecomastia-1.jpeg"
  },
  {
    title: "Abdominoplasty (Tummy Tuck)",
    slug: "tummy-tuck",
    shortDescription: "Major restorative surgery to remove overhang loose skin, repair separated abdominal muscles (diastasis recti), and reshape the midsection after significant weight loss or pregnancy.",
    benefits: [
      "Completely restores weakened or split abdominal core muscles (diastasis recti).",
      "Removes loose, hanging skin folds and visible stretch marks located below the navel.",
      "Re-positions the belly button to sit naturally on a flat, taut abdominal wall."
    ],
    commonConcerns: [
      "Timeline for recovery is longer than VASER liposuction alone.",
      "Leaves a low-placed horizontal scar designed to be completely concealed by swimwear/underwear.",
      "Requires walking slightly bent forward during the first 5 to 7 days to avoid skin tension."
    ],
    stats: [
      { label: "Muscle Wall Repair", value: "100%" },
      { label: "Clinical Success Rate", value: "99.1%" },
      { label: "Observation Level", value: "Inpatient (1-2 Days)" }
    ],
    recoveryInfo: "Light walking around the house is encouraged on day 1. Patients generally return to light work in 10 to 14 days. Gym workouts and lifting must be avoided for at least 6 to 8 weeks.",
    trustIndicators: ["Core Muscle Restoration", "High-Definition Contouring", "Comprehensive Post-Care Support"],
    image: null // Text-only luxury layout to prevent Liposuction-Tummy360 image replication
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Popular Procedures"
          subtitle="Clinical Specialties"
          align="center"
        />

        <div className="flex flex-col gap-28 mt-16">
          {ENRICHED_SERVICES.map((svc, index) => {
            const isEven = index % 2 === 0;
            const hasImage = svc.image !== null;

            if (!hasImage) {
              // Premium Text-Only Luxury Editorial Layout
              return (
                <div 
                  key={index} 
                  className="w-full bg-[#0F1524]/65 border border-brand-border/60 p-8 md:p-12 shadow-2xl flex flex-col gap-8 animate-fade-in"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase font-semibold">
                      Procedure 0{index + 1} &bull; Restorative
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-brand-text font-light tracking-wide">
                      {svc.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left details */}
                    <div className="lg:col-span-6 space-y-6">
                      <p className="text-brand-text-sec text-sm leading-relaxed font-sans">
                        {svc.shortDescription}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 border-t border-brand-border/30 pt-6">
                        {svc.stats.map((st, i) => (
                          <div key={i} className="text-left">
                            <span className="text-brand-accent text-xs font-mono font-bold block">{st.value}</span>
                            <span className="text-[9px] text-brand-text-sec uppercase tracking-wider block mt-1">{st.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Trust badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {svc.trustIndicators.map((badge, i) => (
                          <span key={i} className="bg-brand-accent/5 border border-brand-accent/25 text-brand-accent text-[9px] uppercase tracking-wider px-2 py-1 rounded">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right details */}
                    <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] text-brand-accent font-semibold tracking-wider uppercase block mb-2">Treatment Benefits</span>
                          <ul className="text-xs text-brand-text-sec space-y-2">
                            {svc.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 leading-relaxed">
                                <span className="text-brand-accent mt-0.5">✓</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-[10px] text-brand-text-sec/60 font-semibold tracking-wider uppercase block mb-2">Patient Considerations</span>
                          <ul className="text-xs text-brand-text-sec/80 space-y-2">
                            {svc.commonConcerns.map((c, i) => (
                              <li key={i} className="flex items-start gap-2 leading-relaxed">
                                <span className="text-brand-text-sec/40 mt-0.5">&bull;</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-brand-border/30 pt-4 text-xs text-brand-text-sec leading-relaxed">
                          <strong className="text-brand-text font-medium block mb-1">Recovery Guidance:</strong>
                          {svc.recoveryInfo}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-brand-border/30 flex gap-4">
                        <Link href={`/${svc.slug}`} className="grow sm:grow-0">
                          <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-widest font-semibold">
                            Explore Treatment
                          </Button>
                        </Link>
                        <a href="#contact-form" className="grow sm:grow-0">
                          <Button variant="outline" className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-widest font-semibold">
                            Enquire Now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Normal Layout (with unique Image, alternating order)
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 relative aspect-4/3 w-full border border-brand-border bg-brand-card ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={svc.image!}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 flex flex-col gap-6 ${
                    isEven ? "" : "lg:order-1"
                  }`}
                >
                  <div>
                    <span className="text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase font-semibold">
                      Procedure 0{index + 1}
                    </span>
                    <h3 className="font-serif text-3xl text-brand-text font-light mt-1.5 mb-3 tracking-wide">
                      {svc.title}
                    </h3>
                    <p className="text-brand-text-sec text-sm leading-relaxed font-sans">
                      {svc.shortDescription}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 border-t border-brand-border/30 pt-4">
                    {svc.stats.map((st, i) => (
                      <div key={i} className="text-left">
                        <span className="text-brand-accent text-xs font-mono font-bold block">{st.value}</span>
                        <span className="text-[9px] text-brand-text-sec uppercase tracking-wider block mt-1">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits and Concerns */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] text-brand-accent font-semibold tracking-wider uppercase block mb-2">Key Advantages</span>
                      <ul className="text-xs text-brand-text-sec space-y-1.5">
                        {svc.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-brand-accent mt-0.5">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] text-brand-text-sec/60 font-semibold tracking-wider uppercase block mb-2">Post-Op Expectations</span>
                      <ul className="text-xs text-brand-text-sec/80 space-y-1.5">
                        {svc.commonConcerns.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-brand-text-sec/40 mt-0.5">&bull;</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-brand-border/30 pt-4 text-xs text-brand-text-sec leading-relaxed">
                      <strong className="text-brand-text font-medium block mb-1">Recovery Process:</strong>
                      {svc.recoveryInfo}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link href={`/${svc.slug}`} className="grow sm:grow-0">
                      <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-semibold">
                        Explore Treatment
                      </Button>
                    </Link>
                    <a href="#contact-form" className="grow sm:grow-0">
                      <Button variant="outline" className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-semibold">
                        Enquire Now
                      </Button>
                    </a>
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
