import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { COSMETIC_SERVICES } from "@/lib/services";

export default function ServicesPage() {
  // Group services by category
  const categories = ["Body", "Face", "Breast", "Hair", "Non-Surgical"] as const;

  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Clinical Specialties"
            subtitle="Treatments Index"
            align="center"
          />

          <div className="space-y-16 mt-16">
            {categories.map((cat, i) => {
              const catServices = COSMETIC_SERVICES.filter(s => s.category === cat);
              if (catServices.length === 0) return null;

              return (
                <div key={i} className="border-t border-brand-border/40 pt-10">
                  <h2 className="font-serif text-2xl text-brand-accent tracking-widest uppercase mb-8 font-light">
                    {cat} Procedures
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {catServices.map((service, index) => (
                      <Card key={index} className="flex flex-col justify-between hover:border-brand-accent/50 transition-all duration-350">
                        <div>
                          <h3 className="font-serif text-2xl text-brand-text mb-4 font-light">
                            {service.title}
                          </h3>
                          <p className="text-brand-text-sec text-sm leading-relaxed mb-6 font-sans">
                            {service.description}
                          </p>
                        </div>
                        <div className="border-t border-brand-border/40 pt-4 flex justify-between items-center text-xs">
                          <span className="text-brand-text-sec/60">Procedure Code: {service.slug}</span>
                          <Link href={`/${service.slug}`} className="font-semibold text-brand-accent hover:underline uppercase tracking-wider">
                            View details &rarr;
                          </Link>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
