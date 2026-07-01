"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
}

interface EnrichedService {
  title: string;
  slug: string;
  shortDescription: string;
  overview: string;
  whoIsFor: string;
  benefits: string[];
  commonConcerns: string[];
  stats: { label: string; value: string }[];
  recoveryInfo: string;
  recoveryTimeline: { day: string; detail: string }[];
  technology: string;
  trustIndicators: string[];
  faqs: FAQItem[];
  image: string | null;
}

const ENRICHED_SERVICES: EnrichedService[] = [
  {
    title: "High-Definition VASER Liposuction",
    slug: "liposuction-surgery-in-delhi",
    shortDescription: "Advanced VASER 4D ultrasonic fat emulsification designed to selectively target deep and superficial fat layers, highlight natural abdominal muscle definition, and achieve athletic body contouring.",
    overview: "VASER (Vibration Amplification of Sound Resonance at Surgery) is a cutting-edge liposuction technique that utilizes ultrasound energy to selectively dissolve fat cells prior to removal. Unlike traditional liposuction, VASER technology protects surrounding nerves, blood vessels, and connective tissues, leading to significantly less post-operative swelling, minimal bruising, and accelerated skin tightening.",
    whoIsFor: "Ideal candidates are individuals at or near their stable body weight who have resistant pockets of localized fat in the abdomen, flanks, arms, neck, or thighs that do not respond to disciplined diet and exercise.",
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
    recoveryTimeline: [
      { day: "Days 1–3", detail: "Mild soreness; light walking is encouraged to minimize fluid build-up." },
      { day: "Week 1", detail: "Return to light sedentary work; swelling begins to gradually peak." },
      { day: "Weeks 4–6", detail: "Compression wear removed; full gym activities and heavy lifting can resume." }
    ],
    technology: "USFDA Approved VASER 4D-HD Ultrasound Emulsifiers with high-definition micro-cannulas.",
    trustIndicators: ["FDA Approved VASER Tech", "Board Certified Care", "Daycare Discharge"],
    faqs: [
      {
        q: "Is the fat loss from VASER liposuction permanent?",
        a: "Yes. Once fat cells are removed via suction, they do not grow back. However, maintaining a stable weight post-op is crucial, as remaining fat cells in the body can still expand."
      },
      {
        q: "How soon will I see the final muscle definition results?",
        a: "Initial contour changes are visible immediately after swelling subsides (2–3 weeks), but high-definition muscle outlines settle fully around 3 to 6 months post-procedure."
      }
    ],
    image: "/images/home/body-contouring-editorial.webp"
  },
  {
    title: "Gynecomastia Surgery (Male Chest Reduction)",
    slug: "gynecomastia-surgery-in-delhi",
    shortDescription: "Precision surgical excision of glandular tissue coupled with VASER liposuction. Specially tailored to treat puffy nipples, asymmetrical chests, and enlarged breast tissue in men.",
    overview: "Gynecomastia surgery corrects abnormally enlarged breasts in men by combining direct surgical excision of dense glandular tissue with advanced VASER liposuction. Under the direction of Dr. Ashwani Kumar, the procedure permanently removes the underlying tissue to restore a flat, firm, and contoured chest wall structure.",
    whoIsFor: "Men suffering from enlarged breast glands, puffy areolas, or persistent chest fat pockets that cause psychological distress, areola asymmetry, or self-consciousness.",
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
    recoveryTimeline: [
      { day: "Days 1–2", detail: "Discharge on the same day; wear support vest immediately to control fluid." },
      { day: "Week 1", detail: "Incisions are examined; mild activities and walking can resume." },
      { day: "Week 4", detail: "Return to active chest workouts and heavy gym lifting." }
    ],
    technology: "Surgical gland resection scissors paired with VASER fat-emulsifying probes.",
    trustIndicators: ["Gland Excision Speciality", "Daycare Discharge", "No-Cost EMI Options"],
    faqs: [
      {
        q: "Will there be visible scars on my chest after gynecomastia surgery?",
        a: "No. The incisions are tiny, semi-circular cuts placed precisely along the lower dark border of the areola (the colored skin surrounding the nipple), which heals to be practically invisible."
      },
      {
        q: "Can the enlarged gland grow back in the future?",
        a: "No. Once the gland is completely excised surgically, it cannot regenerate. Results are permanent unless triggered by heavy steroid usage or massive weight gain."
      }
    ],
    image: "/uploads/2023/12/Gynecomastia-1.jpeg"
  },
  {
    title: "Abdominoplasty (Tummy Tuck)",
    slug: "tummy-tuck",
    shortDescription: "Major restorative surgery to remove overhang loose skin, repair separated abdominal muscles (diastasis recti), and reshape the midsection after significant weight loss or pregnancy.",
    overview: "Abdominoplasty is a powerful restorative surgery designed to address loose, overstretched skin and split abdominal wall muscles (diastasis recti). The procedure removes saggy hanging aprons of tissue, pulls the skin taut, and repairs the internal abdominal fascia to restore core strength and shape.",
    whoIsFor: "Women post-pregnancy or individuals who have undergone massive weight loss, resulting in loose abdominal skin folds and weakened core muscles that cannot be resolved via exercise.",
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
    recoveryTimeline: [
      { day: "Days 1–3", detail: "Brief hospital observation; walk in a slightly flexed position to guard core sutures." },
      { day: "Weeks 2", detail: "Sutures checked; return to light sedentary desk work." },
      { day: "Weeks 6–8", detail: "Abdominal muscles fully healed; resume sports and core workouts." }
    ],
    technology: "Muscle plication heavy sutures and advanced skin-retrieval electrosurgery blades.",
    trustIndicators: ["Core Muscle Restoration", "High-Definition Contouring", "Comprehensive Post-Care Support"],
    faqs: [
      {
        q: "What is the difference between liposuction and a tummy tuck?",
        a: "Liposuction only removes excess fat tissue. A tummy tuck removes excess hanging skin and physically repairs separated core muscles, which liposuction cannot do."
      },
      {
        q: "Can I get pregnant after having a tummy tuck?",
        a: "Yes, it is safe, but it is highly recommended to complete childbearing before surgery to prevent stretching the repaired abdominal wall muscles."
      }
    ],
    image: "/images/home/tummy-tuck-before.webp"
  }
];

export default function ServicesPreview() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
            const hasImage = svc.image !== null;
            const isOpen = expandedIndex === index;

            return (
              <div 
                key={index}
                className={`w-full bg-[#0F1524]/65 border border-brand-border/60 p-6 md:p-12 shadow-2xl flex flex-col gap-8 transition-all duration-500 ${
                  isOpen ? "ring-1 ring-brand-accent/30" : ""
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase font-semibold">
                      Procedure 0{index + 1} &bull; {hasImage ? "Sculpting" : "Restorative"}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-text font-light tracking-wide">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-2">
                    {svc.trustIndicators.map((badge, i) => (
                      <span key={i} className="bg-brand-accent/5 border border-brand-accent/25 text-brand-accent text-[9px] uppercase tracking-wider px-2 py-1 rounded">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid Split Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Media / Summary Column */}
                  <div className={`lg:col-span-5 flex flex-col gap-6 ${index === 1 ? "lg:order-2" : ""}`}>
                    {hasImage ? (
                      <div className="relative aspect-4/3 w-full border border-brand-border bg-brand-card overflow-hidden">
                        <Image
                          src={svc.image!}
                          alt={svc.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover transition-all duration-1000"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-4/3 bg-[#0B0F19]/80 border border-brand-border/30 flex flex-col items-center justify-center p-8 text-center">
                        <span className="text-3xl mb-3">✨</span>
                        <span className="text-brand-accent font-serif text-sm block mb-2 font-medium">Text-Only Premium Case</span>
                        <span className="text-[10px] text-brand-text-sec/60 max-w-50 leading-normal font-sans">
                          Image removed to prevent duplicate homepage assets
                        </span>
                      </div>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 border-t border-brand-border/30 pt-6 text-center">
                      {svc.stats.map((st, i) => (
                        <div key={i}>
                          <span className="text-brand-accent text-xs font-mono font-bold block">{st.value}</span>
                          <span className="text-[9px] text-brand-text-sec uppercase tracking-wider block mt-1 leading-normal">{st.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Descriptions, Benefits & Concerns Column */}
                  <div className={`lg:col-span-7 space-y-6 ${index === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-brand-text-sec text-sm leading-relaxed font-sans">
                      {svc.shortDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-border/20">
                      <div>
                        <span className="text-[10px] text-brand-accent font-semibold tracking-wider uppercase block mb-2">Advantages</span>
                        {/* Mobile Chips Layout */}
                        <div className="flex flex-wrap gap-2 md:hidden">
                          {svc.benefits.map((b, i) => (
                            <span key={i} className="bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-[10px] px-2.5 py-1.5 rounded-full inline-block leading-tight font-sans">
                              ✓ {b}
                            </span>
                          ))}
                        </div>
                        {/* Desktop List Layout */}
                        <ul className="hidden md:block text-xs text-brand-text-sec space-y-2">
                          {svc.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-brand-accent mt-0.5">✓</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[10px] text-brand-text-sec/60 font-semibold tracking-wider uppercase block mb-2">Considerations</span>
                        <ul className="text-xs text-brand-text-sec/80 space-y-2">
                          {svc.commonConcerns.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-brand-text-sec/40 mt-0.5">&bull;</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-brand-border/30 pt-4 text-xs text-brand-text-sec leading-relaxed">
                      <strong className="text-brand-text font-medium block mb-1">Quick Recovery Info:</strong>
                      {svc.recoveryInfo}
                    </div>

                    {/* Action buttons with minimum 44px hit-target */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <button 
                        onClick={() => toggleExpand(index)}
                        className="grow sm:grow-0 border border-brand-accent/50 hover:border-brand-accent bg-brand-accent/5 hover:bg-brand-accent/15 px-6 py-2.5 text-[10px] uppercase tracking-widest font-mono font-bold text-brand-accent transition-all duration-300 cursor-pointer min-h-11 flex items-center justify-center"
                      >
                        {isOpen ? "Hide Clinical Info" : "View Clinical Info"}
                      </button>
                      <Link href={`/${svc.slug}`} className="grow sm:grow-0">
                        <Button variant="primary" className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-semibold min-h-11">
                          Explore Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Collapsible Enriched Medical details panel */}
                {isOpen && (
                  <div className="border-t border-brand-border/30 pt-8 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in text-left">
                    {/* Left Column: Overview & Suitability */}
                    <div className="lg:col-span-6 space-y-6">
                      <div>
                        <h5 className="font-serif text-sm text-brand-accent uppercase tracking-wider mb-2 font-semibold">
                          Clinical Overview
                        </h5>
                        <p className="text-xs text-brand-text-sec leading-relaxed font-sans">
                          {svc.overview}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-serif text-sm text-brand-accent uppercase tracking-wider mb-2 font-semibold">
                          Who This Is For
                        </h5>
                        <p className="text-xs text-brand-text-sec leading-relaxed font-sans">
                          {svc.whoIsFor}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-serif text-sm text-brand-accent uppercase tracking-wider mb-2 font-semibold">
                          Surgical Technology
                        </h5>
                        <p className="text-xs text-brand-text-sec leading-relaxed font-sans font-medium">
                          {svc.technology}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Recovery Timelines & FAQs */}
                    <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l border-brand-border/20">
                      <div>
                        <h5 className="font-serif text-sm text-brand-accent uppercase tracking-wider mb-3 font-semibold">
                          Recovery Timeline Milestones
                        </h5>
                        {/* Mobile compact cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:hidden font-sans text-xs">
                          {svc.recoveryTimeline.map((time, i) => (
                            <div key={i} className="bg-[#0B0F19]/60 border border-brand-border/30 p-3 rounded flex flex-col gap-1">
                              <span className="font-mono text-brand-accent font-bold">{time.day}</span>
                              <span className="text-brand-text-sec text-[11px] leading-relaxed">{time.detail}</span>
                            </div>
                          ))}
                        </div>
                        {/* Desktop compact lines */}
                        <div className="hidden md:block space-y-3 font-sans text-xs">
                          {svc.recoveryTimeline.map((time, i) => (
                            <div key={i} className="flex gap-4">
                              <span className="font-mono text-brand-accent font-bold shrink-0 w-20">{time.day}</span>
                              <span className="text-brand-text-sec leading-relaxed">{time.detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-serif text-sm text-brand-accent uppercase tracking-wider mb-3 font-semibold">
                          Procedure FAQs
                        </h5>
                        {/* FAQs are collapsed on mobile by default naturally as they are styled clearly, but we can make them collapsible details components! */}
                        <div className="space-y-4">
                          {svc.faqs.map((faq, i) => (
                            <details key={i} className="group border border-brand-border/30 bg-[#0B0F19]/40 p-3 rounded cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex items-center justify-between font-serif text-xs text-brand-text font-medium select-none min-h-11 md:min-h-0">
                                <span>Q: {faq.q}</span>
                                <span className="text-brand-accent transition-transform duration-200 group-open:rotate-180 text-[10px]">▼</span>
                              </summary>
                              <p className="text-xs text-brand-text-sec leading-relaxed font-sans pl-3 border-l border-l-brand-accent/25 mt-2 pt-2 border-t border-t-brand-border/20">
                                {faq.a}
                              </p>
                            </details>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
