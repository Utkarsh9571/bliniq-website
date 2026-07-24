"use client";

import React, { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-show the "Hide" tooltip briefly when opened, then fall back to hover behavior
  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => {
        setShowTooltip(true);
      });
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    trackEvent({
      action: isOpen ? "floating_contact_close" : "floating_contact_open",
      category: "Engagement",
      label: "Floating Contact Menu"
    });
  };

  const handleCall = () => {
    trackEvent({
      action: "phone_click",
      category: "Click Tracking",
      label: "Floating Call Button"
    });
  };

  const handleWhatsApp = () => {
    trackEvent({
      action: "whatsapp_click",
      category: "Click Tracking",
      label: "Floating WhatsApp Button"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4 font-sans select-none">
      {/* Sub-buttons container (expands upwards) */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Call Button */}
        <div className="relative group flex items-center">
          {/* Tooltip */}
          <span className="absolute right-14 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-gray-100 rounded-lg">
            Call Us
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
          </span>
          <a
            href="tel:+917290062111"
            onClick={handleCall}
            className="w-12 h-12 bg-[#00d775] hover:bg-[#00be67] active:scale-95 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Call Us"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group flex items-center">
          {/* Tooltip */}
          <span className="absolute right-14 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-gray-100 rounded-lg">
            WhatsApp
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
          </span>
          <a
            href="https://wa.me/917290062111"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="w-12 h-12 bg-[#25d366] hover:bg-[#1ebd59] active:scale-95 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Toggle Button */}
      <div className="relative flex items-center group">
        {/* Tooltip next to the button */}
        {isOpen && (
          <span
            className={`absolute right-16 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 shadow-lg border border-gray-100 rounded-lg transition-all duration-300 ${
              showTooltip
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            Hide
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
          </span>
        )}

        <button
          onClick={handleToggle}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer bg-brand-accent hover:bg-brand-hover text-brand-bg ${
            isOpen ? "rotate-90" : ""
          }`}
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4 9H8V9h8v2zm-3 4H8v-2h5v2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
