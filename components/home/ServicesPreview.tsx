import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import CTAButton from "../ui/CTAButton";

export default function ServicesPreview() {
  const mockServices = [
    {
      title: "Facial Aesthetics",
      desc: "Advanced non-surgical fillers, neuromodulators, and structural contouring.",
    },
    {
      title: "Skin Rejuvenation",
      desc: "Laser therapy, chemical peels, and customized micro-needling treatments.",
    },
    {
      title: "Body Sculpting",
      desc: "Targeted fat reduction, muscle toning, and advanced body contouring.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg-sec">
      <Container>
        <SectionTitle
          title="Our Signature Treatments"
          subtitle="Exceptional Services"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {mockServices.map((service, index) => (
            <Card key={index} className="flex flex-col justify-between min-h-[250px]">
              <div>
                <h3 className="font-serif text-2xl text-brand-text mb-4 font-light">
                  {service.title}
                </h3>
                <p className="text-brand-text-sec text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              <div>
                <CTAButton href={`#service-${index}`}>Learn More</CTAButton>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
