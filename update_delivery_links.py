import re

# Files to update
html_files = [
    r'c:\Users\Pedro Nassif\Documents\GitHub\Personal\Heladeria\index.html',
    r'c:\Users\Pedro Nassif\Documents\GitHub\Personal\Heladeria\contacto.html',
    r'c:\Users\Pedro Nassif\Documents\GitHub\Personal\Heladeria\sabores.html',
    r'c:\Users\Pedro Nassif\Documents\GitHub\Personal\Heladeria\productos.html'
]

# Placeholder links - user needs to provide actual links
pedidosya_link = "https://www.pedidosya.com.ar/restaurantes/buenos-aires/il-trovatore-menu"
rappi_link = "https://www.rappi.com.ar/restaurantes/il-trovatore"

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace PedidosYa links
    content = re.sub(
        r'<a href="#" target="_blank" rel="noopener" title="Pedí en PedidosYa">',
        f'<a href="{pedidosya_link}" target="_blank" rel="noopener" title="Pedí en PedidosYa">',
        content
    )
    
    # Replace Rappi links
    content = re.sub(
        r'<a href="#" target="_blank" rel="noopener" title="Pedí en Rappi">',
        f'<a href="{rappi_link}" target="_blank" rel="noopener" title="Pedí en Rappi">',
        content
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {file_path}")

print("\nAll delivery links updated!")
print(f"PedidosYa: {pedidosya_link}")
print(f"Rappi: {rappi_link}")
print("\nNOTE: Please verify these links are correct or provide the actual URLs.")
