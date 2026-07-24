# Phase 21 — Centralized Motion System Documentation

This document describes the technical architecture, behavior, performance optimizations, and accessibility fallbacks implemented during Phase 21 of the BLINIQ website.

## 1. Animation Architecture & Reusable Components

We introduced a lightweight, custom scroll-reveal mechanism built entirely in React and Tailwind CSS v4, avoiding any heavy animation dependencies (such as Framer Motion) to maintain fast load times and keep Next.js static exports performing optimally on shared hosting.

The central orchestration file is located at [ScrollReveal.tsx](file:///c:/Users/lenovo/Desktop/bliniq/blinic-website/components/ui/ScrollReveal.tsx).

### Shared IntersectionObserver Registry
Instead of instantiating independent observer instances for every element on a page, `ScrollReveal` registers element targets inside a centralized cache grouped by threshold:
- Observers are instantiated once per key configuration (`threshold_rootMargin`).
- Targets subscribe to elements on viewport intersection.
- Once a target element triggers its reveal, the component unobserves the element immediately, cleaning up memory and CPU cycles.

---

## 2. Animation Variants

We implemented six standard variants for different editorial and layout contexts:

| Variant | Styling Details | Easing & Duration | Ideal Use Cases |
| :--- | :--- | :--- | :--- |
| `fade-up` | `translate-y-6 sm:translate-y-10` → `translate-y-0` + Opacity 0 → 1 | `700ms` / `cubic-bezier(0.22, 1, 0.36, 1)` | Titles, descriptions, text blocks, cards |
| `fade-down` | `-translate-y-6 sm:-translate-y-10` → `translate-y-0` + Opacity 0 → 1 | `700ms` / `cubic-bezier(0.22, 1, 0.36, 1)` | Dropdowns, menus |
| `fade-left` | `translate-x-4 sm:translate-x-8` → `translate-x-0` + Opacity 0 → 1 | `700ms` / `cubic-bezier(0.22, 1, 0.36, 1)` | Split sections (Right side text or elements) |
| `fade-right` | `-translate-x-4 sm:-translate-x-8` → `translate-x-0` + Opacity 0 → 1 | `700ms` / `cubic-bezier(0.22, 1, 0.36, 1)` | Split sections (Left side text or elements) |
| `scale-in` | `scale-[0.98]` → `scale-100` + Opacity 0 → 1 | `700ms` / `cubic-bezier(0.22, 1, 0.36, 1)` | Grid card reveals |
| `image-reveal` | `scale-[1.03]` → `scale-100` + Opacity 0 → 1 | `850ms` / `cubic-bezier(0.22, 1, 0.36, 1)` | Large photography assets |

---

## 3. Accessibility & Progressive Enhancement

### Progressive Enhancement (No-JS / Hydration FOUC protection)
- To prevent content from remaining permanently hidden if JavaScript fails or does not run, the initial markup renders as fully visible.
- Hiding classes (e.g., `opacity-0`) are only added *after* the client-side component mounts (`isMounted` state switches to `true`).
- Hydration mismatches are prevented because the first client-side render matches the SSR markup, after which state updates transition it smoothly.

### Reduced Motion Fallbacks
- The system checks `window.matchMedia("(prefers-reduced-motion: reduce)")` on mount.
- If matched, all movement (translation, scaling, clipping) and opacity fades are disabled, rendering the element immediately and statically visible.

---

## 4. Performance Considerations
- **No LCP Delay**: The hero elements (above-the-fold titles, credentials, chief surgeon text) are explicitly kept clean of observer-based hiding to prevent any LCP degradation.
- **Card Stagger Delay Cap**: Card lists utilize staggered delays (e.g., `index * 80` ms) but are capped at a maximum of `400ms` so that larger lists do not keep content invisible for too long.
- **Scroll Optimization**: We avoid using continuous window scroll listeners, relying instead on browser-native `IntersectionObserver` triggers.
