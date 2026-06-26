import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import CTAButton from "../ui/CTAButton";

export default function ServicesPreview() {
  const mockServices = [
    {
      title: "Laser Liposuction",
      desc: "USFDA approved minimally-invasive fat removal targeting abdomen, flanks, arms, and double chin with zero scars.",
    },
    {
      title: "Gynecomastia Correction",
      desc: "Male chest reduction surgery for gland excision and chest contouring, using micro-incisions hidden in the armpits.",
    },
    {
      title: "Tummy Tuck & Body Lift",
      desc: "Removal of excess sagging skin and muscle tightening following major weight loss or pregnancy.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg-sec">
      <Container>
        <SectionTitle
          title="Bespoke Body Contouring"
          subtitle="Our Specialized Services"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {mockServices.map((service, index) => (
            <Card key={index} className="flex flex-col justify-between min-h-62.5">
              <div>
                <h3 className="font-serif text-2xl text-brand-text mb-4 font-light">
                  {service.title}
                </h3>
                <p className="text-brand-text-sec text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              <div>
                <CTAButton href="https://wa.me/918383061539">Book Consultation</CTAButton>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
