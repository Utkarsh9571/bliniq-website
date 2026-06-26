import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  onClick,
  children,
  className = "",
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center font-serif text-base italic tracking-wider py-2.5 border-b border-brand-accent text-brand-accent hover:text-brand-hover hover:border-brand-hover transition-all duration-300 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
