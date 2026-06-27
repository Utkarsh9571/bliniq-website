"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { getAllProcedures } from "@/lib/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Mobile search state
  const [searchQuery, setSearchQuery] = useState("");
  const [showCallPopdown, setShowCallPopdown] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  // Listen to scroll events to compress navbar height and style background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-toggle call popdown every 5 seconds when header is not hovered
  useEffect(() => {
    if (isHeaderHovered) return;

    // Toggle popdown visibility every 5 seconds automatically when not hovered
    const interval = setInterval(() => {
      setShowCallPopdown((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, [isHeaderHovered]);

  // Compute popdown visibility dynamically
  const isPopdownVisible = showCallPopdown || isHeaderHovered;

  // Compute filtered procedures on-the-fly during render
  const filteredProcedures = searchQuery.trim() === ""
    ? []
    : getAllProcedures().filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);


  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-350 ${
        scrolled 
          ? "bg-[#0B0F19]/95 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 shrink-0">
            <div className="relative w-40 h-10">
              <Image
                src="/logo.png"
                alt="BLINIQ"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Right Action Trigger */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Call Hover Dropdown */}
            <div className="relative hidden lg:block">
              <button 
                className="p-2.5 rounded-full border border-brand-border/40 hover:border-brand-accent/60 bg-[#0F1524]/40 text-brand-text-sec hover:text-brand-accent transition-all cursor-pointer"
                aria-label="Call details"
                onClick={() => setShowCallPopdown(!showCallPopdown)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 0 1-9.373-9.373c-.155-.44-.01-1.928.366-2.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </button>

              {/* Popdown container */}
              <div 
                className={`absolute -left-19 top-full mt-2 w-48 bg-[#0B0F19]/95 backdrop-blur-xl border border-brand-border/60 p-4 rounded-xl shadow-2xl transition-all duration-250 z-50 text-center ${
                  isPopdownVisible
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-2 invisible"
                }`}
              >
                <span className="text-[9px] text-brand-text-sec/60 uppercase tracking-[0.2em] block mb-1">
                  Call Us Today
                </span>
                <a 
                  href="tel:+917290062111" 
                  className="text-xs text-brand-accent hover:text-brand-hover font-mono font-semibold transition-colors block"
                >
                  +91 72900 62111
                </a>
              </div>
            </div>

            <Link href="/appointment" className="hidden lg:inline-flex">
              <Button variant="primary" className="py-2.5 px-6 text-[10px] uppercase tracking-widest font-semibold">
                Book Appointment
              </Button>
            </Link>

            {/* Mobile menu drawer trigger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-brand-text hover:text-brand-accent transition-colors duration-300 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-20 bg-[#0B0F19]/98 backdrop-blur-xl border-t border-brand-border/40 z-45 flex flex-col justify-between overflow-y-auto animate-fade-in pb-10">
          <div className="p-8 space-y-6">
            {/* Search Box */}
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search procedures..."
                className="w-full bg-[#0F1524] border border-brand-border/60 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-lg font-sans"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="absolute right-3 top-2.5 text-xs text-brand-text-sec hover:text-brand-accent"
                >
                  ✕
                </button>
              )}

              {/* Search Suggestions */}
              {filteredProcedures.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-[#0F1524] border border-brand-border/60 p-2 rounded-lg shadow-2xl z-50 flex flex-col gap-2">
                  {filteredProcedures.map(p => (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}`}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setSearchQuery("");
                      }}
                      className="text-xs text-brand-text-sec hover:text-brand-accent py-2 px-3 rounded hover:bg-brand-accent/5 transition-all text-left"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordions navigation */}
            <Navigation mobile={true} onLinkClick={() => setMobileMenuOpen(false)} />
          </div>

          {/* Sticky Drawer bottom details */}
          <div className="border-t border-brand-border/40 p-8 bg-[#0F1524]/60 space-y-6">
            <div className="flex justify-between items-center text-xs">
              <span className="text-brand-text-sec uppercase tracking-widest">Support Line</span>
              <a href="tel:+917290062111" className="text-brand-accent font-mono">+91 72900 62111</a>
            </div>
            <Link href="/appointment" className="w-full block">
              <Button
                variant="primary"
                className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
