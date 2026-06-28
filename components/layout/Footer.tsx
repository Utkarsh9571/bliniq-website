import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-sec border-t border-brand-border py-16 md:py-24 text-brand-text">
      <Container>
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Company */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li><Link href="/about-us" className="hover:text-brand-accent transition-colors">About Bliniq</Link></li>
              <li><Link href="/doctors" className="hover:text-brand-accent transition-colors">Chief Surgeon Profile</Link></li>
              <li><Link href="/appointment" className="hover:text-brand-accent transition-colors">Book Consultation</Link></li>
              <li><Link href="/contact-us" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 2: Body Contouring */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Body Contouring
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li><Link href="/liposuction-surgery-in-delhi" className="hover:text-brand-accent transition-colors">VASER Liposuction</Link></li>
              <li><Link href="/gynecomastia-surgery-in-delhi" className="hover:text-brand-accent transition-colors">Gynecomastia Reduction</Link></li>
              <li><Link href="/tummy-tuck" className="hover:text-brand-accent transition-colors">Tummy Tuck (Abdominoplasty)</Link></li>
              <li><Link href="/six-pack-abs-creation" className="hover:text-brand-accent transition-colors">Six Pack Abs Creation</Link></li>
              <li><Link href="/flank-love-handles" className="hover:text-brand-accent transition-colors">Flank & Love Handles</Link></li>
            </ul>
          </div>

          {/* Column 3: Face & Breast */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Face & Breast
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li><Link href="/nose-cosmetic-rhinoplasty" className="hover:text-brand-accent transition-colors">Cosmetic Rhinoplasty</Link></li>
              <li><Link href="/chin-implant" className="hover:text-brand-accent transition-colors">Chin & Genioplasty</Link></li>
              <li><Link href="/breast-implant-3" className="hover:text-brand-accent transition-colors">Breast Augmentation</Link></li>
              <li><Link href="/breast-reduction" className="hover:text-brand-accent transition-colors">Breast Reduction Surgery</Link></li>
              <li><Link href="/face-lift" className="hover:text-brand-accent transition-colors">Surgical Facelift</Link></li>
            </ul>
          </div>

          {/* Column 4: Hair & Medspa */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Hair & Medspa
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-text-sec">
              <li><Link href="/head" className="hover:text-brand-accent transition-colors">FUE Hair Transplant</Link></li>
              <li><Link href="/prp-therapy" className="hover:text-brand-accent transition-colors">PRP Hair Therapy</Link></li>
              <li><Link href="/laser-hair-removal" className="hover:text-brand-accent transition-colors">Laser Hair Removal</Link></li>
              <li><Link href="/botox-and-fillers" className="hover:text-brand-accent transition-colors">Botox & Fillers</Link></li>
              <li><Link href="/scar-remodeling" className="hover:text-brand-accent transition-colors">Scar Remodeling</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact & Trust */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-accent mb-6 font-semibold">
              Contact & Trust
            </h4>
            <p className="text-[11px] text-brand-text-sec leading-relaxed mb-4">
              📞 +91 72900 62111
              <br />
              ✉️ info@bliniq.in
              <br />
              📍 Dwarka Sector-7, New Delhi
              <br />
              ⏰ Mon-Sun: 9:00 AM - 9:00 PM
            </p>
            <ul className="flex flex-col gap-2 text-[10px] text-brand-accent font-mono uppercase tracking-wider">
              <li>✓ Medical Certifications</li>
              <li>✓ Patient Safety Rights</li>
              <li>✓ Certified Safe Standards</li>
            </ul>
          </div>
        </div>

        {/* Bottom Utility Row */}
        <div className="border-t border-brand-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-sec/60">
          <div className="flex items-center gap-3">
            <div className="relative w-24 h-6 opacity-75 hover:opacity-100 transition-opacity">
              <Image
                src="/logo.png"
                alt="BLINIQ Logo"
                fill
                className="object-contain"
              />
            </div>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
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
