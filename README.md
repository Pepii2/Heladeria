# Heladería Artesanal

Sitio web clásico y artesanal para una heladería familiar fundada en 1963.

## Tecnologías

- HTML5
- Bulma CSS Framework
- SASS
- Vanilla JavaScript

## Instalación

```bash
# Instalar dependencias
npm install
```

## Desarrollo

```bash
# Compilar SASS en modo watch (automático al guardar cambios)
npm run dev

# En otra terminal, servir el sitio localmente
python -m http.server 8000
```

Abrir http://localhost:8000 en el navegador.

## Compilación para Producción

```bash
# Compilar SASS a CSS minificado
npm run build
```

## Estructura del Proyecto

```
/
├── index.html              # Página de inicio
├── productos.html          # Página de productos
├── historia.html           # Historia de la heladería
├── contacto.html           # Contacto
├── sass/                   # Archivos SASS fuente
│   ├── main.scss           # Punto de entrada
│   ├── _variables.scss     # Variables personalizadas de Bulma
│   └── _custom.scss        # Estilos personalizados
├── css/                    # CSS compilado
├── js/                     # JavaScript
├── images/                 # Imágenes
│   ├── historia/           # Fotos históricas
│   └── productos/          # Fotos de productos
└── assets/                 # Otros recursos (logo, etc.)
```

## Paleta de Colores

- **Primario**: Marrón cálido (#8B7355)
- **Secundario**: Dorado vintage (#D4AF37)
- **Fondo**: Crema (#FFF8E7)
- **Acentos**: Beige (#F5E6D3)

## Características

- Diseño responsive con Bulma
- Estética clásica y nostálgica
- Sin e-commerce (solo enlaces a PedidosYa y Rappi)
- Formulario de contacto
- Integración con Google Drive para actualizar productos

## Despliegue

1. Ejecutar `npm run build`
2. Subir: HTML, CSS, JS, images, assets
3. No subir: node_modules, sass/

## Más Información

Ver [CLAUDE.md](CLAUDE.md) para documentación completa del proyecto.
