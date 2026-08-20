# ECOM MASTER · Biblioteca de Mentorías

Web-app autónoma (un solo `index.html`, sin dependencias) con la **síntesis navegable** de las mentorías con **Ger** (formación «Vision») y de las llamadas con el socio **Gonzalo**. Pensada como biblioteca de consulta: buscador global, filtros por fuente, vistas de Temas / Llamadas / Acción, tema claro-oscuro e instalable como app (PWA).

## Qué incluye

- **Temas** — toda la doctrina agrupada por bloque (testeo, escalado, píxel, producto, mercados, mindset, y el enfoque ABO→ACBO de los socios), con marcas de 🔄 *Evolución* y ⚠️ *Contraste* entre fuentes.
- **Llamadas** — registro cronológico con enlace a cada grabación/documento (Drive, Fathom).
- **Acción** — los *action items* abiertos (Australia, infra de cuentas para Q4, etc.).
- **Buscador** (tecla `/`) que resalta coincidencias en todo el contenido.

## Ficheros

```
index.html              · la app completa (HTML + CSS + JS inline)
manifest.webmanifest    · metadatos PWA (instalable)
sw.js                   · service worker (funciona offline tras la 1ª visita)
icon-192.png / 512.png  · iconos de la app
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (p. ej. `ecom-master-biblioteca`).
2. Sube estos ficheros a la raíz del repo. Desde terminal:

   ```bash
   git init
   git add .
   git commit -m "ECOM MASTER · biblioteca de mentorías"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/ecom-master-biblioteca.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Build and deployment → Source: `Deploy from a branch`**, rama `main` y carpeta `/ (root)`. Guarda.
4. En un par de minutos estará en `https://TU-USUARIO.github.io/ecom-master-biblioteca/`.
5. Ábrela en el móvil → *Añadir a pantalla de inicio* para usarla como app.

> El service worker y el manifest solo se activan servidos por HTTP(S) (GitHub Pages lo es); abriendo el `index.html` con doble clic funciona todo salvo la instalación offline.

## Actualizar la biblioteca

Todo el contenido vive en los arrays `SECTIONS`, `CALLS` y `ACTIONS` al inicio del `<script>` en `index.html`. Para añadir una llamada nueva, agrega sus puntos bajo el tema correspondiente y una entrada en `CALLS`. Si cambias `sw.js`, sube el número de versión (`ecom-master-v1` → `v2`) para forzar la actualización del caché.

---

*Documento vivo. Complementa al documento maestro de estrategia y operativa del proyecto.*
