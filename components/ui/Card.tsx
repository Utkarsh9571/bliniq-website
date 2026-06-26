import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={`bg-brand-card border border-brand-border p-6 md:p-8 transition-all duration-500 ${
        hoverable ? "hover:border-brand-accent/30 hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
