import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function TestimonialsPreview() {
  const reviews = [
    {
      text: "The clinic's attention to detail and luxury atmosphere made me feel extremely comfortable. My results are subtle and beautiful.",
      author: "Sophia L.",
      treatment: "Facial Aesthetics",
    },
    {
      text: "A truly premium experience. Dr. Sterling and his team are professional, knowledgeable, and the outcome exceeded my expectations.",
      author: "Marcus V.",
      treatment: "Skin Rejuvenation",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-bg-sec">
      <Container>
        <SectionTitle
          title="Patient Experiences"
          subtitle="Client Stories"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {reviews.map((rev, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <p className="text-brand-text-sec text-sm italic leading-relaxed mb-6">
                &ldquo;{rev.text}&rdquo;
              </p>
              <div>
                <h4 className="font-serif text-lg text-brand-text font-light">
                  {rev.author}
                </h4>
                <span className="text-brand-accent/70 font-sans text-xs tracking-wider">
                  {rev.treatment}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
