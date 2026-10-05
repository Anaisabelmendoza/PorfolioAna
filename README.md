
# Portafolio de Ana Isabel Mendoza Jurado

Este es un portafolio profesional desarrollado con **React**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## 🖼️ Cómo gestionar tus imágenes

Para que las imágenes se vean correctamente, sigue estos pasos:

### 1. Dónde poner los archivos
*   **Si usas Vite**: Pon tus fotos en la carpeta `public/`. Por ejemplo: `public/perfil.png` y `public/fondo.jpg`.
*   **Si usas el código directamente**: Pon las imágenes en la misma carpeta raíz donde está tu archivo `index.html`.

### 2. Configuración en el código
Abre el archivo `constants.ts` y busca la sección `personal`. Allí verás:

```typescript
image: "tu-foto.png",          // Nombre de tu archivo de cara
backgroundImage: "fondo.jpg", // Nombre de tu archivo de fondo
```

Simplemente cambia esos nombres por los nombres exactos de tus archivos (asegúrate de que la extensión `.png`, `.jpg`, etc., coincida).

## 🚀 Cómo ejecutar el proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar:**
   ```bash
   npm run dev
   ```

## 🎨 Personalización
El diseño utiliza **Tailwind CSS** con un tema oscuro y acentos en **Turquesa**. Para cambiar colores, busca las clases `cyan-400`, `cyan-500` o `slate-950` en el código.
