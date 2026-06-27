import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { getCsvData } from "@/lib/csvParser";

export default function ServicesPage() {
  const services = getCsvData("data-services.csv");

  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Clinical Services"
            subtitle="Treatments Index"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-brand-text mb-4 font-light">
                    {service.post_title}
                  </h3>
                  <p className="text-brand-text-sec text-sm leading-relaxed mb-6 font-sans">
                    Department clinic details and targeted procedures for{" "}
                    <span className="text-brand-accent">{service.post_title}</span>. Detailed
                    treatment guides are pending migration from WordPress slug:{" "}
                    <code className="text-brand-accent font-mono text-xs">
                      {service.post_name}
                    </code>
                    .
                  </p>
                </div>
                <div className="border-t border-brand-border/40 pt-4 flex justify-between items-center text-xs text-brand-text-sec">
                  <span>WordPress Post Slug</span>
                  <span className="font-mono text-brand-accent">{service.post_name}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
