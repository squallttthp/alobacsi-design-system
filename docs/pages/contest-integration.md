# Contest Page Override

This page family overrides the generated master recommendations where they conflict with
the AloBacsi brand and contest workflow.

## Product direction

- Content-first social contest platform for healthcare-adjacent community stories.
- Calm, trustworthy and warm; images and stories are the visual focus.
- Use flat surfaces and restrained borders rather than decorative gradients or heavy glass.

## Brand tokens

| Role | Token | Value |
|---|---|---|
| Primary action | `--contest-green` | `#4e8b59` |
| Primary dark | `--contest-green-dark` | `#32683d` |
| Primary soft | `--contest-green-soft` | `#e6f3e8` |
| Sponsor/prize | `--contest-orange` | `#c2410c` |
| Sponsor soft | `--contest-orange-soft` | `#ffedd5` |
| Trust heading | `--contest-navy` | `#23324a` |
| Body text | `--contest-ink` | `#18212b` |
| Muted text | `--contest-muted` | `#68737f` |

Do not use the generated cyan palette or purple accents for this product. Orange is
semantic commercial emphasis, not a second primary CTA.

## Route hierarchy

- `/`: discover contests.
- `/cuoc-thi/[slug]`: contest overview and one “Tham gia” CTA.
- `/cuoc-thi/[slug]/bai-du-thi`: browse/filter entries.
- `/cuoc-thi/[slug]/bai-du-thi/[id]`: read/share/vote one entry.
- `/cuoc-thi/[slug]/bang-xep-hang`: ranking and delayed-count explanation.
- `/cuoc-thi/[slug]/the-le`: rules, consent and privacy.
- `/cuoc-thi/[slug]/gui-bai`: four-step submission flow.
- `/tai-khoan`: user status/history.

## UX rules

- Show active contest navigation and preserve browser back/filter state.
- Use a stepper for submission; show loading, success and field-level error states.
- Keep vote action sticky only on entry detail; reserve bottom safe-area space on mobile.
- Do not place ads adjacent to vote, consent or destructive actions.
- Use 44px minimum targets, visible focus, semantic labels and no color-only status.
- Reserve image aspect-ratio space and lazy-load below-fold entry images.
- Respect `prefers-reduced-motion`; animations are 150–300ms and never block input.

## Layout

- Desktop: content max-width 1180px; entry detail uses content + 300px vote/sidebar column.
- Mobile: single-column content, sticky bottom vote action, no horizontal scroll.
- Keep body copy 16px or larger on mobile and 60–75 characters per desktop line.
- Use a consistent 4/8px spacing rhythm.
