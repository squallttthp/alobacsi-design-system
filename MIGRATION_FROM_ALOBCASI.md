# Migration from the main AloBacsi source

The original source remains in the main repository during migration:

- `assets/design-system/tokens/design-tokens.json`
- `assets/design-system/tokens/design-tokens.css`
- `docs/design-system/`
- `design-system/alobacsi-contest-platform/`

Do not delete those files until all consumers use a released package version and visual checks pass. The contest palette should alias shared `--ac-*` tokens instead of defining a second brand palette.

## Consumer migration order

1. `cuocthi.alobacsi.com` imports the package.
2. Validate Contest pages at 375px, 768px, 1024px and 1440px.
3. `alobacsi.com` consumes the generated CSS artifact.
4. Admin and Ads consume the same CSS artifact.
5. Remove duplicate token source only in a separate reviewed change.
