# Design System · Officplastic

Sistema de diseño implementado a partir del diseño creado en OpenPencil (paleta
`#2380C3` / `#8CBC42` / `#000000`, modo claro/oscuro, tipografía Sora + Inter).
Agrupa **tokens de diseño**, **componentes reutilizables** en `src/components/ui/`
y una **página de demostración** en `/design-system`.

---

## 1. Tokens

### Colores de marca

| Nombre | Utilidades | Hex |
| --- | --- | --- |
| `brand` | `bg-brand`, `text-brand`, `border-brand` | `#2380C3` |
| `accent` | `bg-accent`, `text-accent`, `border-accent` | `#8CBC42` |
| `ink` | `text-ink`, `bg-ink` | `#0A0A0A` |

### Tokens semánticos (claro / oscuro)

Se definen como variables en `src/styles/global.css` con el tema controlado por el
atributo `data-theme="dark"` en `<html>`. El Layout ya lo aplica automáticamente
(localStorage + preferencia del sistema).

| Token | Utilidad principal | Claro | Oscuro |
| --- | --- | --- | --- |
| `page` (fondo) | `bg-page` | `#FFFFFF` | `#0A0A0A` |
| `surface` | `bg-surface` | `#F5F7F9` | `#111318` |
| `card` | `bg-card` | `#FFFFFF` | `#17191C` |
| `ink` (texto) | `text-ink` | `#0A0A0A` | `#FFFFFF` |
| `muted` | `text-muted`, `bg-muted/20` | `#6B7480` | `#98A2AD` |
| `line` (borde) | `border-line` | `#E6EBF0` | `#262B31` |

### Tipografía

| Utilidad | Fuente | Uso |
| --- | --- | --- |
| `font-display` | Sora Variable | Títulos y encabezados |
| `font-sans` | Inter Variable | Cuerpo y UI |

> El modo oscuro usa el variante `dark:` de Tailwind configurado sobre el atributo
> `data-theme` (`@custom-variant dark`), p. ej. `dark:bg-brand`.

---

## 2. Componentes

Todos viven en `src/components/ui/` y usan los tokens del sistema.

### `Button.astro`

Botón o enlace según se pase `href`.

| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `variant` | `"primary" \| "secondary" \| "whatsapp" \| "ghost"` | `"primary"` | Estilo visual |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamaño |
| `href` | `string` | — | Si se pasa, renderiza `<a>` en lugar de `<button>` |
| `type` | `"button" \| "submit"` | `"button"` | Tipo de botón |
| `rel` | `string` | `"noopener"` | Atributo `rel` para enlaces |

```astro
---
import Button from "../components/ui/Button.astro";
---

<Button variant="primary">Ver catálogo</Button>
<Button variant="whatsapp" href="https://wa.me/573000000000">Cotizar por WhatsApp</Button>
<Button type="submit" size="lg">Enviar solicitud</Button>
```

### `Badge.astro`

Etiqueta de categoría en mayúsculas.

| Prop | Tipo | Default |
| --- | --- | --- |
| `tone` | `"accent" \| "brand" \| "neutral"` | `"accent"` |

```astro
<Badge tone="accent">Tuberías</Badge>
```

### `SectionHeader.astro`

Encabezado de sección con eyebrow, título y descripción.

| Prop | Tipo | Default |
| --- | --- | --- |
| `eyebrow` | `string` | — |
| `title` | `string` | — |
| `description` | `string` | — |
| `align` | `"left" \| "center"` | `"center"` |

```astro
<SectionHeader
	eyebrow="Líneas de producto"
	title="Todo para tu proyecto"
	description="Sin precios en línea: cotizá directo."
/>
```

### `FormField.astro`

Campo de formulario con label, input o textarea.

| Prop | Tipo | Default |
| --- | --- | --- |
| `name` | `string` | — |
| `label` | `string` | — |
| `type` | `string` | `"text"` |
| `placeholder` | `string` | — |
| `required` | `boolean` | `false` |
| `optional` | `boolean` | `false` (muestra "(opcional)") |
| `textarea` | `boolean` | `false` |
| `rows` | `number` | `4` |
| `autocomplete` | `string` | — |

```astro
<form>
	<FormField label="Nombre" name="nombre" required />
	<FormField label="Email" name="email" type="email" autocomplete="email" required />
	<FormField label="Mensaje" name="mensaje" textarea />
</form>
```

### `ProductCard.astro`

Tarjeta de producto **sin precio** (regla de negocio: todo se cotiza por contacto
directo). Genera automáticamente los enlaces de cotización por WhatsApp y email
usando `src/lib/quote.ts`.

| Prop | Tipo | Default |
| --- | --- | --- |
| `name` | `string` | — |
| `reference` | `string` | — |
| `category` | `string` | `"Producto"` |
| `description` | `string` | — |

```astro
<ProductCard
	name='Tubo PVC sanitario 4"'
	reference="PVC-040"
	category="Tuberías"
/>
```

### `ThemeToggle.astro`

Botón circular que alterna `data-theme` entre claro y oscuro, persistiendo la
elección en `localStorage`. No recibe props.

```astro
<ThemeToggle />
```

---

## 3. Tests

```sh
pnpm test            # corre los tests unitarios (Vitest)
pnpm test:coverage   # corre con cobertura (umbral ≥ 80 % en src/lib)
```

Los tests de componentes usan el **Container API** de Astro
(`experimental_AstroContainer`) en entorno `node` (requisito de Astro 6+).

## 4. Verificación

```sh
pnpm check   # type-check (astro check)
pnpm lint    # Biome
pnpm build   # build de producción
```