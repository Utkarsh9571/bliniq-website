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
  const baseClasses = `group inline-flex items-center justify-center font-serif text-base italic tracking-wider py-2.5 text-brand-accent hover:text-brand-hover transition-colors duration-300 ${className}`;

  const renderContent = () => (
    <span className="relative pb-1">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-accent group-hover:bg-brand-hover group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {renderContent()}
    </button>
  );
}
