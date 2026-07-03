# Design Strategy
## Param Marketing — Corporate Website

**Companion to:** `PRD.md`, `techstack.md`

---

## 1. Design Philosophy

The direction is **premium, restrained, motion-forward IT-company aesthetic** —
closer to a high-end studio site than a stock SaaS template. The single biggest
risk to avoid is what the brief calls "AI slop": generic glassmorphic cards,
identical 3/4-column icon-grid feature sections, and footers that are just a
link-dump with a CTA card slapped on top. Every section should feel deliberately
composed, not assembled from a component-library default.

**Rule of thumb:** if a section could be swapped into any other SaaS site without
anyone noticing, it needs to be redesigned.

---

## 2. Reference Library

These are **inspiration references only** — structure, interaction quality, and
motion language should be studied and reinterpreted in our own component code.
Nothing is to be scraped or copy-pasted verbatim (markup, CSS, or assets).

| Reference | Used For |
|---|---|
| sarvam.ai | Footer structure/layout (not content) |
| ambujacement.com (Ambuja Cement) | Footer structure/layout (not content) |
| awwwards.com — Technology category | Overall interaction/showcase quality benchmark for the Services page |
| uiverse.io — "modern-mouse" (Itskrish01) | Interaction pattern for footer social icons — cursor-follow / mouse-reactive hover |
| lucion.co | General visual/design benchmark |
| getdesign.md | General visual/design benchmark |
| mindsparklemag.com | Component and layout inspiration |
| reactbits.dev | React component patterns/animations to reimplement, not import wholesale |
| motionsite.ai | Overall site motion/interaction benchmark |
| tasteskill.dev | Craft/taste calibration reference |
| github.com/pbakaus/impeccable | Motion & interaction principles reference |
| github.com/kylezantos/design-motion-principles | Motion & interaction principles reference |

**How to use these:** before building a section, look at 2–3 of the above for how
they handle spacing, motion easing, and hierarchy — then design our own version
in code that fits the Param Marketing palette and content. Do not import their
CSS or component code directly.

---

## 3. Typography

- **Font family:** Inter, applied globally.
- Load via `@fontsource/inter` (self-hosted) rather than a Google Fonts CDN call,
  for performance and to avoid a render-blocking external request.
- Use Inter's variable weight range — lean on 400/500 for body copy, 600/700 for
  headings. Avoid over-using bold; let spacing and scale do the hierarchy work.

---

## 4. Color System

### 4.1 Navigation
- Primary nav background/accent: **`#463B26`** (deep bronze-brown).
- Treat this as the anchor "brand dark" tone — pull tints/shades from it for
  secondary UI elements (borders, muted text on light backgrounds) rather than
  introducing unrelated colors.

### 4.2 Hero (Home page only)
The hero uses a `ShaderGradient` `waterPlane` shader with this exact configuration:

```jsx
<ShaderGradient
  animate="on"
  axesHelper="off"
  brightness={1.3}
  cAzimuthAngle={180}
  cDistance={3.6}
  cPolarAngle={90}
  cameraZoom={1}
  color1="#BE8C53"
  color2="#Dbba95"
  color3="#463B26"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="off"
  lightType="3d"
  pixelDensity={0.1}
  positionX={-1.4}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={0}
  rotationY={10}
  rotationZ={50}
  shader="defaults"
  type="waterPlane"
  uAmplitude={1}
  uDensity={0.4}
  uFrequency={5.5}
  uSpeed={0.4}
  uStrength={1}
  uTime={0}
  wireframe={false}
/>
```

This gives a warm bronze/sand/olive gradient family:

| Token | Hex | Role |
|---|---|---|
| `--color-brand-light` | `#Dbba95` | Lightest accent, highlights on the gradient |
| `--color-brand-mid` | `#BE8C53` | Primary warm accent |
| `--color-brand-dark` | `#463B26` | Nav background, deep accent, text-on-light |

Keep the rest of the site (About, Services, Contact) built on a **neutral base**
(off-white / near-black text) with `#463B26` and `#BE8C53` used sparingly as
accent — not repeated as a full-bleed background on every page. The shader is a
**signature Home-page moment**, not a site-wide wallpaper.

### 4.3 Performance note on the hero
`format="gif"` and `pixelDensity={0.1}` in the supplied config are deliberately
light-weight settings — keep them as-is rather than "improving" resolution, since
that directly trades away load performance. Provide a static poster/fallback
image matching this gradient for `prefers-reduced-motion` and low-end devices.

---

## 5. Navigation Bar Design

- Four items only: `Home`, `About`, `Service`, `Contact Us` — resist the urge to
  add a dropdown or mega-menu.
- Background/accent uses `#463B26`.
- On mobile, avoid the generic hamburger-icon-into-full-screen-overlay pattern if
  possible — consider a slide-in panel or an inline expand that stays consistent
  with the site's restrained motion language (reference: motionsite.ai,
  design-motion-principles repo).

---

## 6. Footer Design

- Layout/structure inspiration: Sarvam.ai and Ambuja Cement — study their column
  balance, whitespace, and how they close out the page, not their literal content.
- Social media icons: interactive "modern-mouse" style hover (cursor-reactive
  micro-animation), reimplemented as a small custom React component using
  Framer Motion — not the raw Uiverse CSS/HTML.
- **Explicitly avoid:** the generic footer pattern of a big rounded "Let's talk"
  CTA card sitting on top of a 4-column link grid with a newsletter input. If the
  footer needs a CTA, integrate it more deliberately rather than defaulting to
  that template.

---

## 7. Services / Product Page Design

- Benchmark: Awwwards Technology category — specifically the *quality bar* of
  interaction and transition design, not any single site's layout to be copied.
- Each service/product entry should get real visual weight (not a tiny icon +
  one-line card). Consider full-bleed sections per service with scroll-triggered
  reveals (Framer Motion), rather than a repeating grid of identical cards.

---

## 8. Motion Language

- Reference repos: `pbakaus/impeccable` and `kylezantos/design-motion-principles`
  for easing curves, timing, and restraint principles — motion should clarify
  hierarchy and guide attention, not decorate every element.
- Use Framer Motion `layout` animations and scroll-triggered reveals sparingly;
  overusing entrance animations on every card is itself a common "AI slop" tell.
- Respect `prefers-reduced-motion` globally — disable non-essential motion, keep
  functional transitions (route changes, form feedback) minimal and fast.

---

## 9. Explicit Anti-Patterns ("AI Slop") to Avoid

- Generic glassmorphism cards with a soft gradient border on every section.
- Identical icon-in-circle + heading + one-line description, repeated 3–4 times.
- Footers with a giant rounded CTA card bolted above a link grid.
- Overuse of the same easing/entrance animation on literally every element on
  scroll (fade-up-on-everything).
- Stock illustration packs that don't match the brand's material/tone.
- Full-bleed color gradients used as a page background on every page instead of
  restrained accent use.
