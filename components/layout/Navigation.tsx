import React from "react";
import Link from "next/link";

interface NavigationProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export default function Navigation({
  mobile = false,
  onLinkClick,
}: NavigationProps) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Appointment", href: "/appointment" },
  ];

  if (mobile) {
    return (
      <nav className="flex flex-col gap-6 text-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onLinkClick}
            className="text-brand-text/80 hover:text-brand-accent font-sans text-sm tracking-[0.2em] uppercase transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-brand-text-sec hover:text-brand-accent font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
