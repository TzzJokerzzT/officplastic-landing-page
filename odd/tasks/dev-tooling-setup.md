# Dev Tooling Setup

> Feature: `dev-tooling-setup` — Husky + commitlint, CI/CD robusto, Vitest, TypeScript hardening.
> Estado: en progreso. Proyecto: officplastic-landing-page (Astro 7.3.5, Tailwind 4, Biome 2.5, pnpm 12.4.1, Node >=22.12.0).

## Contexto

- Proyecto starter de Astro ya configurado; **sin commits todavía** (repo master vacío).
- `tsconfig.json` ya usa `astro/tsconfigs/strict` con include/exclude recomendados.
- Fuente de verdad: docs de Astro (consultadas vía MCP):
  - Vitest: `getViteConfig()` desde `astro/config` en `vitest.config.ts`.
  - **Astro 6+ no permite renderizar componentes Astro en entornos clientes (jsdom/happy-dom)**; tests deben correr en entorno `node` (Container API).
  - Type-checking: `astro check` (requiere `@astrojs/check` + `typescript`); `build` recomendado: `astro check && astro build`.
  - `verbatimModuleSyntax` ya viene activo en presets.

## Alcance

1. Dependencias dev: `vitest`, `@vitest/coverage-v8`, `husky`, `@commitlint/cli`, `@commitlint/config-conventional`, `lint-staged`, `@astrojs/check`, `typescript`.
2. `package.json`: scripts (`check`, `test`, `test:watch`, `test:coverage`, `lint`, `lint:fix`, `format`, `prepare: husky`, `build` = `astro check && astro build`) + `packageManager: pnpm@12.4.1` + config `lint-staged`.
3. `vitest.config.ts` con `getViteConfig()`, entorno `node`, coverage v8.
4. Husky: `.husky/pre-commit` (lint-staged con Biome), `.husky/commit-msg` (commitlint conventional).
5. `commitlint.config.mjs` + `.lintstagedrc.mjs`.
6. `.github/workflows/ci.yml` robusto: jobs lint / typecheck / test (con coverage) / build (needs anteriores), concurrency, permissions mínimas, caché pnpm, Node 22, `--frozen-lockfile`.
7. Extender `.gitignore` (node_modules, dist, .astro, logs, .env, editor).
8. Utilidad real + test de ejemplo: `src/lib/quote.ts` + `src/lib/quote.test.ts` (mensajes de cotización WhatsApp/email), para validar el pipeline.

## No incluye (decisiones del usuario)

- Deploy/CD real: falta decidir hosting (Vercel/Netlify/etc.). Se reporta como next step.
- Commit inicial: los commits son decisión del usuario.

## Verificación esperada

- `pnpm install` limpio.
- `pnpm check` (astro check) pasa.
- `pnpm test` / `pnpm test:coverage` pasan.
- `pnpm lint` (biome) pasa.
- `pnpm build` pasa.

## Tareas

- [ ] Instalar dependencias dev y actualizar package.json.
- [ ] Crear vitest.config.ts y utilidad+test de ejemplo.
- [ ] Configurar Husky + commitlint + lint-staged.
- [ ] Crear workflow CI robusto.
- [ ] Extender .gitignore.
- [ ] Verificar todo (check, test, lint, build).