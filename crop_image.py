import sys
from PIL import Image

def crop_bottom(input_path, output_path, crop_pixels=80):
    img = Image.open(input_path)
    width, height = img.size
    
    # Crop the bottom by crop_pixels
    cropped_img = img.crop((0, 0, width, height - crop_pixels))
    
    cropped_img.save(output_path, quality=100)
    print(f"Successfully cropped {crop_pixels}px from the bottom and saved to {output_path}")

if __name__ == "__main__":
    crop_bottom("public/me.jpg", "public/profile.jpg")
