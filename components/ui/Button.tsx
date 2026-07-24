import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] py-3.5 px-7 text-center select-none font-medium cursor-pointer hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-brand-accent text-brand-bg hover:bg-brand-hover border border-brand-accent hover:border-brand-hover",
    secondary:
      "bg-brand-bg-sec text-brand-text hover:bg-brand-card border border-brand-border",
    outline:
      "bg-transparent text-brand-accent hover:bg-brand-accent hover:text-brand-bg border border-brand-accent",
    text: "bg-transparent text-brand-text-sec hover:text-brand-text border-0 py-2 px-4",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
