# gs-belajarsaham — Improvement To-Dos

> Audited: 2026-04-27 by Nalacipta
> Updated: 2026-04-28
> Constraint: No wording/content changes — design, layout, flow, and performance only.

---

## ✅ Completed

### P1 — Critical UX
- [x] **D1: Add mobile hamburger nav** — Done (PR #1)
- [x] **F3: Fix `back-top` links** — Done (PR #1)
- [x] **F2: Add Previous/Next navigation on sub-pages** — Done (PR #1)
- [x] **A3: Add Open Graph meta tags** — Done (PR #1)

### P2 — Layout & Flow
- [x] **F1: Surface a learning path on homepage** — Done (PR #2). Added "Langkah demi Langkah" section with grouped timeline.
- [x] **D5: Add visual variety to sub-pages** — Three-tone section alternation (white/cool-gray/warm-cream) + subtle SVG patterns on alternating backgrounds.
- [x] **D8: Add page progress indicator** — Done (PR #2). Progress bar + step count + category badge.
- [x] **D4: Add timeframes to stats** — Done (PR #2). Year ranges added.
- [x] **D9: Unify footers** — Done (PR #1). All 25 pages same 4-column footer.
- [x] **D3: Upgrade top bar into a proper header** — Done (PR #2). Brand logo + title + tagline.
- [x] **A5: Add `<main>` wrapper + skip-to-content link** — Done (PR #1).
- [x] **A1: Fix emoji accessibility** — Done (PR #2). All emoji wrapped in `<span aria-hidden="true">`.
- [x] **D10: Strengthen section alternation** — Three-tone system with SVG patterns. Done.
- [x] **D6: Improve mobile flow box** — Vertical flow arrows with gradient chevrons on mobile. Done.
- [x] **D7: Fix card grid inconsistency** — Standardized: all use `cards-3` where appropriate.
- [x] **C2: Standardize emoji icon class names** — `.icon` → `.card-emoji` across all pages. Done.

### P3 — Performance
- [x] **P2: Optimize Google Fonts loading** — Done (PR #1). `font-display: swap` on all pages.
- [x] **P3: Add favicon** — Done (PR #1). SVG favicon.
- [x] **P4: Minify CSS for production** — Build script `build.sh` added for CSS minification.
- [x] **P6: Add `<link rel="canonical">`** — Done (PR #1).
- [x] **P7: Conditionally load JetBrains Mono** — Only loaded on 3 pages that use `.formula`. Uses `font-display: optional`.
- [x] **P1: OG image** — Converted from SVG to PNG (1200×630) for universal social media support.
- [x] **P5: Preload critical assets** — Added `<link rel="preload">` for CSS on all pages.
- [x] **Font link fix** — Fixed malformed Google Fonts URL on index.html, analisa-fundamental.html, lot-saham.html.

### P4 — Polish & Maintenance
- [x] **F4: Fix inconsistent active nav class** — Done (PR #1).
- [x] **A4: Add Schema.org structured data** — `HowTo` on homepage, `Article` schema on all 24 sub-pages with section/category metadata.
- [x] **F6: Enrich breadcrumbs** — Category links now link to `index.html#anchor` (e.g., `#mulai`, `#ekosistem`, `#infrastruktur`). Added i18n keys `nav.cat*`.
- [x] **C4: Add custom 404.html** — Friendly 404 page with minimal nav and "Kembali ke Beranda" button.
- [x] **Print stylesheet improvements** — Hidden breadcrumbs, lang-switch, and split-cards get clean borders.
- [x] **2 Sumber Keuntungan section redesign** — Dark background + brighter card gradients + colored shadows for readability.

---

## 🔵 Future / Backlog (not in this PR)

- [ ] **C1: Template the repeated HTML** — 25 pages duplicate nav, head, footer. Consider a build step (11ty, Handlebars).
- [ ] **C3: Consolidate thin pages** — `efek.html`, `rups.html`, `sid.html`, `lot-saham.html` are barely a paragraph each. Consider merging.
- [ ] **Dark mode** — `prefers-color-scheme: dark` theme.
- [ ] **Service worker / offline** — For full offline support on GitHub Pages.
- [ ] **Content/wording recommendations** (future, separate PR):
  - Hero subtitle too academic
  - "Kenalan Dulu Yuk" label inconsistency
  - "Deviden" → "Dividen" spelling
  - Investment disclaimers
  - Kamus page usefulness review
- [ ] **Timeline/progress numbering mismatch** — Path shows 17 items but site has 24 pages.