# Entrance Animations + Custom Classes

> Feature: `entrance-animations-and-custom-classes`.
> Estado: en progreso.

## Alcance

1. Componente `src/components/ui/Reveal.astro` — envoltura reutilizable para animaciones de entrada scroll-driven (timeline-view + animate-range), con prop `class` custom.
2. Aplicar animaciones de entrada a cada sección de la landing (Hero, Categorías, Catálogo, WhyUs, HowItWorks, Contact, Footer) con stagger en grids.
3. Componentes UI (Button, Badge, SectionHeader, FormField, ProductCard, ThemeToggle): aceptar `class?: string` y mezclarla con las clases por defecto usando `cn`.
4. `prefers-reduced-motion` en global.css.
5. Tests (Reveal + class custom en componentes) y docs (design-system.md).

## Fuente

- tailwind-animations v1.0.2 (ya en global.css): animate-*, timeline-view, animate-range-[...], animate-delay-*, animate-duration-*.

## No incluye

- Cambios de contenido en site.json.
- Commit.

## Tareas

- [ ] Reveal.astro
- [ ] Aplicar a secciones
- [ ] class custom en 6 componentes UI
- [ ] prefers-reduced-motion
- [ ] Tests
- [ ] Docs + verificación