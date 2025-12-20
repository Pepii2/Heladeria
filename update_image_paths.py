import os
import re

base_dir = r'c:\Users\Pedro Nassif\Documents\GitHub\Personal\Heladeria'

# HTML files to update
html_files = [
    'index.html',
    'productos.html',
    'sabores.html',
    'historia.html',
    'contacto.html'
]

# Mapping of old paths to new paths
path_mappings = {
    'images/LogoTrovatore.png': 'images/LogoTrovatore.png',
    'images/Hero Banner.jpg': 'images/Hero Banner.jpg',
    'images/family3.JPG': 'images/family3.JPG',
    'images/HISTORIA.JPG': 'images/HISTORIA.JPG',
    'images/famili2.JPG': 'images/famili2.JPG',
    'images/product 2.JPG': 'images/product 2.JPG',
    'images/product3.JPG': 'images/product3.JPG',
    'images/product1.JPG': 'images/product1.JPG',
    'images/productos/vasito chico 1.JPG': 'images/vasito chico 1.JPG',
    'images/productos/vasito grande.JPG': 'images/vasito grande.JPG',
    'images/productos/Tres-cucuruchos.jpg': 'images/Tres-cucuruchos.jpg',
    'images/productos/cuarto-de-helado.jpg': 'images/cuarto-de-helado.jpg',
    'images/productos/medio kilo.JPG': 'images/medio kilo.JPG',
    'images/productos/kilo-de-helado.jpg': 'images/kilo-de-helado.jpg',
    'images/productos/postre-almendrado-grande.jpg': 'images/postre-almendrado-grande.jpg',
    'images/productos/chocotorta-helada.jpg': 'images/chocotorta-helada.jpg',
    'images/productos/torta-nutella.jpg': 'images/torta-nutella.jpg',
    'images/productos/ttorta-oreo.jpg': 'images/ttorta-oreo.jpg',
    'images/productos/postre-quesito-grande.jpg': 'images/postre-quesito-grande.jpg',
    'images/productos/postre-cereza.jpg': 'images/postre-cereza.jpg',
    'images/productos/postre-sambayon.jpg': 'images/postre-sambayon.jpg',
    'images/productos/postre-clasico.jpg': 'images/postre-clasico.jpg',
    'images/productos/postre-dolka.jpg': 'images/postre-dolka.jpg',
    'images/productos/torta-pistacho.jpg': 'images/torta-pistacho.jpg',
    'images/productos/torta-iltrovatore.jpg': 'images/torta-iltrovatore.jpg',
    'images/logos/pedidosya.png': 'images/pedidosya.png',
    'images/logos/rappi.png': 'images/rappi.png',
    'images/placeholder.svg': 'images/placeholder.svg',
}

for html_file in html_files:
    file_path = os.path.join(base_dir, html_file)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all image paths
    for old_path, new_path in path_mappings.items():
        content = content.replace(old_path, new_path)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {html_file}")

print("\nAll HTML files updated successfully!")
