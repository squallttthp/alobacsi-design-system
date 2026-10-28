# AloCare Design System v0.1

`AloCare Design System` is the reusable design foundation for AloBacsi
Editorial, Care, Partner, Booking/Clinic and future mobile products.

## Source of truth

1. `assets/design-system/tokens/design-tokens.json` — portable token source.
2. `assets/design-system/tokens/design-tokens.css` — web runtime variables.
3. `docs/brand/BRAND_GUIDELINES.md` — brand and voice decisions.
4. Figma library — design components and examples.

Admin and Ads use the same tokens and accessibility rules, but have separate
operations-oriented shells and information architecture.

## Token layers

```text
Primitive → Semantic → Component
```

- Primitive tokens contain raw palette, type, spacing and radii values.
- Semantic tokens describe intent such as `color.text.primary` or
  `color.surface.brand`.
- Component tokens describe button, card, form, banner and navigation usage.

## Component families

### Foundations

Typography, color, spacing, grid, container, icon, focus ring, elevation and
responsive breakpoints.

### Editorial

Header, navigation, breadcrumb, article card, video card, author/reviewer,
date metadata, tag, category label, related content and article body.

### Care

Doctor card, facility card, specialty, service card, booking CTA, schedule,
contact and trust/verification metadata.

### Partner

Partner hero, co-brand lockup, sponsored label, themed section, doctor team,
service list, facility gallery and conversion CTA.

### Advertising

Display slot, inline slot, in-image overlay, floating rail, mobile inline slot,
close control, fallback and ad disclosure.

### States

Loading, empty, error, not found, disabled, success, warning and consent.

## Theming contract

Partner themes can override only approved semantic tokens:

- brand accent
- accent contrast
- partner logo
- hero imagery
- selected CTA treatment

They cannot override medical metadata, sponsorship labels, accessibility
contrast, legal content or information hierarchy.

## Responsive baseline

- Mobile first.
- Content width and article measure are explicit tokens.
- Ads must not cover navigation, article controls or slide controls.
- Every component documents desktop, tablet and mobile behavior.

## Component acceptance checklist

- Has a semantic token, not an ad-hoc color.
- Keyboard focus is visible.
- Text remains readable at mobile widths.
- Has loading, empty and error states where relevant.
- Clearly distinguishes editorial, medical and sponsored content.
- Includes Figma example and code example.

