# Tareas Pendientes - Il Trovatore

## Cambios Completados ✓

1. **Texto del inicio acortado** - Removida la referencia a "inmigrante de Bari"
2. **Formulario de contacto agregado** - Reemplaza la sección de WhatsApp
3. **FAQs eliminadas** - Removida la sección de preguntas frecuentes
4. **Productos combinados** - Almendrados y Quesitos ahora muestran "Chico/Grande"
5. **Grid centrado** - Los productos se centran cuando quedan 2 en la fila
6. **Logos de delivery** - Solo logos (sin botones ni texto), con hover tooltip
7. **CSS compilado** - Estilos actualizados y compilados con .delivery-logos

## Tareas Pendientes

### 1. Configurar Formulario de Contacto (URGENTE)

El formulario está listo pero necesita configuración:

**Opción A: Formspree (Recomendado - GRATIS)**
1. Ir a https://formspree.io
2. Crear cuenta gratuita con el email de Il Trovatore
3. Crear un nuevo formulario
4. Copiar el Form ID que te dan
5. En `js/main.js` línea 117, reemplazar `YOUR_FORM_ID` con tu ID
6. Los mensajes llegarán al email configurado

**Opción B: EmailJS**
1. Ir a https://www.emailjs.com
2. Crear cuenta gratuita
3. Configurar servicio de email
4. Actualizar el código en `js/main.js`

### 2. Carrusel de Imágenes en Inicio

Necesitas agregar varias imágenes para el carrusel del hero. Actualmente solo hay una imagen fija.

**Imágenes necesarias:**
- Guardar en `images/hero/` con nombres: `hero1.jpg`, `hero2.jpg`, `hero3.jpg`, etc.
- Tamaño recomendado: 1920x1080px
- Deben ser fotos atractivas de productos o la heladería

**Código a agregar:** (Te ayudaré cuando tengas las imágenes)

### 3. Iconos/Gráficos para Valores (Artesanal, Familiar, Calidad)

Actualmente la sección de valores solo tiene texto. Opciones:

**Opción A: Iconos SVG simples**
- Puedo crear iconos SVG personalizados
- O usar iconos de Font Awesome

**Opción B: Fotos pequeñas**
- Una foto de producción artesanal
- Una foto familiar
- Una foto de calidad/ingredientes

### 4. Logos de Apps de Delivery

Necesitas los logos de:
- PedidosYa (formato PNG o SVG)
- Rappi (formato PNG o SVG)

**Dónde conseguirlos:**
- Portal de Partners de PedidosYa
- Portal de Negocios de Rappi
- O puedo crear versiones simplificadas

### 5. Sabores - Descripciones Hover

Necesito las descripciones de cada sabor. Por ejemplo:
- Banana: "Helado cremoso de banana con trozos de fruta fresca"
- Chocolate: "Elaborado con cacao premium importado"
- etc.

**Formato necesario:**
Crear un archivo `sabores-descripciones.txt` con:
```
Banana: descripción
Banana Split: descripción
...
```

### 6. Imágenes para Secciones de Sabores

Necesitas 4 imágenes (1 por sección):
- `cremas.jpg` - Una foto representativa de sabores cremosos
- `chocolates.jpg` - Una foto de chocolates
- `dulce-de-leche.jpg` - Una foto de dulce de leche
- `frutales.jpg` - Una foto de sabores frutales

Guardar en: `images/sabores/`

### 7. Videos de YouTube

Necesito los URLs de los videos que querés agregar al footer.

Ejemplo:
- https://www.youtube.com/watch?v=XXXXXX
- https://www.youtube.com/watch?v=YYYYYY

### 8. Logo Duplicado

Mencionaste que hay un logo duplicado. Por favor indicame:
- ¿En qué página?
- ¿Cuál de los dos logos quiero mantener?

## Información AFADIA

Mencionaste que Il Trovatore forma parte de AFADIA. ¿Dónde querés que aparezca esta información?

Opciones:
- Footer (abajo de todas las páginas)
- Página de Historia
- Página "Sobre Nosotros" nueva

## Próximos Pasos

1. **Primero:** Configurar Formspree para que el formulario funcione
2. **Segundo:** Proveer las imágenes faltantes (hero, sabores, logos)
3. **Tercero:** Enviar las descripciones de sabores
4. **Cuarto:** URLs de videos de YouTube
5. **Quinto:** Implementar carrusel y demás mejoras visuales

## Contacto para Dudas

WhatsApp Business: 11 5160-6666
