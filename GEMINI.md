# GEMINI.md - Contexto del Proyecto

## 🚀 Resumen del Proyecto
**Saúl Antonio Portfolio** es un sitio web personal y blog técnico desarrollado con **Astro 5**. Está diseñado para mostrar la experiencia profesional, habilidades técnicas y artículos especializados de Saúl Antonio Morquecho Cela, un desarrollador Fullstack con foco en el ecosistema .NET y React.

### Tecnologías Principales:
- **Framework:** Astro (v5.17+)
- **Lenguaje:** TypeScript
- **Estilos:** Sass (SCSS) con arquitectura de variables y mixins.
- **Contenido:** Astro Content Collections (Markdown para el blog).
- **SEO:** Integración de `@astrojs/sitemap`, Open Graph y Twitter Cards.

---

## 🏗️ Arquitectura y Estructura
El proyecto sigue la estructura estándar de Astro con algunas convenciones específicas:

- `src/components/`: Dividido por secciones (`about/`, `home/`) para facilitar el mantenimiento.
- `src/content/`: Define la colección `blog` con validación de esquemas mediante Zod (`title`, `summary`, `createdAt`).
- `src/layouts/`: `MainLayout.astro` centraliza la lógica de SEO, temas (Dark/Light) y estructura base HTML.
- `src/styles/`: Uso de variables SCSS para consistencia visual.
- `src/data/`: Datos estáticos y tipos TypeScript compartidos.

---

## 🛠️ Comandos de Desarrollo
El proyecto utiliza **pnpm** como gestor de paquetes.

| Acción | Comando |
| :--- | :--- |
| **Desarrollo** | `pnpm dev` |
| **Construcción** | `pnpm build` |
| **Previsualización** | `pnpm preview` |
| **Chequeo de Tipos** | `pnpm astro check` |
| **Sincronización de Contenido** | `pnpm astro sync` |

---

## 📝 Convenciones de Desarrollo
1. **Tipado:** Uso estricto de TypeScript en componentes y scripts.
2. **Estilos:** Preferencia por bloques `<style lang="scss">` dentro de archivos `.astro`, importando variables globales desde `src/styles/_variables.scss`.
3. **Blog:** Los nuevos artículos deben añadirse en `src/content/blog/` y cumplir con el esquema definido en `src/content/config.ts`.
4. **Imágenes:** Los recursos estáticos van en `public/`, mientras que los logos y recursos optimizables se prefieren en `src/assets/`.
5. **SEO:** Al añadir nuevas páginas, utilizar `MainLayout` pasando las props de `title` y `description` para mantener un buen posicionamiento.

---

## 🎯 Objetivos del Agente
- Mantener la coherencia visual usando el sistema de diseño basado en SCSS.
- Asegurar que el SEO se mantenga actualizado al modificar layouts o páginas.
- Respetar el tipado de TypeScript en todas las contribuciones.
- Seguir el patrón de componentes de Astro para la UI.
