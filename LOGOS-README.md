# Guía para Agregar Logos de Plataformas

Este archivo explica cómo agregar los logos de PedidosYa y Rappi a los botones del sitio.

## Dónde conseguir los logos

### PedidosYa
- Portal de Partners: https://partners.pedidosya.com/
- Brand Assets: Los logos oficiales están disponibles para comercios registrados
- Formato recomendado: PNG o SVG con fondo transparente

### Rappi
- Rappi para Negocios: https://www.rappi.com.ar/comercios
- Brand Kit: Disponible para partners registrados
- Formato recomendado: PNG o SVG con fondo transparente

## Cómo agregar los logos

### Opción 1: Guardar los archivos de imagen

1. Descarga los logos de las plataformas
2. Guarda los archivos en la carpeta `images/logos/` con estos nombres:
   - `pedidosya-logo.svg` o `pedidosya-logo.png`
   - `rappi-logo.svg` o `rappi-logo.png`

### Opción 2: Modificar los botones en HTML

Los botones actualmente se ven así:
```html
<a href="#" class="button is-pedidosya is-medium">
    <span>Pedir en PedidosYa</span>
</a>
```

Para agregar el logo, cambia a:
```html
<a href="#" class="button is-pedidosya is-medium">
    <img src="images/logos/pedidosya-logo.svg" alt="PedidosYa" style="height: 20px; margin-right: 8px;">
    <span>Pedir en PedidosYa</span>
</a>
```

### Archivos que necesitan actualizarse

Los botones están en:
- `index.html` (línea ~124)
- `productos.html` (línea ~314)
- `sabores.html` (línea ~281)
- `contacto.html` (línea ~85)

## Alternativa: Usar Font Awesome Icons

Si no tenés los logos oficiales, podés usar iconos genéricos de Font Awesome:

1. Agregar Font Awesome al `<head>` de cada HTML:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

2. Agregar iconos a los botones:
```html
<a href="#" class="button is-pedidosya is-medium">
    <i class="fas fa-shopping-bag"></i>
    <span>Pedir en PedidosYa</span>
</a>
```

## Colores ya configurados

Los colores corporativos ya están configurados en el CSS:
- PedidosYa: #E8232A (rojo)
- Rappi: #FF6B00 (naranja)
- WhatsApp: #25D366 (verde)
