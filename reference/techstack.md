# Tech Stack & Project Structure
## Param Marketing — Corporate Website

**Companion to:** `PRD.md`, `design-strategy.md`
**Build Agent:** Antigravity

---

## 1. Core Stack

| Layer | Choice |
|---|---|
| Core library | React v19 |
| Routing | React Router DOM v7 |
| Build tool | Vite v8 |
| Styling | Tailwind CSS v4 + PostCSS + Autoprefixer |
| Icons | Lucide React |
| Animation | Framer Motion |
| Data visualization | Recharts (only where real data exists) |
| Notifications | React Hot Toast |
| Networking | Axios |
| Testing | Vitest + React Testing Library + Jest DOM |
| Linting | ESLint |
| Fonts | Inter (via `@fontsource/inter`, self-hosted) |
| 3D / Shader hero | `shadergradient` (React) — used on Home hero only |

---

## 2. Guiding Principle

**One page = one route = one file. Sections stay isolated. Nothing shared gets
duplicated.** The goal is that any developer joining the project can open the
`pages/` folder, immediately identify which file maps to which live URL, and
never have to hunt across multiple files to understand a single page.

---

## 3. Folder Structure

```
param-marketing/
├── public/
│   ├── favicon.svg
│   └── fallback/
│       └── hero-poster.webp        # static fallback for the shader hero
│
├── src/
│   ├── main.jsx                    # app entry, router mount
│   ├── App.jsx                     # route definitions only — no page logic here
│   ├── index.css                   # Tailwind entry + Inter font-face + CSS vars
│   │
│   ├── pages/                      # one file per route — matches PRD site map
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageWrapper.jsx     # shared page transition wrapper (Framer Motion)
│   │   │
│   │   ├── home/
│   │   │   ├── HeroShader.jsx      # ShaderGradient wrapper + reduced-motion fallback
│   │   │   └── ValueProposition.jsx
│   │   │
│   │   ├── services/
│   │   │   └── ServiceEntry.jsx    # single reusable "one service" block
│   │   │
│   │   ├── contact/
│   │   │   └── ContactForm.jsx
│   │   │
│   │   └── shared/
│   │       ├── SocialIcon.jsx      # "modern-mouse" style hover icon
│   │       └── Button.jsx
│   │
│   ├── hooks/
│   │   ├── useReducedMotion.js
│   │   └── useContactForm.js
│   │
│   ├── lib/
│   │   ├── api.js                  # Axios instance + Contact endpoint call
│   │   └── constants.js            # nav items, social links, brand color tokens
│   │
│   ├── styles/
│   │   └── theme.css               # Tailwind @theme tokens (brand colors, Inter)
│   │
│   └── test/
│       ├── setup.js
│       ├── Navbar.test.jsx
│       ├── Footer.test.jsx
│       └── ContactForm.test.jsx
│
├── .eslintrc.cjs
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

### Why this shape
- **`pages/` mirrors the site map 1:1** — anyone can match a URL from the PRD to
  a file instantly.
- **`components/` is namespaced by page** (`home/`, `services/`, `contact/`) with
  a `shared/` bucket only for things genuinely reused across ≥2 pages (nav,
  footer, buttons, the social icon). This stops the common failure mode of
  everything piling into one flat `components/` folder.
- **`lib/constants.js`** is the single source of truth for nav labels, social
  links, and brand color tokens — so updating a link or color never means
  hunting through JSX.
- **`hooks/`** isolates the reduced-motion check and the contact form logic so
  `Contact.jsx` and `HeroShader.jsx` stay thin and readable.

---

## 4. Routing (`App.jsx`)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
```

Lazy-loading every page keeps the Home bundle (which already carries the
shader) from being weighed down by Contact-form or Services-page code the
visitor doesn't need yet.

---

## 5. Styling Conventions

- Tailwind v4 with CSS-based `@theme` config in `styles/theme.css` — brand
  colors (`#463B26`, `#BE8C53`, `#Dbba95`) defined once as tokens
  (`--color-brand-dark`, `--color-brand-mid`, `--color-brand-light`) and
  referenced everywhere via Tailwind utility classes, never hardcoded hex
  values inline in components.
- Inter loaded once in `index.css`, set as the `font-sans` default in the
  Tailwind theme so no component needs to specify a font family manually.

---

## 6. Code Quality Rules

- ESLint must run clean before merge — no disabled rules without a comment
  explaining why.
- No inline hex colors in JSX — always through Tailwind theme tokens.
- No component file over ~200 lines — if a page file grows past that, extract
  a new component into the relevant page-namespaced folder.
- Every shared component (`components/shared/`) needs a corresponding test in
  `src/test/`.
- Commit messages and PRs reference which page/section they touch (e.g.
  `feat(contact): wire form submission to Axios endpoint`) so history stays
  traceable per-page, matching the "every section on its own page" structure.

---

## 7. Testing

- Vitest + React Testing Library + Jest DOM.
- Minimum coverage target: Navbar, Footer, ContactForm, and the `useReducedMotion`
  hook (since it gates the hero shader's accessibility fallback).
- Run `npm run test` in CI before any deploy.

---

## 8. Build & Deploy Notes

- `vite build` output should be verified against the PRD's Lighthouse
  Performance ≥ 85 target on the Home route specifically (heaviest page due to
  the shader).
- Confirm the `hero-poster.webp` fallback renders correctly with JS/animation
  disabled before shipping.
