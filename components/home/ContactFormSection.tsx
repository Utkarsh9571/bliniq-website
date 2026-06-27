import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { COSMETIC_SERVICES } from "@/lib/services";

export default function ContactFormSection() {
  return (
    <section id="contact-form" className="py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-brand-accent font-sans text-xs tracking-[0.3em] uppercase block font-semibold">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-brand-text leading-tight">
              Request A Clinical
              <br />
              <span className="italic text-brand-accent">Consultation</span>
            </h2>
            <div className="h-px w-20 bg-brand-accent/40 my-2" />
            <p className="text-brand-text-sec text-sm leading-relaxed font-sans">
              Schedule a confidential physical or online consultation with Dr. Ashwani Kumar. 
              Receive a customized assessment, grading analysis, and procedure blueprint.
            </p>

            <div className="space-y-4 pt-4 text-xs font-mono text-brand-text-sec uppercase tracking-widest">
              <p className="flex items-center gap-3">
                <span className="text-brand-accent text-lg">📞</span>
                <span>Phone: +91 72900 62111</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-brand-accent text-lg">📍</span>
                <span>Qutab Vihar Phase-1, Dwarka, Delhi</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-brand-accent text-lg">⏰</span>
                <span>Hours: 9:00 AM – 9:00 PM</span>
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-brand-bg border border-brand-border p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                    placeholder="10-digit mobile"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Target Procedure</label>
                  <select
                    required
                    className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                  >
                    <option value="">Select Treatment</option>
                    {COSMETIC_SERVICES.map((s, i) => (
                      <option key={i} value={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Additional Description</label>
                <textarea
                  rows={4}
                  className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none resize-none"
                  placeholder="Describe your conditions, desired outcome, or questions..."
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold">
                  Book Free Medical Consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
