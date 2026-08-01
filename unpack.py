import json
import base64
import os
import gzip

html_path = "PrepzoLM Site.html"
output_dir = "unpacked_prepzolm"
os.makedirs(output_dir, exist_ok=True)

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Using a simpler parsing since BeautifulSoup might load the entire 15MB file which is slow
# Let's find script tags with regex or use BeautifulSoup
from bs4 import BeautifulSoup
soup = BeautifulSoup(content, 'html.parser')

manifest_el = soup.find('script', type='__bundler/manifest')
template_el = soup.find('script', type='__bundler/template')
ext_res_el = soup.find('script', type='__bundler/ext_resources')

if not manifest_el or not template_el:
    print("Error: Missing manifest or template")
    exit(1)

manifest = json.loads(manifest_el.string)
template = json.loads(template_el.string)
ext_resources = json.loads(ext_res_el.string) if ext_res_el else []

print(f"Manifest keys (uuids): {list(manifest.keys())}")
print(f"Ext resources: {ext_resources}")

# Decode and write manifest assets
blob_urls = {}
for uuid, entry in manifest.items():
    mime = entry['mime']
    data = entry['data']
    compressed = entry.get('compressed', False)
    
    # Base64 decode
    bytes_data = base64.b64decode(data)
    
    if compressed:
        try:
            bytes_data = gzip.decompress(bytes_data)
            print(f"Decompressed: {uuid}")
        except Exception as e:
            print(f"Failed to decompress {uuid}: {e}")
    
    ext = mime.split('/')[-1]
    if 'javascript' in mime or 'json' in mime:
        ext = 'js'
    elif 'css' in mime:
        ext = 'css'
    elif 'svg' in mime:
        ext = 'svg'
    elif 'png' in mime:
        ext = 'png'
    elif 'jpeg' in mime:
        ext = 'jpg'
    elif 'mp4' in mime:
        ext = 'mp4'
        
    filename = f"{uuid}.{ext}"
    filepath = os.path.join(output_dir, filename)
    with open(filepath, 'wb') as out_f:
        out_f.write(bytes_data)
    print(f"Wrote asset: {filename} ({len(bytes_data)} bytes, mime: {mime})")

# Write template (main page)
with open(os.path.join(output_dir, "template.html"), "w", encoding='utf-8') as out_f:
    out_f.write(template)

print("Done unpacking!")
