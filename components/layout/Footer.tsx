import React from "react";
import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  const accreditation = [
    "✓ Delhi NCR",
    "✓ Since 2019",
    "✓ Thousands of Procedures",
    "✓ International Patients"
  ];

  return (
    <footer className="bg-brand-bg-sec border-t border-brand-border py-16 md:py-24 text-brand-text">
      <Container>
        {/* Accreditation Strip */}
        <div className="border-b border-brand-border/40 pb-10 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {accreditation.map((item, i) => (
              <span 
                key={i} 
                className="text-xs uppercase tracking-[0.2em] font-mono text-brand-accent font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Company */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li>
                <Link href="/about-us" className="hover:text-brand-accent transition-colors">About Bliniq</Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-brand-accent transition-colors">Appointment</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Men Procedures */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Men Procedures
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li><Link href="/face-lift" className="hover:text-brand-accent transition-colors">Face Procedures</Link></li>
              <li><Link href="/gynecomastia-surgery-in-delhi" className="hover:text-brand-accent transition-colors">Chest Procedures</Link></li>
              <li><Link href="/saggy-arms-surgery" className="hover:text-brand-accent transition-colors">Arms Procedures</Link></li>
              <li><Link href="/tummy-tuck" className="hover:text-brand-accent transition-colors">Tummy Procedures</Link></li>
              <li><Link href="/penile-lengthening" className="hover:text-brand-accent transition-colors">Intimate Areas</Link></li>
            </ul>
          </div>

          {/* Column 3: Women Procedures */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Women Procedures
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li><Link href="/face-lift-2" className="hover:text-brand-accent transition-colors">Face Procedures</Link></li>
              <li><Link href="/breast-implant-3" className="hover:text-brand-accent transition-colors">Breast Procedures</Link></li>
              <li><Link href="/saggy-arms-surgery-2" className="hover:text-brand-accent transition-colors">Arms Procedures</Link></li>
              <li><Link href="/tummy-tuck-2" className="hover:text-brand-accent transition-colors">Tummy Procedures</Link></li>
              <li><Link href="/labiaplasty-surgery-delhi" className="hover:text-brand-accent transition-colors">Intimate Areas</Link></li>
            </ul>
          </div>

          {/* Column 4: Hair & Medspa */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Hair & Medspa
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li><Link href="/head" className="hover:text-brand-accent transition-colors">Hair Transplant</Link></li>
              <li><Link href="/prp-therapy" className="hover:text-brand-accent transition-colors">PRP Therapy</Link></li>
              <li><Link href="/mesotherapy" className="hover:text-brand-accent transition-colors">Mesotherapy</Link></li>
              <li><Link href="/botox-and-fillers" className="hover:text-brand-accent transition-colors">Botox & Fillers</Link></li>
              <li><Link href="/chemical-peels" className="hover:text-brand-accent transition-colors">Chemical Peels</Link></li>
              <li><Link href="/laser-hair-removal" className="hover:text-brand-accent transition-colors">Laser Hair Removal</Link></li>
            </ul>
          </div>

          {/* Column 5: Gallery & Contact */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Gallery & Contact
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec mb-4">
              <li><Link href="/picture-gallery" className="hover:text-brand-accent transition-colors">Picture Gallery</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-accent transition-colors">Video Gallery</Link></li>
            </ul>
            <p className="text-[11px] text-brand-text-sec leading-relaxed">
              📞 +91 72900 62111
              <br />
              ✉️ info@bliniq.in
              <br />
              📍 Dwarka, New Delhi
            </p>
          </div>
        </div>

        {/* Bottom Utility Row */}
        <div className="border-t border-brand-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-sec/60">
          <p>&copy; {new Date().getFullYear()} BLINIQ. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-brand-accent transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-brand-accent transition-colors">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-brand-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
