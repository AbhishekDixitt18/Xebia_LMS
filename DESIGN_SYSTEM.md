# Xebia LMS Design System

This document outlines the standard design tokens, typography rules, color palettes, and component styling guidelines used across the Xebia LMS project.

---

## 1. Typography

* **Primary Font Family**: `Inter` (Sans-serif)
* **Font Weights Loaded**: 
  - `400` (Regular)
  - `500` (Medium)
  - `600` (Semi-Bold)
  - `700` (Bold)
  - `800` (Extra-Bold)

### Typography Rules

| Element Type | CSS Specifications | Tailwind/Utility Example |
| :--- | :--- | :--- |
| **Primary Headings** | Font size `24px` to `32px`, font weight `800`, letter-spacing `-0.8px` | `text-2xl font-extrabold` / `text-3xl font-extrabold` |
| **Dashboard Stats Numbers** | Font size `32px`, font weight `800` (Extra-Bold), letter-spacing `-0.8px` | `text-2xl font-extrabold` (overridden globally) |
| **Uppercase Labels** | Font size `10px`, letter-spacing `0.8px`, uppercase text, font weight `700` | `.uppercase` / `label` (overridden globally) |
| **Body / Description** | Font size `12px` to `14px`, regular/medium weights | `text-xs` / `text-sm` |

---

## 2. Color Palette

The project utilizes a custom **Velvet & Zinc** semantic color mapping system.

### Brand Accents

* **Tranquil Velvet** (`#6C1D5F`): Primary branding color. Represents headers, buttons, and brand overlays.
* **Bright Velvet** (`#84117C`): Secondary brand color. Used for gradients and borders.
* **CTA Orange** (`#FF6200`): Accent call-to-action color for primary alerts and submit actions.
* **Teal/Emerald** (`#01AC9F`): Success indicators, complete badges, and growth metrics.

### Theme-Aware Mappings (Zinc Scale)

| Color Token | Usage | Light Mode | Dark Mode |
| :--- | :--- | :--- | :--- |
| `text-primary` | Main titles, primary headings, labels | `#18181B` (Zinc-900) | `#F4F4F5` (Zinc-100) |
| `text-secondary` | Body text, sub-descriptions | `#71717A` (Zinc-500) | `#A1A1AA` (Zinc-400) |
| `text-muted` | Muted timestamps, metadata details | `#A1A1AA` (Zinc-400) | `#71717A` (Zinc-500) |
| `bg-page` | Main screen background | `#F7F8FC` (Zinc-50) | `#09090B` (Zinc-950) |
| `bg-card` | Cards, tables, sidebar containers | `#FFFFFF` | `#18181B` (Zinc-900) |
| `bg-hover` | Button hovers, selected lists backgrounds | `#F0F1F5` (Zinc-100) | `#27272A` (Zinc-800) |
| `border-card` | Container outlines, table dividers | `#DADCEA` | `#27272A` (Zinc-800) |

---

## 3. Global Styles Overrides

These styles are applied automatically to standard selectors via `src/index.css`:

```css
/* Uppercase labels font details */
span.uppercase,
label,
.uppercase {
  font-size: 10px !important;
  letter-spacing: 0.8px !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
  color: var(--text-secondary) !important;
}

/* Stats metrics spacing */
.text-2xl.font-extrabold,
.text-3xl.font-extrabold,
.text-3xl.font-bold {
  font-size: 32px !important;
  letter-spacing: -0.8px !important;
  font-weight: 800 !important;
}
```
