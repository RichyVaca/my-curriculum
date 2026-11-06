# Richie Morales — Currículum y landing profesional

Sitio de una sola página que combina una landing profesional con el
currículum completo de **Ricardo Hiram Morales Vaca**. Está construido con
React, TypeScript, Vite y Tailwind CSS, sin dependencias de UI adicionales.

La landing está pensada para presentar la trayectoria, generar confianza y
llevar al visitante a un contacto directo, sin perder la versión imprimible del
CV.

## Características

- **Hero de conversión** con titular, propuesta de valor, CTA principal y foto
  optimizada con `srcset` (sin layout shift).
- **Navegación fija** con fondo tipo glass al hacer scroll, resaltado de la
  sección activa y menú móvil tipo acordeón con cierre por `Escape`.
- **Banda de métricas** con contadores animados que respetan
  `prefers-reduced-motion` y exponen el valor final a lectores de pantalla.
- **Sección Sobre mí** con resumen, formación, idiomas y una ilustración SVG
  propia cargada de forma diferida.
- **Timeline de experiencia** con roles expandibles y un panel lateral de
  habilidades. En impresión se despliegan todos los logros.
- **Prueba social basada en roles reales**, sin testimonios inventados.
- **Contacto directo** con correo, teléfono, ubicación y LinkedIn. Sin
  formulario ni backend: los enlaces abren la app correspondiente.
- **Modo claro/oscuro** persistente, aplicado antes del primer pintado para
  evitar el flash inicial.
- **Impresión / PDF** con cabecera de CV, contenido limpio en A4 y sin los
  elementos de la landing.
- **Accesibilidad**: skip link, landmarks semánticos, foco visible, etiquetas
  ARIA, contraste AA y alternativa `noscript` para las animaciones de entrada.

## Tecnologías

| Herramienta | Versión |
| --- | --- |
| React | 19 |
| TypeScript | ~7 |
| Vite | 8 |
| Tailwind CSS | 4 |
| `@tailwindcss/vite` | 4 |
| Oxlint | 1 |

Las tipografías son **Sora** (títulos) e **Inter** (texto), cargadas desde
Google Fonts. No se añadieron librerías de animación, iconos ni componentes.

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`
- npm

## Instalación y uso

```bash
npm install
npm run dev
```

La aplicación se abre en **http://localhost:5173/**.

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente. |
| `npm run build` | Comprueba tipos y genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve `dist/` localmente (por defecto en `http://localhost:4173/`). |
| `npm run lint` | Ejecuta Oxlint. |

## Estructura

```text
.
├── public/
│   ├── favicon.svg
│   ├── profile-portrait-480.jpg   # Retrato optimizado para móvil
│   ├── profile-portrait-960.jpg   # Retrato para escritorio / alta densidad
│   ├── profile.jpg                # Imagen original (no se usa en la landing)
│   ├── workflow.svg               # Ilustración de la sección Sobre mí
│   ├── icons.svg                  # Sprite heredado, sin uso actual
│   └── profile.svg                # Placeholder heredado, sin uso actual
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Counter.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx              # Iconos SVG inline
│   │   ├── MetricsBand.tsx
│   │   ├── Navbar.tsx
│   │   ├── PrintHeader.tsx
│   │   ├── Reveal.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Skills.tsx
│   │   ├── SocialProof.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   ├── resume.ts              # Contenido del CV (fuente de verdad)
│   │   └── site.ts                # Copy, métricas y enlaces
│   ├── hooks/
│   │   ├── useInView.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useScrollSpy.ts
│   │   └── useTheme.ts
│   ├── types/
│   │   ├── resume.ts
│   │   └── site.ts
│   ├── App.tsx
│   ├── index.css                  # Tokens, componentes, animaciones e impresión
│   └── main.tsx
├── index.html                     # Metadatos, fuentes y tema antes del paint
└── package.json
```

## Personalización

### Contenido del CV

`src/data/resume.ts` conserva el contenido original: nombre legal, resumen,
contacto, experiencia, formación, habilidades e idiomas. Los componentes de
experiencia, habilidades, formación e idiomas leen directamente de ahí, y la
versión impresa también.

### Copy de la landing

`src/data/site.ts` concentra lo que es específico de la landing:

- `brand`: nombre visible y rol (el rol se usa en el pie de página).
- `navigation`: secciones del menú.
- `metrics`: cifras de la banda inferior.
- `companies`: prueba social basada en roles reales.
- `socialLinks`: enlaces de LinkedIn, WhatsApp y correo.

### Foto de perfil

La landing usa `profile-portrait-480.jpg` y `profile-portrait-960.jpg` con
`srcset`. Si cambias la foto:

1. Exporta una versión de 480 px y otra de 960 px de ancho, manteniendo la
   proporción 4:5.
2. Guárdalas en `public/` con los mismos nombres.
3. Conserva `width={960} height={1200}` en `Hero.tsx` o actualiza ambos valores
   para evitar saltos de layout.

`public/profile.jpg` se mantiene como archivo original, pero la landing ya no
lo referencia.

### Colores y tipografía

Los tokens están en `src/index.css` dentro de `:root` y `.dark`. Cambia ahí la
paleta (índigo, ámbar y neutros cálidos) sin tocar los componentes. Las fuentes
se cargan en `index.html`.

### Tema claro/oscuro

- La preferencia se guarda en `localStorage` con la clave `richie-theme`.
- Un script inline en `index.html` aplica el tema antes del primer paint.
- `useTheme` sincroniza la clase `dark`, `color-scheme` y el meta `theme-color`.

## Contacto

La sección de contacto no incluye formulario. Muestra únicamente los cuatro
canales definidos en `src/data/resume.ts`:

- Correo mediante `mailto:`.
- Teléfono mediante `tel:`.
- Ubicación.
- Perfil de LinkedIn.

Los enlaces sociales del pie de página se generan desde `socialLinks` en
`src/data/site.ts`.

## Impresión y PDF

Usa el botón **Imprimir / Guardar PDF** de la sección Experiencia o del pie de
página, o `Ctrl + P` / `Cmd + P`. El CSS de impresión:

- Oculta navegación, hero, prueba social, contacto y pie.
- Muestra una cabecera de CV con nombre, título y contacto.
- Imprime Sobre mí + Experiencia + Habilidades + Formación + Idiomas.
- Despliega todos los logros de cada puesto y evita cortes dentro de tarjetas.
- Fuerza una paleta clara y un tamaño A4 con márgenes de 12 mm.

## Accesibilidad y rendimiento

- HTML semántico (`header`, `nav`, `main`, `section`, `footer`) y skip link.
- Enlaces de contacto con etiquetas visibles y nombres accesibles.
- Animaciones desactivadas con `prefers-reduced-motion`; los contadores muestran
  el valor final sin animación.
- Imagen LCP con `fetchPriority="high"`, dimensiones explícitas y `srcset`.
- Ilustración secundaria con `loading="lazy"` y `decoding="async"`.
- Sin dependencias de runtime añadidas.

## Notas de contenido (supuestos)

- **Nombre visible:** la landing usa “Richie Morales” como marca personal. El
  nombre legal completo, `Ricardo Hiram Morales Vaca`, se conserva en el CV y
  en el pie de página.
- **Disponibilidad:** “Disponible para nuevos proyectos” es un supuesto de
  presentación; ajústalo en `Hero` y `Footer` si cambia.
- **Prueba social:** se usan empresas y roles reales del CV. No se inventaron
  testimonios, cotizaciones ni clientes.
- **Métricas:** `4+ años`, `4 equipos`, `12+ herramientas` y `2 idiomas` se
  derivan del contenido del CV y deben revisarse al actualizarlo.
- **Idioma:** todo el copy está en español; el CV conserva el nivel de inglés
  B1 indicado en los datos originales.

## Despliegue

```bash
npm run build
```

Publica el contenido de `dist/` en cualquier hosting estático (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, etc.).
