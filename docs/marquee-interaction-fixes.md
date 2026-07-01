# BLINIQ Website — Marquee Interaction & Social Feed Report

This document details the restoration of the "Patient Transformations" Instagram feed and the optimization of row-level interactive controls for both testimonials and transformation marquees.

---

## 1. Restoration of Transformations Feed
* **Section Restored**: Rebuilt `components/home/TransformationsFeed.tsx` to render the infinite-looping two-row **"Patient Transformations"** social media/Instagram highlight cards.
* **Opposite Direction Movement**:
  * **Row 1**: Leftward scrolling (`animate-transform-left`)
  * **Row 2**: Rightward scrolling (`animate-transform-right`)
* **Hifi Post Lightbox Modals**: Clicking any social card opens a glass modal detailing the procedure name, the full description/caption, media preview, and an external CTA link to the official BLINIQ Instagram account.

---

## 2. Row-Level Marquee Pause Isolation
To prevent the parent container hover from pausing all scrolling tracks simultaneously:
* **State Separation**:
  * **Testimonials Preview**: Managed by `row1Paused` and `row2Paused` boolean hooks.
  * **Transformations Feed**: Managed by `row1Paused` and `row2Paused` boolean hooks.
* **Control Binding**:
  * **Row 1**: Listens to mouse/touch events (`onMouseEnter`, `onMouseLeave`, `onTouchStart`, `onTouchEnd`) to pause and play ONLY Row 1.
  * **Row 2**: Listens to mouse/touch events to pause and play ONLY Row 2.
* **Modal Overlay Isolation**: When a modal opens, only the row containing the clicked card is paused. Closing the modal resumes that specific row automatically.

---

## 3. Smooth Resume Behavior
* **No Snapping**: Controls are executed via toggling a `.paused` (or `.paused-state`) CSS helper class that modifies `animation-play-state: paused`.
* **Smooth Transitions**: Toggling the hover state preserves the exact position of translation instead of resetting or snapping back to 0%.

---

## 4. Mobile & Touch Verification
* **Independent Row Tap**: Tapping and scrolling one track on mobile devices leaves the other track moving continuously.
* **Modal Pause/Resume**: Open/close modal triggers have been fully tested to pause/resume only the target row, ensuring a premium interactive experience.
