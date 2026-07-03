# Product Requirements Document (PRD)
## Param Marketing — Corporate Website

**Status:** Draft v1.0
**Owner:** Satvik (Frontend Lead)
**Build Agent:** Antigravity
**Last Updated:** July 2026

---

## 1. Project Overview

Param Marketing is positioning itself as an IT company and needs a production-ready
marketing website that communicates credibility, technical competence, and a modern
design sensibility — without falling into generic "AI-generated" template patterns
(stock gradient cards, cookie-cutter footers, cliché 3-column feature grids).

The site is a **multi-page** application (not a single scrolling landing page).
Each primary section of the business lives on its own route/page. This keeps the
codebase modular, keeps bundle sizes reasonable per route, and keeps the
information architecture legible to both users and the dev team maintaining it.

---

## 2. Goals

| Goal | Description |
|---|---|
| Credibility | Look like a serious, senior-built IT company site — not a template. |
| Performance | Fast loads, especially on the hero (shader gradient is GPU-heavy — must be optimized/lazy). |
| Maintainability | Clean folder structure, one page = one route = one file, shared components isolated. |
| Distinct visual identity | Custom hero (ShaderGradient), custom footer, custom nav — no reused "AI slop" cards. |
| Conversion | Contact Us page should be the clear conversion funnel end-point from every other page. |

---

## 3. Target Audience

- Prospective B2B clients evaluating Param Marketing as an IT/tech vendor.
- Decision-makers (CTOs, founders, marketing heads) scanning quickly — content
  needs to be scannable, not dense paragraphs.
- Recruits / partners checking legitimacy of the company (About page carries weight here).

---

## 4. Site Map

```
/                → Home
/about           → About
/services        → Services (Product/Service showcase page)
/contact         → Contact Us
```

Only four nav items as specified: **Home, About, Service, Contact Us**.
No dropdowns, no mega-menus — keep nav flat and fast.

---

## 5. Page-Level Requirements

### 5.1 Home (`/`)
- **Hero section** using the `ShaderGradient` `waterPlane` component (exact config
  supplied in `design-strategy.md`). This is the single most important visual
  element on the site — it must render smoothly and degrade gracefully on
  low-power devices (see Non-Functional Requirements).
- Below the fold: a restrained set of sections introducing the company's value
  proposition. No generic "3 feature cards with icons" — see Design Strategy for
  what to avoid.
- Clear CTA into `/services` and `/contact`.

### 5.2 About (`/about`)
- Company story, mission, team (if applicable).
- Should reinforce legitimacy — this is the page skeptical visitors check first.
- No hero shader here — reserve the shader for Home only so it stays a signature
  moment rather than a repeated background.

### 5.3 Services (`/services`)
- This is the **product/service showcase page** — design direction pulled from
  Awwwards' Technology category (structure and interaction quality, not literal
  copying of any single site).
- Each service should be presented with enough detail to stand alone (avoid vague
  one-liners under an icon).
- Should support future expansion (new service without restructuring the page).

### 5.4 Contact Us (`/contact`)
- Primary conversion page.
- Contact form (name, email, company, message at minimum) + direct contact info.
- Form validation client-side; wire to backend/API endpoint (Axios) — actual
  endpoint TBD, stub with a clearly marked placeholder if not yet available.
- Toast confirmation on submit (React Hot Toast) — success and error states.

---

## 6. Global Components

### 6.1 Navigation Bar
- Items: `Home`, `About`, `Service`, `Contact Us`.
- Background/accent tone: `#463B26` (deep bronze/olive-brown).
- Sticky or fixed — decide based on scroll testing, but must not obstruct the
  hero shader on Home.
- Responsive: collapses to a mobile menu below the standard breakpoint (no
  hamburger-menu clichés — keep it consistent with the rest of the design language,
  see Design Strategy).

### 6.2 Footer
- Structural/layout reference: Sarvam.ai and Ambuja Cement's website footers —
  **structure and layout only, not their content or copy.**
- Social media buttons: custom hover-interaction component modeled after the
  Uiverse "modern-mouse" pattern (link in Design Strategy) — reimplemented in
  React, not copy-pasted raw HTML/CSS.
- Explicitly avoid generic "AI slop" footer patterns: no 4-column link-dump with
  a mismatched CTA card bolted on top. Keep it intentional and minimal.

---

## 7. Functional Requirements

- Client-side routing via React Router DOM v7 — each page is a lazy-loaded route.
- Form handling on Contact page with validation and network request via Axios.
- Toast notifications for form feedback (React Hot Toast).
- Icons via Lucide React only (no mixed icon libraries).
- Animations via Framer Motion — used purposefully (page transitions, hero
  entrance, hover states) not decoratively on every element.
- Recharts reserved for any data-driven sections (e.g., stats/metrics on About or
  Services) — do not force a chart in if there's no real data to show.

---

## 8. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Performance | Lighthouse Performance ≥ 85 on Home despite the shader hero. Lazy-load `ShaderGradient`, provide a static fallback poster image for reduced-motion/low-power users. |
| Accessibility | Semantic HTML, keyboard-navigable nav and forms, `prefers-reduced-motion` respected for all Framer Motion animations. |
| SEO | Per-route `<title>` and meta description, semantic heading hierarchy per page. |
| Responsiveness | Mobile-first; hero shader must have a lightweight mobile fallback (full shader on mobile GPUs is often janky). |
| Browser support | Latest 2 versions of Chrome, Firefox, Safari, Edge. |
| Code quality | ESLint clean, no console warnings in production build. |

---

## 9. Out of Scope (v1)

- CMS integration (content is hardcoded/static for v1).
- Multi-language support.
- Blog/insights section (flag as a likely v2 addition, don't architect against it
  but don't build it now).

---

## 10. Success Metrics

- Home hero loads and animates within acceptable frame budget on mid-range mobile.
- Contact form submissions successfully reach the configured endpoint with
  toast-confirmed delivery.
- Zero layout shift complaints across the 4 pages on first review pass.
