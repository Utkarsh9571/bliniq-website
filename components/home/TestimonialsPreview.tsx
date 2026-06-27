import React from "react";
import Container from "../ui/Container";

export default function TestimonialsPreview() {
  return (
    <section id="testimonials" className="py-36 bg-brand-bg text-brand-text border-b border-brand-border/40 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,181,142,0.03)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="text-brand-accent font-sans text-xs tracking-[0.3em] uppercase block mb-6 font-semibold">
            Patient Stories
          </span>
          <span className="text-brand-accent text-6xl font-serif italic leading-none mb-4">
            &ldquo;
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-brand-text leading-relaxed tracking-wide mb-8">
            Experience exceptional cosmetic care tailored to your unique desires in a premium,
            safe clinical setting.
          </blockquote>
          <div className="h-px w-16 bg-brand-accent/40 mb-6" />
          <cite className="font-mono text-xs uppercase tracking-widest text-brand-text-sec not-italic">
            Patient Reviews Pending WordPress Database Connection
          </cite>
        </div>
      </Container>
    </section>
  );
}
