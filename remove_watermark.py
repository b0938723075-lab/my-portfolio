import sys
from PIL import Image, ImageDraw

def remove_watermark(input_path, output_path):
    img = Image.open(input_path)
    width, height = img.size
    
    # The watermark is in the bottom right corner.
    # Let's get the color from a nearby pixel to use as a patch.
    # The area is mostly dark shadow.
    try:
        patch_color = img.getpixel((width - 80, height - 80))
    except:
        patch_color = (20, 20, 20) # fallback dark color
        
    draw = ImageDraw.Draw(img)
    # Draw a rectangle over the bottom right corner
    # Assuming watermark is max 60x60 pixels
    box = [width - 60, height - 60, width, height]
    draw.rectangle(box, fill=patch_color)
    
    img.save(output_path)
    print(f"Successfully processed image and saved to {output_path}")

if __name__ == "__main__":
    in_file = sys.argv[1]
    out_file = sys.argv[2] if len(sys.argv) > 2 else "public/output.jpg"
    remove_watermark(in_file, out_file)
