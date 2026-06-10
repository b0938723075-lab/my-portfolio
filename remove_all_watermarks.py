import sys
import os
from PIL import Image, ImageDraw

def process_file(fp):
    if not os.path.exists(fp):
        print(f"Skipping {fp}, not found.")
        return
    img = Image.open(fp).convert("RGB")
    width, height = img.size
    
    # Estimate watermark size relative to image size
    w_w = int(width * 0.15)
    w_h = int(height * 0.1)
    
    # Get color from nearby
    try:
        sample_x = width - w_w - 20
        sample_y = height - w_h - 20
        patch_color = img.getpixel((sample_x, sample_y))
    except:
        patch_color = (20, 20, 20)
        
    draw = ImageDraw.Draw(img)
    box = [width - w_w, height - w_h, width, height]
    draw.rectangle(box, fill=patch_color)
    
    # Save back
    img.save(fp, quality=100)
    print(f"Processed {fp}")

base_path = "c:\\Users\\User\\.gemini\\My Protfolio\\my-portfolio\\public"
files = [
    "timeline-spring.jpg",
    "timeline-summer.png",
    "timeline-dragonboat.jpg",
    "timeline-autumn.jpg",
    "timeline-midautumn.png"
]

for f in files:
    process_file(os.path.join(base_path, f))
