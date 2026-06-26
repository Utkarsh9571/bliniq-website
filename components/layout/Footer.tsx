import React from "react";
import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-sec border-t border-brand-border py-16 md:py-24 text-brand-text">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-3xl tracking-widest text-brand-accent font-light">
              BLINIQ
            </span>
            <p className="text-brand-text-sec text-sm leading-relaxed max-w-xs mt-2">
              A premium, dark-luxury medical aesthetic clinic delivering state-of-the-art
              treatments and personalized cosmetic care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-brand-text font-medium mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Meet the Doctors", href: "#doctors" },
                { label: "Patient Testimonials", href: "#testimonials" },
                { label: "Latest News", href: "#blog" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-text-sec hover:text-brand-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg text-brand-text font-medium mb-6 tracking-wide">
              Clinic Location
            </h4>
            <p className="text-brand-text-sec text-sm leading-relaxed mb-4">
              100 Luxury Boulevard, Suite 500
              <br />
              Beverly Hills, CA 90210
            </p>
            <p className="text-brand-text-sec text-sm">
              <span className="text-brand-accent">Phone:</span> (555) 019-2834
              <br />
              <span className="text-brand-accent">Email:</span> info@bliniqclinic.com
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg text-brand-text font-medium mb-6 tracking-wide">
              Opening Hours
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-brand-text-sec">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between text-brand-accent/70">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-sec">
          <p>&copy; {new Date().getFullYear()} BLINIQ Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-brand-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
