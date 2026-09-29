# Biblioteca de contenido (site.json)

Toda la información editable del sitio vive en un único archivo JSON:
**`src/data/site.json`**. Cambiás el JSON, y el texto, los productos, las
imágenes, los enlaces y los iconos del sitio se actualizan sin tocar código.

> Este archivo está tipado y validado por tests (`src/data/site.test.ts`):
> si agregás productos incompletos o datos inválidos, los tests fallan.

---

## Cómo agregar un producto

1. Abrí `src/data/site.json`.
2. Copiá un objeto del arreglo `catalog.products`.
3. Cambiá `name`, `reference`, `category` y opcionalmente `description`.
4. Agregá la imagen:
   - Copiá el archivo a `public/images/` y usá `"image": "/images/tubo-pvc.jpg"`.
   - O usá una URL externa: `"image": "https://…/foto.jpg"`.
5. Si la imagen no se carga, la card muestra el ícono de la categoría (fallback).

Ejemplo:

```json
{
	"name": "Tubo PVC desagüe 2\"",
	"reference": "PVC-020",
	"category": "Tuberías",
	"description": "Tubo para desagües, 3 m de largo.",
	"image": "/images/pvc-020.jpg",
	"imageAlt": "Tubo PVC desagüe 2 pulgadas"
}
```

---

## Imágenes

| Campo | Ejemplo | Descripción |
| --- | --- | --- |
| `image` | `/images/pvc-020.jpg` o `https://…` | Ruta local en `public/` o URL externa |
| `imageAlt` | `"Tubo PVC desagüe"` | Texto alternativo (accesibilidad) |

> Recomendado: imágenes locales en `public/images/` (sin key de API, carga
> rápida). Las actuales del JSON son fotos de ejemplo de Unsplash.

---

## Cambiar textos

Todas las secciones leen del JSON:

| Sección | Clave |
| --- | --- |
| Barra superior | `topBar.text` |
| Navegación | `nav.links` (array), `nav.cta` |
| Hero | `hero.*` (`titleLine1`, `titleLine2`, `subtitle`, `primaryCta`, `secondaryCta`, `showcase.items`, `stats`) |
| Categorías | `categories[]` |
| Catálogo | `catalog.*` (`eyebrow`, `title`, `note`, `products`) |
| Por qué nosotros | `whyUs.*` (`eyebrow`, `title`, `items`) |
| Cómo cotizar | `howItWorks.*` (`steps`) |
| Contacto | `contact.*` (`info`, `form.fields`, `form.submitLabel`) |
| Footer | `footer.*` |
| WhatsApp flotante | `whatsappFloat` (`enabled`, `message`) |

### CTAs (botones)

Cada CTA es un objeto con `type`:

```json
{ "label": "Ver catálogo", "type": "link", "href": "#catalogo" }
{ "label": "Cotizar por WhatsApp", "type": "whatsapp", "message": "Hola Officplastic" }
{ "label": "Escribir por email", "type": "email", "message": "Hola Officplastic" }
```

- `link` → enlace normal.
- `whatsapp` → genera `https://wa.me/…` con el número real de `site.contact.whatsapp`.
- `email` → genera `mailto:` con `site.contact.email`.
- Si no hay `message`, se usa el mensaje por defecto de `src/lib/cta.ts`.

### Iconos

Cada elemento que muestra un ícono lo referencia por nombre de **Iconify**:
`"icon": "mdi:whatsapp"`. Buscá todos los iconos de Material Design en
[icon-sets.iconify.design](https://icon-sets.iconify.design/?icon=mdi:whatsapp),
o usá `mdi:` + nombre (p. ej. `mdi:pipe`, `mdi:layers-outline`).

---

## Datos de contacto

El número de WhatsApp, email, teléfono y horario están en **`site.contact`**:

```json
"contact": {
	"whatsapp": "573000000000",
	"phone": "+57 300 000 0000",
	"email": "ventas@officplastic.com",
	"schedule": "Lun a Vie · 8:00 a 18:00"
}
```

> `whatsapp` va **solo el número con código de país, sin `+` ni espacios**
> (formato exigido por `wa.me`).

Los datos mostrados en la sección Contacto están en `contact.info` (pueden
incluir más canales: dirección, etc.).

---

## Tests

```sh
pnpm test            # incluye validación del site.json + render de secciones
pnpm test:coverage   # cobertura ≥ 80 % en src/lib (cta, quote, cn, theme)
```

Reglas que protegen la biblioteca:

- `site.site.contact.whatsapp` debe ser numérico (9-15 dígitos).
- Toda categoría/producto debe tener campos no vacíos.
- Los iconos deben empezar con `mdi:`.
- Las imágenes incluyen `imageAlt`.