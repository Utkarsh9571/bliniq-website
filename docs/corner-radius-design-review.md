# Corner Radius Design Review — BLINIQ Website

This document provides a design review of the BLINIQ aesthetic and geometry system. Currently, BLINIQ utilizes a sharp, architectural editorial design that reflects its luxury, high-end positioning. 

As part of Phase 21, the corner radius geometry was left strictly unchanged. However, we have reviewed components across the website to identify areas where introducing a highly controlled, subtle radius might enhance the user experience by softening transitions and matching the curves of modern web aesthetics.

## Recommendations for Future Optimization

### 1. Procedure & Grid Cards
- **Current Styling**: Perfectly sharp corners (`rounded-none`).
- **Suggested Change**: Introduce a tiny `rounded-sm` (2px to 4px) or `rounded-md` (6px) corner radius.
- **Design Rationale**: Softening the borders of card panels (e.g., service cards on the homepage or procedures page) will make grids feel less aggressive on high-DPI screens without diluting the structured editorial layouts.

### 2. Video Thumbnails & Lightbox Modals
- **Current Styling**: Strict sharp rectangles.
- **Suggested Change**: Apply a subtle `rounded-lg` (8px) radius to video thumbnails and modal containers.
- **Design Rationale**: Video content and pop-ups are inherently overlay/floating layers. Rounding their boundaries aligns them with standard web expectations for dynamic media overlays, making the overall site feel warmer and more approachable.

### 3. Lead Form Inputs & Textareas
- **Current Styling**: Sharp corners.
- **Suggested Change**: Implement a minimal `rounded-sm` (2px) radius on input borders.
- **Design Rationale**: A tiny roundness on text fields signals high-quality detail work and improves visual focus state styling.

### 4. Interactive Call Popdowns & Small Dropdowns
- **Current Styling**: Mega menus and simple dropdowns have rounded corners, but minor pop-downs remain sharp.
- **Suggested Change**: Harmonize small header pop-down elements to use `rounded-xl` (12px) to match the mega-menu style, providing geometric consistency across navigation elements.

---

*Note: None of these changes have been implemented in this branch. They are documented here for design approval prior to execution in a future phase.*
