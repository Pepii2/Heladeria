import os
import shutil
from pathlib import Path

# Base directory
base_dir = r'c:\Users\Pedro Nassif\Documents\GitHub\Personal\Heladeria'
images_dir = os.path.join(base_dir, 'images')

# Images being used in the website
used_images = [
    # Logo
    'LogoTrovatore.png',
    
    # Hero/Headers
    'Hero Banner.jpg',
    'family3.JPG',
    'HISTORIA.JPG',
    'famili2.JPG',
    'product 2.JPG',
    'product3.JPG',
    'product1.JPG',
    
    # Productos
    'productos/vasito chico 1.JPG',
    'productos/vasito grande.JPG',
    'productos/Tres-cucuruchos.jpg',
    'productos/cuarto-de-helado.jpg',
    'productos/medio kilo.JPG',
    'productos/kilo-de-helado.jpg',
    'productos/postre-almendrado-grande.jpg',
    'productos/chocotorta-helada.jpg',
    'productos/torta-nutella.jpg',
    'productos/ttorta-oreo.jpg',
    'productos/postre-quesito-grande.jpg',
    'productos/postre-cereza.jpg',
    'productos/postre-sambayon.jpg',
    'productos/postre-clasico.jpg',
    'productos/postre-dolka.jpg',
    'productos/torta-pistacho.jpg',
    'productos/torta-iltrovatore.jpg',
    
    # Logos
    'logos/pedidosya.png',
    'logos/rappi.png',
    
    # Placeholder
    'placeholder.svg',
]

# Normalize paths
used_images_normalized = [os.path.normpath(os.path.join(images_dir, img)) for img in used_images]

# Create new consolidated images folder
new_images_dir = os.path.join(base_dir, 'images_consolidated')
os.makedirs(new_images_dir, exist_ok=True)

# Walk through all files in images directory
all_images = []
for root, dirs, files in os.walk(images_dir):
    for file in files:
        full_path = os.path.join(root, file)
        all_images.append(full_path)

# Copy used images to consolidated folder
copied_files = []
for used_img in used_images_normalized:
    if os.path.exists(used_img):
        # Get just the filename
        filename = os.path.basename(used_img)
        dest = os.path.join(new_images_dir, filename)
        
        # Handle duplicates by adding a number
        counter = 1
        base_name, ext = os.path.splitext(filename)
        while os.path.exists(dest):
            dest = os.path.join(new_images_dir, f"{base_name}_{counter}{ext}")
            counter += 1
        
        shutil.copy2(used_img, dest)
        copied_files.append((used_img, dest))
        print(f"Copied: {os.path.relpath(used_img, base_dir)} -> {os.path.relpath(dest, base_dir)}")

# Find unused images
unused_images = []
for img in all_images:
    if img not in used_images_normalized and not any(img.startswith(os.path.dirname(used)) for used in used_images_normalized if '/' in used or '\\' in used):
        # Check if it's actually unused
        rel_path = os.path.relpath(img, images_dir)
        if not any(rel_path.replace('\\', '/') == used.replace('\\', '/') for used in used_images):
            unused_images.append(img)

print(f"\n\nTotal images found: {len(all_images)}")
print(f"Images in use: {len(used_images)}")
print(f"Images copied: {len(copied_files)}")
print(f"\nUnused images ({len(unused_images)}):")
for img in unused_images[:20]:  # Show first 20
    print(f"  - {os.path.relpath(img, base_dir)}")
if len(unused_images) > 20:
    print(f"  ... and {len(unused_images) - 20} more")
