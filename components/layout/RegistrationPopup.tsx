"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const router = useRouter();

  useEffect(() => {
    // Only show the popup if the user hasn't seen it during this session
    const hasSeen = sessionStorage.getItem("bliniq_has_seen_registration_popup");
    if (!hasSeen) {
      // Delay popup by 2.5 seconds for a smoother initial load experience
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("bliniq_has_seen_registration_popup", "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("bliniq_has_seen_registration_popup", "true");
    setIsOpen(false);
    
    // Redirect to contact-us with URL parameters pre-filled
    const query = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      email: formData.email
    }).toString();
    
    router.push(`/contact-us?${query}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with click-to-close behavior */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-brand-bg-sec border border-brand-accent/20 p-6 md:p-8 shadow-2xl text-left transform scale-100 transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-brand-text-sec hover:text-brand-accent transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title & Header Details */}
        <div className="text-center mb-6">
          <span className="text-brand-accent text-[10px] font-semibold uppercase tracking-[0.25em] font-mono block mb-2">
            Priority Registration
          </span>
          <h3 className="font-serif text-2xl text-brand-text font-light tracking-wide">
            Book Your Consultation
          </h3>
          <p className="text-brand-text-sec text-xs mt-2 leading-relaxed max-w-sm mx-auto">
            Provide your basic details below to begin. You can finalize your preferred procedure and schedule preferences on the next page.
          </p>
        </div>

        {/* Quick Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
          <div>
            <label htmlFor="popup-name" className="block text-[11px] uppercase tracking-wider text-brand-text-sec mb-1.5 font-mono">
              Full Name
            </label>
            <input
              id="popup-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="popup-phone" className="block text-[11px] uppercase tracking-wider text-brand-text-sec mb-1.5 font-mono">
              Phone Number
            </label>
            <input
              id="popup-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 99999 99999"
              className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="popup-email" className="block text-[11px] uppercase tracking-wider text-brand-text-sec mb-1.5 font-mono">
              Email Address
            </label>
            <input
              id="popup-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className="w-full bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
              required
            />
          </div>

          <Button
            variant="primary"
            type="submit"
            className="w-full mt-2 min-h-11 flex items-center justify-center"
          >
            Continue to Booking &rarr;
          </Button>
        </form>
      </div>
    </div>
  );
}
