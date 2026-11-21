# design-tokens.md — Three-Layer Token Architecture

Following the **UI/UX Pro Max — Design System** three-layer architecture (`Primitive -> Semantic -> Component`), all visual values in Intent Studios are defined as CSS custom properties in `src/app/globals.css` and consumed via Tailwind CSS v4 `@theme inline`.

---

## Layer 1 — Primitive Tokens (Raw Brand Values)

```css
:root {
  /* Brand Palette Primitives */
  --primitive-black: #000000;
  --primitive-obsidian: #0A0A0A;
  --primitive-charcoal: #111111;
  --primitive-graphite: #1A1A1A;
  --primitive-warm-dark-0: #080504;
  --primitive-warm-dark-1: #1F100B;
  --primitive-orange-500: #F24E1E;
  --primitive-orange-600: #D94114;
  --primitive-peach-200: #FFD1C2;
  --primitive-offwhite: #F5F5F5;
  --primitive-stone-400: #A0A0A0;
  --primitive-stone-500: #737373;
  --primitive-alabaster: #F7F4F1;
  --primitive-alabaster-card: #FFFFFF;
  --primitive-ink-secondary: #52504C;

  /* Spacing Scale (4px base) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;
  --radius-pill: 9999px;

  /* Motion */
  --ease-intent: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 180ms;
  --duration-base: 280ms;
  --duration-slow: 520ms;
}
```

---

## Layer 2 — Semantic Tokens (Purpose Aliases)

```css
:root {
  /* Surfaces */
  --color-bg-global: var(--primitive-black);
  --color-bg-section: var(--primitive-charcoal);
  --color-bg-card: var(--primitive-obsidian);
  --color-bg-elevated: var(--primitive-graphite);
  --color-bg-light: var(--primitive-alabaster);
  --color-bg-light-card: var(--primitive-alabaster-card);

  /* Brand Accents */
  --color-accent: var(--primitive-orange-500);
  --color-accent-hover: var(--primitive-orange-600);
  --color-accent-soft: var(--primitive-peach-200);
  --color-accent-tint: rgba(242, 78, 30, 0.10);

  /* Typography */
  --color-text-primary: var(--primitive-offwhite);
  --color-text-secondary: var(--primitive-stone-400);
  --color-text-muted: var(--primitive-stone-500);
  --color-text-on-light: var(--primitive-charcoal);
  --color-text-on-light-secondary: var(--primitive-ink-secondary);

  /* Borders */
  --color-border-dark: rgba(255, 255, 255, 0.09);
  --color-border-dark-strong: rgba(255, 255, 255, 0.18);
  --color-border-light: rgba(17, 17, 17, 0.10);
  --color-border-accent: rgba(242, 78, 30, 0.35);

  /* Focus */
  --color-focus-ring: var(--primitive-orange-500);
}
```

---

## Layer 3 — Component Tokens

```css
:root {
  /* Buttons */
  --btn-primary-bg: var(--color-accent);
  --btn-primary-fg: #FFFFFF;
  --btn-primary-hover: var(--color-accent-hover);
  --btn-secondary-bg: rgba(255, 255, 255, 0.06);
  --btn-secondary-fg: var(--color-text-primary);
  --btn-secondary-border: var(--color-border-dark-strong);
  --btn-radius: var(--radius-pill);

  /* Cards */
  --card-dark-bg: var(--color-bg-card);
  --card-dark-border: var(--color-border-dark);
  --card-light-bg: var(--color-bg-light-card);
  --card-light-border: var(--color-border-light);
  --card-radius: var(--radius-lg);

  /* Layout */
  --container-max: 1280px;
  --header-height: 76px;
}
```
