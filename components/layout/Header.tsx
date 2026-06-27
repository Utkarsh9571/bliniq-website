"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glassmorphism w-full">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-widest text-brand-text font-light">
              BLINIQ
            </span>
          </Link>

          {/* Desktop Nav */}
          <Navigation />

          {/* CTA / Mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col text-right mr-2">
              <span className="text-[10px] text-brand-text-sec uppercase tracking-widest">
                Call Us Today
              </span>
              <a
                href="tel:+917290062111"
                className="text-xs text-brand-accent hover:text-brand-hover transition-colors font-mono"
              >
                +91 72900 62111
              </a>
            </div>

            <Link href="/appointment" className="hidden lg:inline-flex">
              <Button variant="outline" className="py-2 px-5 text-[10px]">
                Book Appointment
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-text hover:text-brand-accent transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-brand-bg-sec border-b border-brand-border p-8 animate-fade-in z-45">
          <Navigation mobile={true} onLinkClick={() => setMobileMenuOpen(false)} />
          <div className="mt-8 flex flex-col gap-4 text-center">
            <span className="text-[10px] text-brand-text-sec uppercase tracking-widest block">
              Call Us:
            </span>
            <a
              href="tel:+917290062111"
              className="text-sm text-brand-accent hover:text-brand-hover transition-colors font-mono"
            >
              +91 72900 62111
            </a>
            <Link href="/appointment" className="w-full">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
