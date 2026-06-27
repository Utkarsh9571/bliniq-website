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
              Advanced aesthetic and reconstructive cosmetic surgery centre in Delhi NCR.
              Theme migration of original WordPress content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-brand-text font-medium mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Our Services", href: "/services" },
                { label: "Meet the Doctors", href: "/doctors" },
                { label: "Transformations", href: "/gallery" },
                { label: "Blog", href: "/blog" },
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
              Delhi Clinic Location
            </h4>
            <p className="text-brand-text-sec text-sm leading-relaxed mb-4">
              Qutab Vihar Phase-1, Dwarka Area
              <br />
              New Delhi - 110071, India
            </p>
            <p className="text-brand-text-sec text-sm">
              <span className="text-brand-accent">Phone:</span> +91 72900 62111
              <br />
              <span className="text-brand-accent">Email:</span> Contact email pending
              migration from existing WordPress source.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg text-brand-text font-medium mb-6 tracking-wide">
              Opening Hours
            </h4>
            <p className="text-sm text-brand-text-sec leading-relaxed">
              Operating hours pending migration from existing WordPress database config.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-sec">
          <p>&copy; {new Date().getFullYear()} BLINIQ. All rights reserved.</p>
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
