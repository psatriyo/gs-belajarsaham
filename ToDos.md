# gs-belajarsaham — Improvement To-Dos

> Audited: 2026-04-27 by Nalacipta
> Constraint: No wording/content changes — design, layout, flow, and performance only.

---

## 🔴 Priority 1 — Critical UX

- [ ] **D1: Add mobile hamburger nav** — The nav has horizontal scroll on mobile (`scrollbar-width: none`) which is a hidden affordance. Users don't know to scroll. Need a hamburger/toggle menu pattern for <768px.
- [ ] **F3: Fix `back-top` links** — All sub-pages use `<a href="#" class="back-top">` which does nothing. Change to `<a href="#top">` and add smooth scroll JS.
- [ ] **F2: Add Previous/Next navigation on sub-pages** — After reading a sub-page, there's no way forward. Add "← Previous | Next →" links at the bottom of every sub-page to create a learning path.
- [ ] **A3: Add Open Graph meta tags** — No `og:title`, `og:description`, `og:image` on any page. When shared on WhatsApp/Telegram (primary Indonesian channels), links show bare URL previews. Add to all 25 pages.

---

## 🟡 Priority 2 — Layout & Flow

- [ ] **F1: Surface a learning path on homepage** — The site has a natural progression (Saham → Emiten → Kode → Lot → ... → Buka Rekening → Analisa Fundamental) but the nav is a flat list. Add a visual numbered journey/learning path section.
- [ ] **D9: Unify footers** — Homepage has a rich 4-column footer with links; sub-pages have a 1-line "Konten diadaptasi dari Galerisaham.com" footer. Jarring disconnect. Standardize across all pages.
- [ ] **D3: Upgrade top bar into a proper header** — Currently a thin navy bar with just text. Add a logo/brand mark + tagline to establish identity.
- [ ] **A5: Add `<main>` wrapper + skip-to-content link** — No `<main>` landmark. Screen readers can't jump to content. Keyboard users tab through 16 nav links first.
- [ ] **A1: Fix emoji accessibility** — Emoji icons (📄, 🏢, etc.) render differently per platform and are read aloud by screen readers. Wrap in `<span aria-hidden="true">` and add visually hidden descriptive text.
- [ ] **D5: Add visual variety to sub-pages** — Longer pages like analisa-fundamental.html (13KB) feel like walls of text. Add section dividers, alternating backgrounds, or visual breaks.
- [ ] **D8: Add page progress indicator** — 25 pages of sequential content with no sense of progress. Add "Step X of Y" or category breadcrumbs.
- [ ] **D4: Add timeframes to stats** — "1.360% dari BBCA" vs "67.2% per tahun dari BBRI" — inconsistent presentation makes stats hard to compare. Add consistent time context to all four stat cards.

---

## 🟡 Priority 3 — Performance

- [ ] **P2: Optimize Google Fonts loading** — Two full families (Inter 6 weights + JetBrains Mono 2 weights) block first paint. Add `font-display: swap`, preload only critical weights (Inter 400/700), defer JetBrains Mono.
- [ ] **P3: Add favicon** — All 25 pages missing `<link rel="icon">`. Browser makes unnecessary 404 request for `/favicon.ico` on every page load.
- [ ] **P4: Minify CSS for production** — 22KB unminified. Could be ~15KB with basic minification.
- [ ] **P6: Add `<link rel="canonical">`** to all pages — Missing canonical URLs. Could cause duplicate content issues with search engines.
- [ ] **P7: Conditionally load JetBrains Mono** — Only used in `.formula` blocks on a few pages, but loaded on all 25 pages. Load only where needed or use `font-display: optional`.

---

## 🟢 Priority 4 — Polish & Maintenance

- [ ] **F4: Fix inconsistent active nav class** — Some sub-pages (investor.html, trader.html) don't have `class="active"` on their nav link. Standardize across all pages.
- [ ] **C2: Standardize emoji icon class names** — Index uses `card-emoji`, sub-pages use `icon` class. Pick one convention and apply everywhere.
- [ ] **D6: Improve mobile flow box** — Transaction flow arrows just rotate 90° on mobile. Redesign for vertical flow with proper down-arrow visual connection.
- [ ] **D7: Fix card grid inconsistency** — Index uses `cards-3` / `cards-4`, sub-pages use bare `cards`. Standardize grid layouts.
- [ ] **D10: Strengthen section alternation** — `section:nth-child(even/odd)` alternates between two near-whites (`#ffffff` vs `#f5f7fa`). Barely perceptible. Increase contrast or use subtle pattern/texture.
- [ ] **A2: Add skip-to-content link** — Keyboard users tab through all 16 nav links before reaching content. Add hidden skip link.
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