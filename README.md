# AloBacsi Design System

Nguồn dùng chung cho nhận diện, design tokens, CSS runtime và đặc tả component của các sản phẩm AloBacsi.

## Packages

- `@alobacsi/design-tokens`: CSS/JSON tokens dùng được với Go templates, Symfony, Next.js và các web app khác.
- `@alobacsi/ui-web`: chưa phát hành; chỉ tạo sau khi token và component spec ổn định.

## Source of truth

`packages/design-tokens/src/design-tokens.json` là nguồn token duy nhất. File CSS trong `dist/` được sinh/kiểm tra từ source này. Không sửa trực tiếp token ở các product repository.

## Local development

```bash
pnpm install
pnpm build
pnpm check
pnpm pack --filter @alobacsi/design-tokens
```

## Consumers

- Next.js: cài `@alobacsi/design-tokens`, import `@alobacsi/design-tokens/tokens.css`.
- Go/Symfony/templates: copy artifact CSS từ package vào public assets trong bước build.
- Product-specific tokens nên alias từ `--ac-*`, không hard-code lại màu thương hiệu.

## Publishing

Package được publish qua GitHub Actions lên GitHub Packages. Repository consumer cần `packages: read`; workflow publish cần `packages: write`. Không commit token, PAT hoặc secret.

## Product boundaries

Foundation, tokens, accessibility và component specs dùng chung. Header, navigation, contest workflow, admin shell, article layout và ad placement vẫn do từng product sở hữu.
