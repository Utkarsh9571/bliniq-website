"use client";

import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { clinicConfig } from "@/content/clinic-config";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/forms";
import ScrollReveal from "../ui/ScrollReveal";

export default function ContactFormSection() {
  const [showStickyBtn, setShowStickyBtn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    procedure: "",
    message: "",
    website: "" // Honeypot field
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      if (scrollPercentage > 50) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting request..." });

    try {
      const result = await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        procedure: formData.procedure,
        message: formData.message,
        website: formData.website,
        sourcePage: "homepage"
      });

      if (result.success) {
        setStatus({ type: "success", message: result.message || "Your request was submitted successfully." });
        setFormData({ name: "", phone: "", email: "", procedure: "", message: "", website: "" });
        
        // Push GTM custom lead event
        trackEvent({
          action: "form_submit_consultation",
          category: "Lead Acquisition",
          label: formData.procedure || "General Inquiry"
        });
      } else {
        setStatus({ type: "error", message: result.error || "An error occurred. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Connection issue. Please verify your internet connection and try again." });
    }
  };

  return (
    <section id="contact-form" className="py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.025)_0%,transparent_85%)] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          {/* Info Side */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
            <span className="text-brand-accent font-sans text-xs tracking-[0.3em] uppercase block font-semibold">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text leading-tight">
              Request A Clinical
              <br />
              <span className="italic text-brand-accent">Consultation</span>
            </h2>
            <div className="h-px w-20 bg-brand-accent/40 my-2" />
            
            <div className="space-y-4 text-brand-text-sec text-xs sm:text-sm leading-relaxed font-sans">
              <p>
                Schedule a professional evaluation with chief plastic surgeon Dr. Ashwani Kumar. 
                We accommodate both in-person visits at our premium Dwarka clinic and secure, encrypted online video consults.
              </p>
              <p>
                <strong>Confidentiality Guarantee:</strong> All clinical discussions, anatomical photographs, and surgical files 
                are protected by strict patient privacy rules. We maintain zero commercial data sharing.
              </p>
              <p>
                <strong>Response Window:</strong> Our dedicated medical coordinators will review your submission and callback 
                within 2 hours during normal clinic operations.
              </p>
            </div>

            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-border/30">
              <span className="text-[10px] uppercase tracking-wider font-mono text-brand-accent font-semibold">
                ✓ Confidential
              </span>
              <span className="text-[10px] uppercase tracking-wider font-mono text-brand-accent font-semibold">
                ✓ Physical & Online
              </span>
              <span className="text-[10px] uppercase tracking-wider font-mono text-brand-accent font-semibold">
                ✓ Same-Day Callback
              </span>
              <span className="text-[10px] uppercase tracking-wider font-mono text-brand-accent font-semibold">
                ✓ EMI Assistance
              </span>
            </div>

            <div className="space-y-4 pt-6 border-t border-brand-border/30 text-xs font-mono text-brand-text-sec uppercase tracking-widest">
              <p className="flex items-center gap-3">
                <span className="text-brand-accent text-lg">📞</span>
                <a 
                  href="tel:+917290062111" 
                  className="hover:text-brand-accent transition-colors min-h-11 flex items-center"
                  onClick={() => trackEvent({ action: "phone_click", category: "Click Tracking", label: "Homepage Contact Section" })}
                >
                  Phone: +91 72900 62111
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-brand-accent text-lg">📍</span>
                <span>House no. 24, A-1 Block, Qutub Vihar-1, Dwarka Sector 19b, Delhi - 110071</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-brand-accent text-lg">⏰</span>
                <span>Hours: 9:00 AM – 9:00 PM</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Form Side */}
          <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-7 bg-brand-bg border border-brand-border p-6 sm:p-8 md:p-12 w-full max-w-xl mx-auto lg:max-w-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Spam Protection */}
              <div className="hidden">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Target Procedure</label>
                  <select
                    name="procedure"
                    value={formData.procedure}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                  >
                    <option value="">Select Treatment</option>
                    {clinicConfig.procedures.map((proc, i) => (
                      <option key={i} value={proc}>{proc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-2">Additional Description</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-brand-bg-sec border border-brand-border/60 px-4 py-3 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none resize-none"
                  placeholder="Share details about your aesthetic goals..."
                />
              </div>

              {status.type !== "idle" && (
                <div className={`p-4 text-xs font-sans border ${
                  status.type === "loading" ? "border-brand-border bg-brand-card text-brand-text-sec animate-pulse" :
                  status.type === "success" ? "border-green-800/40 bg-green-950/20 text-green-400" :
                  "border-red-900/40 bg-red-950/20 text-red-400"
                }`}>
                  {status.message}
                </div>
              )}

              <Button 
                variant="primary" 
                type="submit"
                disabled={status.type === "loading"}
                className="w-full py-4 text-xs uppercase tracking-widest font-semibold min-h-11 flex items-center justify-center disabled:opacity-50"
              >
                {status.type === "loading" ? "Submitting..." : "Submit Consultation Request"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </Container>

      {/* Sticky Bottom CTA for Mobile */}
      {showStickyBtn && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0B0F19]/90 backdrop-blur-md border-t border-brand-border/60 flex md:hidden animate-fade-in shadow-2xl">
          <a 
            href="#contact-form" 
            className="w-full"
            onClick={() => trackEvent({ action: "consultation_click", category: "Click Tracking", label: "Mobile Sticky CTA" })}
          >
            <Button variant="primary" className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold text-center min-h-11 flex items-center justify-center">
              Book Consultation
            </Button>
          </a>
        </div>
      )}
    </section>
  );
}
