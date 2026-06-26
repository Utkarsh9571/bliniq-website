import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function DoctorPreview() {
  const doctors = [
    {
      name: "Dr. Alexander Sterling",
      role: "Lead Aesthetic Surgeon",
      bio: "Over 15 years of experience in custom facial reconstruction and advanced cosmetic procedures.",
    },
    {
      name: "Dr. Evelyn Thorne",
      role: "Dermatological Specialist",
      bio: "Board-certified dermatologist specializing in laser resurfacing and custom skin rejuvenation.",
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-brand-bg">
      <Container>
        <SectionTitle
          title="Meet Our Medical Experts"
          subtitle="Clinical Excellence"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {doctors.map((doc, index) => (
            <Card key={index} className="flex flex-col gap-4">
              <span className="text-brand-accent font-sans text-xs tracking-wider uppercase">
                {doc.role}
              </span>
              <h3 className="font-serif text-2xl text-brand-text font-light">{doc.name}</h3>
              <p className="text-brand-text-sec text-sm leading-relaxed">{doc.bio}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
