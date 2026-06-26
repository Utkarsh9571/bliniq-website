import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignment[align]} ${className}`}>
      {subtitle && (
        <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text tracking-wide leading-tight">
        {title}
      </h2>
      <div
        className={`h-px w-20 bg-brand-accent/40 mt-5 ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      />
    </div>
  );
}
