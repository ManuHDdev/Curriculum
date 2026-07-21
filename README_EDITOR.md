# Editor persistente para `index.html` y `victoria_farmacia.html`

## Qué permite
- Editar el texto visible del CV directamente sobre la página.
- Personalizar colores, tipografía, tamaños y algunos ajustes de diseño.
- Guardar automáticamente los cambios en el navegador (`localStorage`).
- Exportar e importar la configuración en formato JSON.
- Imprimir o guardar como PDF con un botón flotante.

## Cómo usarlo
1. Abre `index.html` o `victoria_farmacia.html`.
2. Pulsa **Personalizar CV**.
3. Usa **Editar contenido** para modificar textos.
4. Ajusta colores y tamaños desde el panel.
5. Los cambios se guardan solos en ese navegador.
6. Usa **🖨 PDF** para imprimir o guardar como PDF.

## Navegación
- `index.html` actúa como portada principal para GitHub Pages.
- Hay botones de navegación para cambiar entre el CV hospitalario y el CV de oficina de farmacia.
- Esa navegación no aparece al imprimir.

## Persistencia
- Los cambios se conservan al recargar la página.
- La persistencia es **local al navegador y dispositivo**.
- Si quieres mover la configuración a otro equipo, usa **Exportar JSON** y después **Importar JSON**.

## GitHub Pages
Esta solución sigue siendo compatible con despliegue estático en GitHub Pages, porque todo funciona del lado del cliente y no requiere backend.

