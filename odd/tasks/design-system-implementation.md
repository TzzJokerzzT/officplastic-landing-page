# Design System Implementation

> Feature: `design-system-implementation` — implementar el system design (del diseño OpenPencil) en el proyecto Astro: tokens, componentes reutilizables con tests, y documentación de uso.
> Estado: en progreso.

## Alcance

1. **Tokens de diseño** en `src/styles/global.css` (Tailwind 4 `@theme` / `@theme inline`): marca (#2380C3 brand, #8CBC42 accent), semánticos claro/oscuro (page, surface, card, ink, muted, line) con `data-theme="dark"`, fuentes Sora/Inter (variable), `@custom-variant dark`.
2. **Layout**: importar global.css, setting de tema inicial inline (localStorage + prefers-color-scheme), body con tokens.
3. **Libs testeables**: `src/lib/cn.ts` (unión de clases), `src/lib/theme.ts` (tema: getInitialTheme/applyTheme/toggleTheme).
4. **Componentes reutilizables** en `src/components/ui/`: `Button.astro` (variants primary/secondary/whatsapp/ghost, sizes sm/md/lg, `<a>` o `<button>`, data-variant/data-size), `Badge.astro`, `SectionHeader.astro`, `FormField.astro` (input/textarea con label), `ProductCard.astro` (usa `quote.ts` para links WhatsApp/email; sin precio: "Precio a consultar"), `ThemeToggle.astro`.
5. **Tests unitarios**: container API para componentes + tests de libs (coverage ≥80% en src/lib ya exigido).
6. **Showcase**: `src/pages/design-system.astro` demo de todos los componentes y tokens.
7. **Documentación**: `docs/design-system.md` (español, uso/props/ejemplos).

## Fuentes verificadas

- Container API: `import { experimental_AstroContainer } from "astro/container"`; `container.renderToString(Component, { props, slots })`; entorno `node` (Astro 6+ no permite jsdom/happy-dom). Ya en vitest.config.ts.
- Tailwind 4: `@import "tailwindcss"`, `@theme` tokens, `@theme inline` para mapeo a vars runtime, `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));`.
- Fuentes: `@fontsource-variable/inter` y `@fontsource-variable/sora` (familia "Inter Variable" / "Sora Variable").

## No incluye

- Colores de marca en componentes visuales del starter (Welcome/astro.svg): no tocar.
- Commit: decisión del usuario.

## Tareas

- [ ] Tokens + fonts + Layout.
- [ ] libs cn/theme + tests.
- [ ] Componentes ui (Button, Badge, SectionHeader, FormField, ProductCard, ThemeToggle).
- [ ] Tests de componentes (container API).
- [ ] Showcase design-system.astro.
- [ ] docs/design-system.md.
- [ ] Verificar check/test/lint/build.