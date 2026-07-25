"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/forms";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    procedure: "General Inquiry",
    message: "",
    website: "" // Honeypot field
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("name") || "";
      const phone = params.get("phone") || "";
      const email = params.get("email") || "";
      
      if (name || phone || email) {
        const frame = requestAnimationFrame(() => {
          setFormData(prev => ({
            ...prev,
            name: name || prev.name,
            phone: phone || prev.phone,
            email: email || prev.email
          }));
        });
        return () => cancelAnimationFrame(frame);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const result = await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        procedure: formData.procedure,
        message: formData.message,
        website: formData.website,
        sourcePage: "contact-us"
      });

      if (result.success) {
        setStatus({ type: "success", message: result.message || "Your message was sent successfully." });
        setFormData({ name: "", phone: "", email: "", procedure: "General Inquiry", message: "", website: "" });
        
        // Push GTM event
        trackEvent({
          action: "form_submit_contact",
          category: "Lead Acquisition",
          label: formData.procedure
        });
      } else {
        setStatus({ type: "error", message: result.error || "An error occurred. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Failed to send message. Please check your internet connection." });
    }
  };

  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <ScrollReveal variant="fade-up">
            <SectionTitle title="Contact Us" subtitle="Get In Touch" align="center" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            {/* Left Column: Map and Details */}
            <ScrollReveal variant="fade-right" className="lg:col-span-6 flex flex-col gap-8">
              {/* Verified Map Location */}
              <div className="w-full h-80 border border-brand-border bg-brand-card overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Dwarka%20Delhi%20India&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                  title="BLINIQ Cosmetic Surgery Clinic, Dwarka, Delhi"
                  aria-label="BLINIQ Cosmetic Surgery Clinic, Dwarka, Delhi"
                  className="w-full h-full border-0"
                ></iframe>
              </div>

              <div className="bg-brand-bg-sec border border-brand-border p-6 font-sans">
                <h4 className="font-serif text-lg text-brand-accent mb-4 tracking-wide">
                  Clinic Details
                </h4>
                <p className="text-brand-text-sec text-sm leading-relaxed mb-4">
                  Qutab Vihar Phase-1, Dwarka
                  <br />
                  New Delhi - 110075, India
                </p>
                <p className="text-brand-text-sec text-sm">
                  <span className="text-brand-accent">Phone:</span>{" "}
                  <a
                    href="tel:+917290062111"
                    className="hover:text-brand-accent transition-colors"
                    onClick={() => trackEvent({ action: "phone_click", category: "Click Tracking", label: "Contact Us Info" })}
                  >
                    +91 72900 62111
                  </a>
                  <br />
                  <span className="text-brand-accent">Email:</span> {" "}
 ashwani.kumar@bliniq.in
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Link href="https://www.instagram.com/ashwanikumar.bliniq?igsh=YXo3ZWRzYzNqNDQ5" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="object-contain" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Contact Form */}
            <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-6">
              <Card hoverable={false}>
                <h4 className="font-serif text-2xl text-brand-text mb-6 font-light">
                  Send a Message
                </h4>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans text-sm">
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

                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="procedure"
                      value={formData.procedure}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      required
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Billing Question">Billing & Payment</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other Topic</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  {status.type !== "idle" && (
                    <div className={`p-4 text-xs ${
                      status.type === "loading" ? "border border-brand-border bg-brand-card text-brand-text-sec animate-pulse" :
                      status.type === "success" ? "border border-green-800/40 bg-green-950/20 text-green-400" :
                      "border border-red-900/40 bg-red-950/20 text-red-400"
                    }`}>
                      {status.message}
                    </div>
                  )}

                  <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={status.type === "loading"}
                    className="mt-2 min-h-11 flex items-center justify-center disabled:opacity-50"
                  >
                    {status.type === "loading" ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

