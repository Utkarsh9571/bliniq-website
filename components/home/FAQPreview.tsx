import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function FAQPreview() {
  return (
    <section id="faq" className="py-20 bg-brand-bg-sec">
      <Container>
        <SectionTitle title="Frequently Asked Questions" subtitle="FAQ" align="center" />
        <div className="flex flex-col gap-6 justify-center items-center py-16 px-8 border border-dashed border-brand-border bg-brand-card max-w-3xl mx-auto">
          <span className="text-brand-accent text-3xl">?</span>
          <h3 className="font-serif text-xl text-brand-text font-light text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-brand-text-sec text-sm leading-relaxed text-center max-w-md">
            FAQs and answers are pending migration from the existing WordPress database source.
          </p>
        </div>
      </Container>
    </section>
  );
}
