---
name: SBS-Quantum
description: Enterprise engineering systems that scale to millions of requests. No legacy code. No architectural compromises.
colors:
  primary: "#BE8C53"
  secondary: "#DBBA95"
  neutral-bg: "#ffffff"
  neutral-surface: "#fafafa"
  ink: "#111111"
typography:
  display:
    fontFamily: "\"Space Grotesk\", var(--font-sans)"
    fontWeight: 700
    letterSpacing: "-0.04em"
  body:
    fontFamily: "\"Inter\", ui-sans-serif, system-ui, sans-serif"
    fontWeight: 500
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
---

# Design System: SBS-Quantum

## 1. Overview

**Creative North Star: "The Brutalist Enterprise"**

SBS-Quantum combines raw, high-performance engineering with an elegant, almost magazine-warm visual identity. It balances terminal-native dark mode aesthetics with a pristine, high-contrast light mode. The system is designed to convey absolute technical authority—no out-of-the-box limitations, no generic templates. It explicitly rejects SaaS-cream tropes and cliché "tech blue" colors, opting instead for a mature Gold/Brown palette on pure black/white canvases.

**Key Characteristics:**
- Hardware-accelerated GSAP motion and magnetic typography.
- High-contrast typography (Space Grotesk for display, Inter for body).
- Explicit adherence to UX Laws (Von Restorff, Zeigarnik, Peak-End Rule).
- Sub-100ms interaction models.

## 2. Colors

The palette is highly restrained, leveraging deep contrast and deliberate gold accents to convey premium engineering.

### Primary
- **Mid Gold** (`#BE8C53`): Used for secondary text, accents, glowing effects (AtomLoader), and key highlights (e.g., "Engineering.").

### Secondary
- **Light Gold** (`#DBBA95`): Used for hover states, subtle gradient backgrounds, and softer accents.

### Neutral
- **Quantum Ink** (`#111111`): The primary display text color in Light Mode. It provides stark, absolute contrast against white backgrounds.
- **Pure White** (`#ffffff`): The primary background color in Light Mode, and the primary text color in Dark Mode.
- **Terminal Black** (`#050505`): The absolute background for the Dark Mode, giving the terminal components a raw, matrix-like feel.

### Named Rules
**The One Voice Rule.** The primary gold accent is used sparingly. Its rarity is the point. We do not use gradient text. Emphasis is achieved via contrast and weight.

## 3. Typography

**Display Font:** Space Grotesk
**Body Font:** Inter

**Character:** Technical precision meets editorial restraint. Space Grotesk provides a geometric, slightly brutalist edge for massive headings, while Inter ensures perfect legibility for dense technical copy.

### Hierarchy
- **Display** (Bold, `clamp(3rem, 8vw, 8rem)`, `-0.04em` tracking): Used exclusively for hero headings (e.g., "Quantum Engineering.").
- **Headline** (Bold, `text-4xl` to `text-6xl`): Used for section headers ("The SBS Advantage").
- **Body** (Medium, `text-lg` to `text-xl`, relaxed line-height): Used for descriptive copy.

### Named Rules
**The Tight Display Rule.** Display headings must have letter-spacing of at least `-0.04em`. Anything looser dilutes the brutalist, engineered feel.

## 4. Elevation

SBS-Quantum uses a hybrid approach: flat by default, with shadows acting strictly as a response to state (hover) or spatial hierarchy (floating terminals).

### Shadow Vocabulary
- **Ambient Glow** (`box-shadow: 0 0 50px rgba(212,175,55,0.05)`): Used behind interactive components in dark mode to simulate hardware LEDs.
- **Magnetic Shadow** (`box-shadow: 0 20px 40px -15px rgba(190,140,83,0.5)`): Applied to primary CTA buttons on hover for a dramatic lift.

## 5. Components

### HoverRevealList (Services)
- **Style:** Clean typography rows that transform on hover.
- **Behavior:** Reveals an absolute-positioned image/video that follows the cursor using Framer Motion. The text shifts right and fades to the accent color.

### FloatingTerminals (Technologies)
- **Style:** macOS-style terminal windows with glassmorphism backgrounds.
- **Behavior:** fully draggable via Framer Motion's `drag` prop. They stack dynamically based on user interaction to simulate a real desktop environment.

### Magnetic Hero Buttons
- **Shape:** Full pill (`rounded-full`).
- **Primary:** Quantum Ink background with white text (Light Mode).
- **Hover:** The button magnetically pulls toward the cursor, accompanied by an expanding background transition (`ease-out-quart`).

## 6. Do's and Don'ts

### Do:
- **Do** use `prefers-reduced-motion` fallbacks for all GSAP and Framer Motion animations.
- **Do** ensure all display headings are wrapped in `text-wrap: balance`.
- **Do** maintain a 4.5:1 contrast ratio for all body copy.

### Don't:
- **Don't** use `border-left` greater than 1px as a colored stripe on cards.
- **Don't** use generic glassmorphism as a default background for layout sections. It is reserved exclusively for interactive elements like the Floating Terminals.
- **Don't** use gradient text (`background-clip: text`). We use solid colors to maintain the brutalist aesthetic.
