import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TREATMENTS = [
  {
    id: "dht",
    title: "Direct Hair Transplant (DHT)",
    description: "An advanced refinement of the standard FUE technique. In DHT, hair follicles are extracted from the donor area and immediately implanted into the thinning recipient spots using specialized implanter tools. This minimal transit time outside the body maximizes graft survival rates and guarantees natural density and hair growth angles.",
    benefits: ["Maximum graft viability", "Precise depth & angle control", "Shorter procedure duration"]
  },
  {
    id: "bio-dht",
    title: "Bio-Direct Hair Transplant (Bio-DHT)",
    description: "Bio-DHT combines the precision of Direct Hair Transplant with cell-enriching growth factor therapies. During implantation, the hair follicles are bathed in concentrated growth factors (derived from the patient's own blood) to stimulate accelerated cellular healing, nourish the newly placed roots, and trigger rapid post-operative growth.",
    benefits: ["Accelerated healing of donor/recipient areas", "Enhanced post-op graft survival", "Thicker, faster hair growth"]
  },
  {
    id: "gfc",
    title: "Growth Factor Concentrate (GFC) Therapy",
    description: "GFC is a highly advanced, non-surgical hair therapy that utilizes high concentrations of pure growth factors harvested from the patient's own platelets. Unlike traditional PRP, GFC isolates only the active growth factors, eliminating red and white blood cells. It is micro-injected into the scalp to repair damaged follicles and reverse hair thinning.",
    benefits: ["Higher growth factor concentration than PRP", "Virtually painless and highly stable", "Consistent clinical success in density"]
  },
  {
    id: "exosome",
    title: "Exosome Therapy",
    description: "The latest breakthrough in regenerative hair science. Exosomes are tiny cellular nanovesicles loaded with proteins, growth factors, and genetic messengers (mRNA). When applied to the scalp, they transmit powerful biochemical signals to dormant hair follicles, waking them up and switching them back into the active growth phase.",
    benefits: ["Wakes up dormant follicles", "Highly effective for androgenic alopecia", "Completely drug-free regeneration"]
  },
  {
    id: "qr678",
    title: "QR-678 Mesotherapy",
    description: "A globally patented, US-FDA approved hair rejuvenation therapy. The QR-678 formula consists of bio-engineered plant-derived growth factors that mimic natural hair growth signals. Administered via micro-mesotherapy injections, it directly targets the hair roots to reduce hair fall and improve thickness.",
    benefits: ["US-FDA approved patented formula", "Excellent for diffuse hair loss", "No side-effects or surgical downtime"]
  },
  {
    id: "prp",
    title: "Platelet-Rich Plasma (PRP) Therapy",
    description: "PRP is a widely established, trusted clinical therapy for hair restoration. A sample of the patient's blood is centrifuged to isolate platelet-rich plasma, which is then micro-injected into areas of thinning. The platelets release natural growth factors that stimulate blood flow, nourish roots, and reverse early hair loss.",
    benefits: ["Uses patient's own biological growth cells", "Strengthens existing hair roots", "Clinically proven to reduce active hair fall"]
  }
];

export default function HairLossTreatmentsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg text-brand-text py-32 font-sans">
        <Container>
          <ScrollReveal variant="fade-up">
            <SectionTitle
              title="Advanced Hair Restoration"
              subtitle="Hair Loss & Hair Fall Treatments"
              align="center"
            />
            <p className="text-center text-brand-text-sec text-xs sm:text-sm max-w-2xl mx-auto mt-4 mb-16 font-sans">
              Discover our clinical array of surgical transplants and advanced non-surgical growth factor therapies designed by Dr. Ashwani Kumar to reverse hair loss.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-16">
            {TREATMENTS.map((t, idx) => (
              <ScrollReveal key={t.id} variant="fade-up" delay={Math.min(idx * 50, 200)}>
                <div 
                  id={t.id} 
                  className="bg-[#0F1524]/60 border border-brand-border/40 p-8 md:p-10 rounded-none relative group hover:border-brand-accent/50 transition-colors"
                >
                  <div className="absolute top-0 right-0 p-4 font-mono text-[9px] tracking-widest text-brand-accent/60 uppercase">
                    Restoration Therapy
                  </div>
                  <h3 className="font-serif text-2xl font-light text-brand-text mb-4">
                    {t.title}
                  </h3>
                  <p className="text-brand-text-sec text-sm leading-relaxed mb-6 font-sans">
                    {t.description}
                  </p>
                  
                  <div className="border-t border-brand-border/20 pt-5">
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-accent font-mono font-bold mb-3">
                      Key Highlights & Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {t.benefits.map((b, i) => (
                        <li key={i} className="flex items-center text-xs text-brand-text-sec">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
