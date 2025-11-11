# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website for a family-run ice cream shop (heladería) founded in 1963 by an Italian immigrant from Bari. The site emphasizes the artisanal, nostalgic heritage and classic style without e-commerce functionality.

**Key Objective**: Create a simple, classic, visually warm website that reflects the family history and artisanal style - NO e-commerce functionality.

## Visual Identity

### Style
- Classic, artisanal, nostalgic aesthetic
- Vintage typography inspired by the current Trobatores website
- Simple logo based on existing typography with vintage feel

### Color Palette
- Cream, beige, soft/warm tones
- Cohesive with 1960s nostalgic feel

### Images
- Black and white family photos (grandfather, founding era)
- Product photos (ice cream flavors, ice cream cakes, sundaes) - client will upload to Drive

## Site Structure

### 1. Home (Inicio)
- Hero image or collage with artisanal aesthetic
- Brief description highlighting: "desde 1963", "artesanal", "fundada por un tano que vino de Bari"
- Quick access buttons to PedidosYa and Rappi

### 2. Products (Productos)
Organized into subsections:
- **Ice cream flavors** (Sabores de helado)
- **Ice cream cakes** (Tortas heladas)
- **Sundaes** (Copas heladas)

Each product displays: photo, name, optional price (loaded from Drive)

### 3. History (Historia)
- Narrative text about founding in 1963 by Italian grandfather
- Vintage photos integrated with storytelling
- Visual style consistent with the narrative

### 4. Contact (Contacto)
- WhatsApp number with direct link button (opens WhatsApp app/web)
- Buttons to PedidosYa and Rappi for orders
- Simple contact form for complaints, suppliers, or partners (sends email)
  - Fields: name, reason/subject, message

## Key Functional Requirements

### What This Site DOES NOT Have
- **No shopping cart**
- **No e-commerce/checkout**
- **No payment processing**

### What This Site DOES Have
- Direct links to PedidosYa and Rappi for ordering
- WhatsApp contact button
- Email contact form
- Manual Drive integration for product updates

### Drive Integration
Products can be updated by reading from a shared Google Drive document/spreadsheet. This should be implemented as a manual or simple automated sync - not complex backend infrastructure.

## Technology Stack

- **HTML5** - Semantic markup
- **Bulma CSS Framework** - Modern CSS framework based on Flexbox
- **SASS** - CSS preprocessor for better styling organization
- **Vanilla JavaScript** - No framework dependencies

### Project Structure
```
/
├── index.html              # Home page
├── productos.html          # Products page
├── historia.html           # History page
├── contacto.html           # Contact page
├── package.json            # Node dependencies
├── sass/
│   ├── main.scss           # Main SASS entry point
│   ├── _variables.scss     # Custom Bulma variable overrides
│   └── _custom.scss        # Custom styles on top of Bulma
├── css/
│   └── styles.css          # Compiled CSS (generated from SASS)
├── js/
│   └── main.js             # Main JavaScript
├── images/
│   ├── historia/           # Historical B&W photos
│   └── productos/          # Product photos
└── assets/
    └── logo.svg            # Logo file
```

## Development Commands

### Setup (First Time)
```bash
# Install dependencies (Bulma and SASS)
npm install
```

### Development
```bash
# Watch SASS files and compile on changes
npm run dev
# or
npm run sass

# Then in another terminal, serve locally with Python
python -m http.server 8000

# Or with Node.js (if http-server is installed)
npx http-server -p 8000
```

Then open http://localhost:8000 in your browser.

### Build for Production
```bash
# Compile SASS to minified CSS
npm run build
# or
npm run sass:build
```

### Deployment
1. Run `npm run build` to compile SASS
2. Upload HTML, CSS, JS, images, and assets folders to hosting
3. Can use GitHub Pages, Netlify, or Vercel for free static hosting
4. **Note**: Do NOT upload node_modules or sass folders to production

## Working with Bulma and SASS

### Bulma Customization
- Custom color variables are defined in [sass/_variables.scss](sass/_variables.scss)
- These variables override Bulma's default colors before compilation
- Primary color: Warm brown (#8B7355) for vintage feel
- Secondary: Vintage gold (#D4AF37)
- Background: Cream (#FFF8E7) and beige tones

### Custom Styles
- Additional custom styles are in [sass/_custom.scss](sass/_custom.scss)
- This file contains site-specific components built on top of Bulma
- Includes: product cards, history blocks, contact forms, etc.

### Making Style Changes
1. Edit SASS files in the `sass/` folder (NOT the compiled CSS)
2. SASS will auto-compile if you're running `npm run dev`
3. Test changes in browser
4. Commit both SASS source files and compiled CSS

### Using Bulma Classes
The HTML uses Bulma's utility classes extensively:
- Layout: `.container`, `.section`, `.columns`, `.column`
- Components: `.navbar`, `.card`, `.button`, `.hero`
- Modifiers: `.is-primary`, `.is-large`, `.has-text-centered`
- Grid: Bulma uses a 12-column flexbox grid system

Refer to [Bulma documentation](https://bulma.io/documentation/) for available classes.

## Third-Party Services

- **Contact Form**: Use Formspree, EmailJS, or Netlify Forms (no backend needed)
- **Drive Integration**: Fetch product data from Google Sheets using the public CSV export URL or Google Sheets API with client-side JavaScript
- **Hosting**: GitHub Pages, Netlify, Vercel, or traditional web hosting

## Typography Reference

The typography should match or be inspired by the current Trobatores website. When implementing, research the Trobatores site to identify the exact font family or find similar vintage/classic alternatives.

## Content Language

All website content is in Spanish (Argentina/regional dialect).
