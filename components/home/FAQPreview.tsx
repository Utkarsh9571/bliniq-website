import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function FAQPreview() {
  const faqs = [
    {
      q: "What should I expect during my initial consultation?",
      a: "We conduct a thorough examination of your concerns, discuss your aesthetic goals, review medical history, and craft a bespoke treatment plan.",
    },
    {
      q: "Is there downtime associated with non-surgical treatments?",
      a: "Most non-surgical procedures require minimal to no downtime, allowing you to return to normal daily activities immediately.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-brand-bg-sec">
      <Container>
        <SectionTitle title="Frequently Asked Questions" subtitle="FAQ" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {faqs.map((faq, index) => (
            <Card key={index} hoverable={false}>
              <h3 className="font-serif text-xl text-brand-text mb-3 font-light">
                {faq.q}
              </h3>
              <p className="text-brand-text-sec text-sm leading-relaxed">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
