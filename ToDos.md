# gs-belajarsaham — Improvement To-Dos

> Audited: 2026-04-27 by Nalacipta
> Constraint: No wording/content changes — design, layout, flow, and performance only.

---

## 🔴 P1 — Critical UX

- [x] **D1: Add mobile hamburger nav** — Done (PR #1)
- [x] **F3: Fix `back-top` links** — Done (PR #1)
- [x] **F2: Add Previous/Next navigation on sub-pages** — Done (PR #1)
- [x] **A3: Add Open Graph meta tags** — Done (PR #1)

---

## 🟡 P2 — Layout & Flow

- [x] **F1: Surface a learning path on homepage** — Done (PR #2). Added "Langkah demi Langkah" section with grouped timeline: Dasar Saham → Ekosistem → Infrastruktur → Keuntungan & Analisa
- [ ] **D5: Add visual variety to sub-pages** — Partially done. Added section dividers via CSS (`border-top`). Could further enhance with alternating background patterns or decorative elements.
- [x] **D8: Add page progress indicator** — Done (PR #2). Added progress bar + "Langkah X dari 24" + category badge on all sub-pages.
- [x] **D4: Add timeframes to stats** — Done (PR #2). Added year ranges: BBCA (2000–2024), UNVR (1997–2018), MAPI (2003–2024), BBRI (2003–2024).
- [x] **D9: Unify footers** — Done (PR #1). All 25 pages now have the same 4-column footer.
- [x] **D3: Upgrade top bar into a proper header** — Done (PR #2). Brand logo + title + tagline. Responsive — tagline hides on mobile.
- [x] **A5: Add `<main>` wrapper + skip-to-content link** — Done (PR #1).
- [x] **A1: Fix emoji accessibility** — Done (PR #2). All emoji icons wrapped in `<span aria-hidden="true">`.

---

## 🟡 P3 — Performance

- [x] **P2: Optimize Google Fonts loading** — Done (PR #1). Added `font-display: swap`.
- [x] **P3: Add favicon** — Done (PR #1). SVG favicon.
- [ ] **P4: Minify CSS for production** — 22KB unminified. Could be ~15KB with basic minification.
- [x] **P6: Add `<link rel="canonical">`** to all pages — Done (PR #1).
- [ ] **P7: Conditionally load JetBrains Mono** — Only used in `.formula` blocks on a few pages, but loaded on all 25 pages. Load only where needed or use `font-display: optional`.

---

## 🟢 P4 — Polish & Maintenance

- [x] **F4: Fix inconsistent active nav class** — Done (PR #1).
- [ ] **C2: Standardize emoji icon class names** — Index uses `card-emoji`, sub-pages use `icon` class. Pick one convention and apply everywhere.
- [ ] **D6: Improve mobile flow box** — Transaction flow arrows just rotate 90° on mobile. Redesign for vertical flow with proper down-arrow visual connection.
- [ ] **D7: Fix card grid inconsistency** — Index uses `cards-3` / `cards-4`, sub-pages use bare `cards`. Standardize grid layouts.
- [ ] **D10: Strengthen section alternation** — `section:nth-child(even/odd)` alternates between two near-whites (`#ffffff` vs `#f5f7fa`). Barely perceptible. Increase contrast or use subtle pattern/texture.
- [ ] **A2: Add skip-to-content link** — Done (PR #1).
- [ ] **A4: Add Schema.org structured data** — Educational site could use `Course` or `HowTo` schema for Google rich snippets.
- [ ] **C1: Template the repeated HTML** — 25 pages duplicate nav, head, and footer. Consider a simple build step (e.g., Handlebars, 11ty, or even a bash script) to avoid editing 25 files for every change.
- [ ] **C3: Evaluate consolidating thin pages** — `efek.html` (2.6KB), `rups.html` (2.6KB), `sid.html` (3.2KB), `lot-saham.html` (3.3KB) are barely a paragraph each. Consider merging into a combined "Istilah Dasar" page.
- [ ] **C4: Add custom 404.html** — No custom error page for the GitHub Pages deployment.
- [ ] **F6: Enrich breadcrumbs** — Currently only "Beranda › Page Name". Add category depth (e.g., "Beranda › Keuntungan › Capital Gain").

---

## ✅ Already Good

- ✅ `<html lang="id">` correctly set to Indonesian
- ✅ Responsive breakpoints exist (900px, 768px, 480px)
- ✅ `prefers-reduced-motion` media query present
- ✅ Print stylesheet included
- ✅ Sticky nav with smooth scroll target
- ✅ Consistent color system via CSS custom properties
- ✅ Clean, readable CSS architecture with logical sections