"use client";

import React, { useState, useEffect, useRef } from "react";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "image-reveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: ScrollRevealVariant;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: React.ElementType;
}

// Client-side cache of observers and element callbacks to minimize performance overhead
const observers = new Map<string, IntersectionObserver>();
const callbacks = new Map<Element, () => void>();

function getSharedObserver(threshold: number, rootMargin: string): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  const key = `${threshold}_${rootMargin}`;
  let obs = observers.get(key);
  if (!obs) {
    obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) cb();
          }
        });
      },
      { threshold, rootMargin }
    );
    observers.set(key, obs);
  }
  return obs;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
  className = "",
  as: Component = "div",
}: ScrollRevealProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = React.useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useEffect(() => {
    // Defer mount confirmation asynchronously to prevent synchronous render cascades
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isMounted || prefersReducedMotion || hasRevealed) return;

    const el = elementRef.current;
    if (!el) return;

    const rootMargin = "0px 0px -5% 0px";
    const obs = getSharedObserver(threshold, rootMargin);
    if (!obs) return;

    const handleIntersection = () => {
      setHasRevealed(true);
      if (once) {
        callbacks.delete(el);
        obs.unobserve(el);
      }
    };

    callbacks.set(el, handleIntersection);
    obs.observe(el);

    return () => {
      callbacks.delete(el);
      if (obs && el) {
        obs.unobserve(el);
      }
    };
  }, [isMounted, threshold, once, prefersReducedMotion, hasRevealed]);

  // If not mounted on client yet, render children immediately visible (progressive enhancement)
  if (!isMounted || prefersReducedMotion) {
    return (
      <Component ref={elementRef} className={className}>
        {children}
      </Component>
    );
  }

  // Determine transition styles based on variant
  const getVariantStyles = (): {
    initial: string;
    revealed: string;
  } => {
    switch (variant) {
      case "fade-up":
        return {
          initial: "opacity-0 translate-y-6 sm:translate-y-10 pointer-events-none",
          revealed: "opacity-100 translate-y-0",
        };
      case "fade-down":
        return {
          initial: "opacity-0 -translate-y-6 sm:-translate-y-10 pointer-events-none",
          revealed: "opacity-100 translate-y-0",
        };
      case "fade-left":
        return {
          initial: "opacity-0 translate-x-4 sm:translate-x-8 pointer-events-none",
          revealed: "opacity-100 translate-x-0",
        };
      case "fade-right":
        return {
          initial: "opacity-0 -translate-x-4 sm:-translate-x-8 pointer-events-none",
          revealed: "opacity-100 translate-x-0",
        };
      case "scale-in":
        return {
          initial: "opacity-0 scale-[0.98] pointer-events-none",
          revealed: "opacity-100 scale-100",
        };
      case "image-reveal":
        return {
          initial: "opacity-0 scale-[1.03] pointer-events-none",
          revealed: "opacity-100 scale-100",
        };
      default:
        return {
          initial: "opacity-0 translate-y-6 pointer-events-none",
          revealed: "opacity-100 translate-y-0",
        };
    }
  };

  const { initial, revealed } = getVariantStyles();

  // Custom durations and delays
  const customDuration = duration || (variant === "image-reveal" ? 850 : 700);
  const transitionStyle: React.CSSProperties = {
    transitionDuration: `${customDuration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const appliedClassNames = `${className} transition-all ${
    hasRevealed ? revealed : initial
  }`;

  return (
    <Component
      ref={elementRef}
      className={appliedClassNames}
      style={transitionStyle}
    >
      {children}
    </Component>
  );
}
