# Requerimientos Funcionales y No Funcionales
## Landing Page — Officplastic (Distribuidora de Plásticos y Elementos para la Construcción)

> **Versión:** 1.0 — Borrador inicial
> **Estado:** Para revisión
> **Última actualización:** 2025-09-28

---

## 1. Introducción

### 1.1 Propósito

Este documento describe los requerimientos funcionales (RF) y no funcionales (RNF) de la
landing page de **Officplastic**, una empresa distribuidora de plásticos y elementos para la
construcción. Su objetivo es servir de base común para el diseño, desarrollo y validación del
producto, y dejar explícitas las reglas de negocio, el alcance y las decisiones pendientes.

### 1.2 Alcance

El producto comprende:

1. Una **landing page pública** que presenta la empresa, sus líneas de producto y su propuesta
   de valor.
2. Un **catálogo de productos** navegable, **sin precios visibles**.
3. Un **flujo de cotización** basado en contacto directo por **WhatsApp** y **correo electrónico**.
4. Un **backend** de soporte para la administración de productos/categorías y la gestión de las
   solicitudes de cotización recibidas por email.

### 1.3 Fuera de alcance (no incluido en esta versión)

- Carrito de compras o checkout en línea (e-commerce transaccional).
- Pasarela de pagos.
- Zona privada de clientes con cuentas.
- Gestión de inventario/stock en tiempo real.
- Cotización automática con cálculo de precios.
- Aplicación móvil nativa.

### 1.4 Glosario

| Término | Definición |
| --- | --- |
| **Cotización** | Solicitud formal de precio por uno o varios productos, resuelta por contacto directo. |
| **Catálogo** | Listado público de productos con información descriptiva, sin precios. |
| **Lead** | Visitante que inicia una solicitud de cotización o contacto. |
| **SKU / Referencia** | Código interno único que identifica un producto. |
| **Categoría / Línea** | Agrupación de productos (plásticos, construcción, etc.). |

---

## 2. Descripción general del producto

### 2.1 Visión

Ser el punto de entrada digital de Officplastic: presentar la empresa, permitir que clientes
actuales y potenciales exploren el catálogo y, sobre todo, **convertir la visita en una
cotización** a través de los canales directos (WhatsApp y email).

### 2.2 Modelo de negocio

- El precio **no se publica** en ningún punto de la landing ni del catálogo.
- Toda operación comercial inicia con una **cotización por comunicación directa**:
  - **WhatsApp**: mensaje pre-armado con el/los productos de interés.
  - **Email**: formulario de solicitud de cotización que llega a la bandeja de la empresa.
- El backend no calcula precios; solo registra y enruta la solicitud.

### 2.3 Actores y usuarios

| Actor | Descripción | Necesidad principal |
| --- | --- | --- |
| **Visitante** | Persona que navega la landing sin identificarse. | Conocer la empresa y explorar el catálogo. |
| **Cliente potencial (lead)** | Visitante que inicia una cotización. | Pedir precio por WhatsApp o email de forma ágil. |
| **Administrador** | Personal de Officplastic. | Gestionar productos/categorías y recibir solicitudes. |

---

## 3. Requisitos Funcionales

Los requerimientos se agrupan por módulo. Prioridades: **A** = Alta, **M** = Media, **B** = Baja.

### 3.1 Landing y navegación

| ID | Requerimiento | Prioridad |
| --- | --- | --- |
| RF-01 | La landing debe mostrar una **cabecera (hero)** con el nombre de la empresa, una frase de valor y una llamada a la acción (CTA) principal ("Ver catálogo" o "Cotizar"). | A |
| RF-02 | Debe existir una **barra de navegación** con enlaces a las secciones: Inicio, Catálogo, Nosotros, Contacto. | A |
| RF-03 | La sección **"Nosotros"** debe presentar brevemente la empresa, su trayectoria y sus líneas de negocio. | M |
| RF-04 | La sección **"Contacto"** debe mostrar los canales oficiales: WhatsApp, email, teléfono (si aplica) y ubicación/horario. | A |
| RF-05 | El **pie de página (footer)** debe incluir enlaces de navegación, datos de contacto y redes sociales. | M |

### 3.2 Catálogo de productos (sin precios)

| ID | Requerimiento | Prioridad |
| --- | --- | --- |
| RF-10 | El catálogo debe listar los productos con: **nombre, referencia/SKU, descripción corta, imagen y categoría**. **No debe mostrar precio** en ninguna vista. | A |
| RF-11 | Los productos deben estar organizados en **categorías/líneas** (ej. Plásticos, Tuberías, Elementos para construcción, etc.). | A |
| RF-12 | El catálogo debe permitir **filtrar por categoría**. | A |
| RF-13 | El catálogo debe permitir **buscar por texto** (nombre, referencia o descripción). | M |
| RF-14 | Cada producto debe tener una **página/vista de detalle** con descripción completa, especificaciones y galería de imágenes. | A |
| RF-15 | En el detalle de producto debe existir un **botón "Cotizar"** que inicie el flujo de cotización (RF-20). | A |
| RF-16 | El catálogo debe soportar **paginación o carga progresiva** para listados largos. | M |
| RF-17 | Debe existir un **estado "sin stock / consultar disponibilidad"** visual, sin revelar cantidades ni precios. | B |

### 3.3 Flujo de cotización y contacto

| ID | Requerimiento | Prioridad |
| --- | --- | --- |
| RF-20 | El botón **"Cotizar"** de un producto debe abrir **WhatsApp** con un mensaje pre-armado que incluya el nombre y referencia del producto. | A |
| RF-21 | El botón **"Cotizar"** debe ofrecer una alternativa por **email** (formulario de solicitud de cotización). | A |
| RF-22 | El formulario de cotización debe capturar como mínimo: **nombre, email, teléfono (opcional), producto(s) de interés y mensaje**. | A |
| RF-23 | El formulario debe permitir **seleccionar uno o varios productos** del catálogo para cotizarlos juntos. | M |
| RF-24 | Al enviar el formulario, el sistema debe **registrar la solicitud** y **notificar por email** a la bandeja oficial de Officplastic. | A |
| RF-25 | El usuario debe recibir una **confirmación visual** de envío exitoso (y opcionalmente un correo de acuse de recibo). | M |
| RF-26 | Debe existir un **CTA global de "Cotizar" / WhatsApp flotante** visible en toda la landing. | M |
| RF-27 | Los mensajes pre-armados de WhatsApp deben ser **configurables** desde el backend (número, plantilla de texto). | M |

### 3.4 Backend de administración

| ID | Requerimiento | Prioridad |
| --- | --- | --- |
| RF-30 | El backend debe permitir **crear, leer, actualizar y desactivar (CRUD)** productos, incluida la carga de imágenes. | A |
| RF-31 | El backend debe permitir **gestionar categorías/líneas** (crear, renombrar, ordenar, desactivar). | A |
| RF-32 | El backend debe **listar y consultar las solicitudes de cotización** recibidas (bandeja de leads). | A |
| RF-33 | Cada solicitud de cotización debe registrarse con **fecha, datos del solicitante, productos referidos y canal de origen** (web/WhatsApp). | M |
| RF-34 | El backend debe exponer una **API** para que la landing consuma el catálogo y envíe solicitudes. | A |
| RF-35 | El acceso al backend debe requerir **autenticación** (usuario administrador con contraseña). | A |
| RF-36 | Debe ser posible **activar/desactivar** productos y categorías sin borrarlos (baja lógica). | M |
| RF-37 | El backend debe permitir **editar los datos de contacto y configuración** general (email de destino, número de WhatsApp, plantillas). | M |

### 3.5 SEO y analítica

| ID | Requerimiento | Prioridad |
| --- | --- | --- |
| RF-40 | Cada página de producto debe tener **título y meta descripción** únicos generados a partir del producto. | M |
| RF-41 | La landing debe incluir **sitemap.xml** y **robots.txt**. | B |
| RF-42 | Debe integrarse **analítica web** (ej. Google Analytics o similar) para medir visitas y conversiones a cotización. | M |

---

## 4. Requisitos No Funcionales

### 4.1 Rendimiento

| ID | Requerimiento |
| --- | --- |
| RNF-01 | El tiempo de carga inicial (First Contentful Paint) debe ser ≤ 2.5 s en conexión 4G típica. |
| RNF-02 | Las imágenes de producto deben servirse **optimizadas y con carga diferida (lazy loading)**. |
| RNF-03 | La API de catálogo debe responder en ≤ 300 ms (p95) para listados paginados. |

### 4.2 Usabilidad y accesibilidad

| ID | Requerimiento |
| --- | --- |
| RNF-10 | La interfaz debe ser **responsive**, usable en móvil, tablet y escritorio. |
| RNF-11 | Debe cumplir lineamientos básicos de **accesibilidad (WCAG 2.1 AA)**: contraste, texto alternativo en imágenes, navegación por teclado. |
| RNF-12 | Todo el contenido público debe estar en **español** (idioma principal). |
| RNF-13 | El formulario de cotización debe incluir **validación en línea** clara de los campos requeridos. |

### 4.3 Seguridad y privacidad

| ID | Requerimiento |
| --- | --- |
| RNF-20 | La comunicación entre cliente y servidor debe usar **HTTPS**. |
| RNF-21 | El backend de administración debe estar protegido con **autenticación y control de sesión** seguro. |
| RNF-22 | Los datos personales de los leads deben tratarse conforme a la normativa de **protección de datos** aplicable (ej. Ley 1581 de 2012 en Colombia, si corresponde). |
| RNF-23 | Las contraseñas deben almacenarse con **hash seguro** (nunca en texto plano). |
| RNF-24 | Debe protegerse contra vulnerabilidades web comunes (inyección, XSS, CSRF). |

### 4.4 Disponibilidad y escalabilidad

| ID | Requerimiento |
| --- | --- |
| RNF-30 | La disponibilidad objetivo del sitio público es del **99 %** mensual. |
| RNF-31 | La arquitectura debe permitir **escalar horizontalmente** el frontend sin rediseño. |
| RNF-32 | El sistema debe tolerar picos de tráfico moderados (campañas de marketing) sin degradación crítica. |

### 4.5 Mantenibilidad y operación

| ID | Requerimiento |
| --- | --- |
| RNF-40 | El código debe seguir **convenciones claras y documentación mínima** para facilitar el mantenimiento. |
| RNF-41 | Deben existir **respaldos automáticos** de la base de datos del backend. |
| RNF-42 | Debe registrarse un **log** de errores y de envío de solicitudes de cotización para diagnóstico. |
| RNF-43 | El contenido del catálogo debe ser **editable sin tocar código** (vía backend). |

---

## 5. Reglas de negocio

| ID | Regla |
| --- | --- |
| RB-01 | **Nunca** se muestra precio en la landing ni en el catálogo, en ninguna vista ni estado. |
| RB-02 | Toda cotización se resuelve por **contacto directo** (WhatsApp o email). El sistema no calcula ni sugiere precios. |
| RB-03 | Un producto **desactivado** no debe aparecer en el catálogo público, pero conserva su histórico. |
| RB-04 | Una solicitud de cotización debe quedar **registrada** aunque el envío de email falle (reintento o cola). |
| RB-05 | El número de WhatsApp y el email de destino son **configurables** y no deben ir "quemados" en el código del frontend. |

---

## 6. Backend — Consideración de arquitectura (pendiente de decisión)

El requerimiento incluye un backend para administrar productos/categorías y gestionar la
comunicación por email. Puntos a resolver antes del diseño técnico:

1. **Envío de email**: servicio transaccional (ej. SMTP propio, Resend, SendGrid, AWS SES) vs.
   integración directa con un formulario.
2. **WhatsApp**: integración con enlace `wa.me` (sin costo, sin API) vs. API oficial de WhatsApp
   Business Cloud (requiere cuenta verificada y aprobación de plantillas).
3. **Stack**: se sugiere separar **frontend** (sitio estático/SSR) de **backend/API** (CRUD de
   catálogo + bandeja de leads + envío de email). Alternativa: CMS headless (ej. Strapi,
   Directus, Sanity) para no construir el CRUD desde cero.
4. **Base de datos**: relacional (PostgreSQL) para productos, categorías y leads.

> **Recomendación inicial (a confirmar):** frontend Next.js/Astro + backend ligero (o CMS
> headless) + base de datos PostgreSQL, con envío de email transaccional y WhatsApp vía `wa.me`
> como punto de partida de menor fricción.

---

## 7. Decisiones pendientes

| # | Pregunta | Impacto |
| --- | --- | --- |
| 1 | ¿El backend se construye a medida o se usa un CMS headless? | Costo y velocidad de desarrollo. |
| 2 | ¿WhatsApp por enlace `wa.me` o por API oficial (Business Cloud)? | Alcance de RF-20/RF-27 y costo. |
| 3 | ¿Qué proveedor de email transaccional se usará? | Confiabilidad del envío (RF-24). |
| 4 | ¿Dominio y hosting (Vercel/Netlify + servicio backend)? | Arquitectura y presupuesto. |
| 5 | ¿Idioma del sitio: solo español o bilingüe (es/en)? | Alcance de contenido. |
| 6 | ¿Se requiere página de "Marcas" o "Proveedores" destacados? | Contenido de la landing. |

---

## 8. Criterios de aceptación (MVP)

El producto se considera listo para un primer lanzamiento cuando:

- [ ] La landing presenta la empresa, el catálogo y los canales de contacto.
- [ ] El catálogo permite filtrar por categoría y buscar, **sin mostrar precios**.
- [ ] El detalle de producto ofrece "Cotizar" por **WhatsApp** (mensaje pre-armado) y por **email**.
- [ ] El formulario de cotización registra la solicitud y **notifica por email** a Officplastic.
- [ ] El administrador puede crear/editar/desactivar productos y categorías desde el backend.
- [ ] El sitio es responsive, accesible en móvil y carga en menos de 2.5 s (FCP).
- [ ] Todo el tráfico se sirve por HTTPS y el backend está protegido con autenticación.

---

## 9. Trazabilidad resumida

| Módulo | RF | RNF | Reglas de negocio |
| --- | --- | --- | --- |
| Landing | RF-01…RF-05 | RNF-10, RNF-12 | — |
| Catálogo | RF-10…RF-17 | RNF-01…RNF-03 | RB-01, RB-03 |
| Cotización | RF-20…RF-27 | RNF-13 | RB-02, RB-04 |
| Backend | RF-30…RF-37 | RNF-20…RNF-24, RNF-41 | RB-05 |
| SEO | RF-40…RF-42 | — | — |
