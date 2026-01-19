# Get Figured Design System

**Version:** 2.0  
**Last Updated:** January 2026  
**Design Philosophy:** Impeccable.style - Professional, polished, and distinctive

---

## Overview

Get Figured has been redesigned from a brutalist aesthetic to a refined, professional design system that emphasizes:
- **Clear visual hierarchy** through typography and spacing
- **Generous whitespace** for better readability and focus
- **Subtle interactions** that feel polished without being distracting
- **Professional color palette** that stands out from generic blue SaaS tools
- **Consistent spacing** using an 8pt grid system

---

## Color Palette

### Primary Colors
```css
--color-primary: #2E45D9        /* Rich indigo (main brand color) */
--color-primary-dark: #1E2F9C   /* Darker shade for hover states */
--color-primary-light: #E8ECFB  /* Light tint for backgrounds */
```

**Usage:**
- Primary: CTAs, links, active states, key numbers
- Primary Dark: Button hover states, active navigation
- Primary Light: Subtle backgrounds, icon containers

### Accent Colors
```css
--color-accent: #0EA5E9         /* Bright cyan for highlights */
--color-success: #10B981        /* Positive results, success states */
--color-warning: #F59E0B        /* Warnings, important notes */
```

### Text Colors
```css
--color-text-primary: #0F172A    /* Main text (slate-900) */
--color-text-secondary: #475569  /* Supporting text (slate-600) */
--color-text-tertiary: #94A3B8   /* Labels, meta text (slate-400) */
```

**Never use pure black (#000000)** - always use slate-900 for text.

### Background Colors
```css
--color-bg-primary: #FFFFFF      /* Main background */
--color-bg-secondary: #F8FAFC    /* Subtle gray (slate-50) */
--color-bg-tertiary: #F1F5F9     /* Slightly darker (slate-100) */
```

---

## Typography

### Font Families

**Display Font (Headings):**
- Space Grotesk (500, 600, 700 weights)
- Use only for H1 elements
- Variable: `--font-display`

**Body Font:**
- Inter (all weights)
- Use for all other text
- Variable: `--font-inter`

**Monospace (Numbers):**
- JetBrains Mono
- Use for calculator results, numeric inputs
- Always apply `tabular-nums` class

### Type Scale

```typescript
H1 (Hero): 
  - Font: Space Grotesk
  - Size: 56px (3.5rem) on desktop, 40px (2.5rem) on mobile
  - Weight: 700 (bold)
  - Letter-spacing: -0.02em
  - Line-height: 1.1

H2 (Section):
  - Font: Inter
  - Size: 32px (2rem)
  - Weight: 600 (semibold)
  - Letter-spacing: -0.01em
  - Line-height: 1.2

H3 (Subsection):
  - Font: Inter
  - Size: 24px (1.5rem)
  - Weight: 600 (semibold)
  - Letter-spacing: normal
  - Line-height: 1.3

Body:
  - Font: Inter
  - Size: 18px (1.125rem)
  - Weight: 400 (regular)
  - Line-height: 1.6

Small:
  - Size: 14px (0.875rem)
  - Weight: 400
  - Line-height: 1.5

Numbers (Results):
  - Font: JetBrains Mono
  - Size: 32px (2rem) for primary, 24px (1.5rem) for secondary
  - Weight: 600 (semibold)
  - Apply: tabular-nums
```

---

## Spacing System (8pt Grid)

```css
--space-1: 0.5rem;   /* 8px  - Tiny gaps */
--space-2: 1rem;     /* 16px - Small gaps */
--space-3: 1.5rem;   /* 24px - Medium gaps, between form fields */
--space-4: 2rem;     /* 32px - Large gaps, card padding */
--space-5: 3rem;     /* 48px - Section spacing */
--space-6: 4rem;     /* 64px - Large section spacing */
--space-8: 6rem;     /* 96px - Major section breaks */
--space-10: 8rem;    /* 128px - Hero section padding */
```

### Application Rules

**Form Fields:**
- Gap between fields: `space-3` (24px)
- Input padding: `py-4 px-5` (16px vertical, 20px horizontal)

**Cards:**
- Padding: `space-4` to `space-6` (32-64px)
- Gap in grid: `space-4` to `space-6` (32-48px)

**Sections:**
- Section padding: `space-6` to `space-8` (64-96px)
- Between sections: `space-8` (96px)

---

## Components

### Buttons

**Primary Button:**
```tsx
<Button variant="primary" size="md">
  Label
</Button>
```

**Styles:**
- Background: Primary color
- Padding: 14px 32px (md), 12px 24px (sm), 16px 40px (lg)
- Border-radius: 10px (rounded-lg)
- Shadow: Subtle button shadow
- Hover: Darkens + lifts 1px + shadow increase
- Font: 16px, 600 weight

**Secondary Button:**
- Background: White
- Border: 2px solid slate-200
- Hover: Border changes to slate-300, background to slate-50

**Ghost Button:**
- No background
- Text color: text-secondary
- Hover: Background slate-100

### Input Fields

**Currency Input:**
```tsx
<CurrencyInput
  label="Label"
  value={value}
  onChange={setValue}
  helper="Helper text"
/>
```

**Styles:**
- Border: 2px solid slate-200
- Border-radius: 12px (rounded-xl)
- Padding: 16px 20px
- Font: JetBrains Mono for numbers
- Focus: Border changes to primary, subtle shadow
- Hover: Border changes to slate-300
- $ symbol positioned absolute left

**Number Input:**
- Same as currency but with optional suffix on right
- Use `inputMode="numeric"` for mobile

**Percent Input:**
- Same as number but with % symbol on right
- Fixed to 0-100 range by default

### Result Cards

**Primary Result Card:**
```tsx
<ResultCard
  label="Label"
  value="$120.00"
  subtitle="Helper text"
  variant="primary"
/>
```

**Styles:**
- Gradient background: `from-blue-50 to-indigo-50`
- Border: 2px solid primary
- Border-radius: 16px (rounded-xl)
- Padding: 24px
- Shadow: Primary shadow
- Large number: 32px (2rem)

**Default Result Card:**
- Background: White
- Border: 1px solid slate-200
- Hover: Border slate-300, shadow increases
- Number: 24px (1.5rem)

**Secondary Result Card:**
- Gradient: `from-slate-50 to-slate-100`
- Border: slate-200
- Use for supplementary information

### Callout Boxes

**Info Callout:**
```tsx
<Callout variant="info">
  Content here
</Callout>
```

**Tip Callout (💡):**
- Background: blue-50
- Border-left: 4px primary
- Icon: 💡
- Use for pro tips

**Warning Callout (⚠️):**
- Background: amber-50
- Border-left: 4px amber-400
- Icon: ⚠️
- Use for common mistakes

**Success Callout (✓):**
- Background: emerald-50
- Border-left: 4px success
- Icon: ✓
- Use for best practices

---

## Layout Guidelines

### Homepage

**Hero Section:**
- Background: Gradient from bg-secondary to white
- Padding: 128px top/bottom (desktop), 80px (mobile)
- Content max-width: 800px, centered
- H1 uses display font

**Calculator Grid:**
- 3 columns on desktop (>1024px)
- 2 columns on tablet (640-1024px)
- 1 column on mobile (<640px)
- Gap: 24px

**Feature Cards:**
- 3 columns
- Equal height
- Icon in colored circle (primary-light background)
- Padding: 40px

### Calculator Pages

**Desktop Layout (>1024px):**
```
┌─────────────────────────────────────┐
│  Header (white bg, border-bottom)   │
├─────────────────────────────────────┤
│  Hero (title + intro, max-w-5xl)    │
├─────────────────────────────────────┤
│  ┌──────────────┬──────────────┐   │
│  │   INPUTS     │   OUTPUTS    │   │
│  │   600px      │   flex-1     │   │
│  └──────────────┴──────────────┘   │
│       48px gap between               │
├─────────────────────────────────────┤
│  Content (white bg, max-w-4xl)      │
└─────────────────────────────────────┘
```

**Mobile Layout (<768px):**
- Single column
- Inputs full-width
- Results full-width below inputs
- Sticky results not applicable

**Key Decisions:**
- Inputs fixed width (600px) on desktop for readability
- Results column flexible, can be sticky on scroll
- White card backgrounds on gray page background
- Educational content has white background section

---

## Shadows

```css
/* Subtle shadows for depth */
shadow-sm: 0 1px 2px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)
shadow-md: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)
shadow-lg: 0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)

/* Primary color shadows */
shadow-primary: 0 4px 6px rgba(46,69,217,0.08), 0 2px 4px rgba(46,69,217,0.06)

/* Focus shadow */
shadow-focus: 0 0 0 3px rgba(46,69,217,0.1)

/* Button shadows */
shadow-button: 0 1px 2px rgba(0,0,0,0.05), 0 1px 3px rgba(46,69,217,0.2)
shadow-button-hover: 0 2px 4px rgba(0,0,0,0.1), 0 2px 6px rgba(46,69,217,0.3)
```

**Usage:**
- Default cards: `shadow-sm`
- Hover state: `shadow-lg`
- Primary result card: `shadow-primary`
- Focus states: `shadow-focus`
- Buttons: `shadow-button` → `shadow-button-hover`

---

## Border Radius

```css
rounded-lg: 12px   /* Inputs */
rounded-xl: 16px   /* Cards, results */
rounded-full: 9999px /* Pills, badges */
```

**Consistency:**
- Inputs: 12px
- Cards/Results: 16px
- Badges: Full rounded
- Never mix radius sizes on same element

---

## Motion & Transitions

### Timing
```css
/* Global transition */
transition-all duration-150 ease

/* Specific transitions */
transition-colors duration-200  /* For text/bg color changes */
transition-transform duration-200  /* For hover lifts */
```

### Hover Effects

**Cards:**
```css
hover:-translate-y-0.5  /* Lift 2px */
hover:shadow-lg
```

**Buttons:**
```css
hover:-translate-y-0.5  /* Lift 2px */
hover:bg-primary-dark
hover:shadow-button-hover
```

**Links:**
```css
hover:text-primary  /* Color change only */
```

### Active States
```css
active:translate-y-0  /* Remove lift */
active:shadow-none     /* Remove shadow */
```

**Rule:** Always use `transform` for position changes (not `top` or `margin`)

---

## Responsive Breakpoints

```typescript
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile Optimizations

**Typography:**
- H1: 40px → 56px (mobile → desktop)
- H2: 28px → 32px
- Body: 16px → 18px

**Spacing:**
- Section padding: 48px → 96px
- Card padding: 24px → 32px
- Grid gaps: 16px → 24px

**Layout:**
- All grids collapse to single column below 640px
- Navigation becomes hamburger (if added in future)
- Sticky elements disabled on mobile

---

## Accessibility

### Focus States
- All interactive elements must have visible focus state
- Focus ring: `shadow-focus` (3px primary @ 10% opacity)
- Never remove outline without replacement

### Color Contrast
- Text on white must meet WCAG AA (4.5:1)
- Primary color on white: Passes
- Text-secondary on white: Passes
- Text-tertiary on white: Use only for non-essential text

### Touch Targets
- Minimum 44px height for mobile buttons
- Adequate spacing between clickable elements (16px minimum)

### Keyboard Navigation
- All forms must be keyboard navigable
- Tab order follows visual layout
- Enter submits forms, Space activates buttons

---

## Best Practices

### DO ✓
- Use consistent spacing (8pt grid)
- Apply hover/focus states to all interactive elements
- Use semantic HTML (header, main, footer, section, article)
- Test on mobile devices, not just Chrome DevTools
- Use `rem` for font sizes, `px` for borders/shadows
- Apply `tabular-nums` to all monetary values
- Keep line length under 75 characters for body text

### DON'T ✗
- Use pure black (#000) or pure white text
- Mix border radius sizes randomly
- Create custom spacing (use design tokens)
- Animate width/height (causes reflow)
- Use transitions longer than 300ms
- Skip hover states on desktop
- Use color alone to convey information
- Forget mobile breakpoints

---

## File Structure

```
app/
├── globals.css          # Design tokens, base styles
├── layout.tsx           # Root layout with fonts
└── page.tsx             # Homepage

components/
├── ui/
│   ├── Button.tsx       # Primary, secondary, ghost
│   ├── CurrencyInput.tsx # $ input with validation
│   ├── NumberInput.tsx   # Number input with suffix
│   ├── PercentInput.tsx  # % input (0-100)
│   ├── ResultCard.tsx    # Primary/default/secondary
│   └── Callout.tsx       # Info/tip/warning/success
└── layout/
    ├── Header.tsx        # Site header with nav
    └── Footer.tsx        # Site footer

tailwind.config.js        # Tailwind theme extensions
```

---

## Migration Notes (From Brutalist → Impeccable)

### Major Changes
1. **Color Palette:** Black/white/yellow → Indigo/slate/white
2. **Borders:** 4px black → 2px slate-200
3. **Shadows:** Box shadows → Subtle layered shadows
4. **Typography:** All uppercase → Sentence case with hierarchy
5. **Spacing:** Random values → 8pt grid system
6. **Border Radius:** Sharp corners → 12-16px rounded
7. **Buttons:** Inverted colors on hover → Lift + darken
8. **Cards:** Brutalist shadows → Soft elevation

### Component Mapping
- `border-4 border-black` → `border border-slate-200`
- `bg-black text-white` → `bg-primary text-white`
- `bg-yellow-100` → `variant="primary"` on ResultCard
- `uppercase tracking-wide` → `font-semibold` (normal case)
- `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]` → `shadow-sm hover:shadow-lg`

---

## Future Enhancements

### Potential Additions
- [ ] Dark mode support (toggle in header)
- [ ] Number animation library (react-spring) for result changes
- [ ] Skeleton loading states for calculator results
- [ ] Toast notifications for copy/share actions
- [ ] Comparison tables component for benchmarks
- [ ] Progress indicators for multi-step calculators
- [ ] Chart components for visualizing results (using Recharts)

### Animation Ideas
- Animate result numbers when inputs change (count-up effect)
- Fade in results when they first appear
- Subtle pulse on primary result card when value changes
- Smooth height transitions for collapsible sections

---

## Resources

**Design Inspiration:**
- [Stripe](https://stripe.com) - Typography, spacing
- [Linear](https://linear.app) - Gradients, polish
- [Raycast](https://raycast.com) - Micro-interactions
- [Vercel](https://vercel.com) - Clean layouts

**Tools:**
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Google Fonts](https://fonts.google.com)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Typography:**
- Space Grotesk: Display font
- Inter: Body font (geometric sans-serif)
- JetBrains Mono: Monospace for numbers

---

## Questions?

For design decisions or component usage questions:
1. Refer to this document first
2. Check component files for prop interfaces
3. Review homepage and calculator pages for examples
4. Test changes on mobile, tablet, and desktop

**Remember:** Consistency is more important than creativity. Follow the system.
