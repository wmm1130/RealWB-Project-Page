from pathlib import Path
from PIL import Image

IMG_DIR = Path("public/images/results")

img1 = Image.open(IMG_DIR / "monthly_volume.png")
img2 = Image.open(IMG_DIR / "event_duration.png")

target_height = max(img1.height, img2.height)

def resize_to_height(img, target_height):
    if img.height == target_height:
        return img
    new_width = int(img.width * target_height / img.height)
    return img.resize((new_width, target_height))

img1 = resize_to_height(img1, target_height)
img2 = resize_to_height(img2, target_height)

gap = 20
combined = Image.new("RGB", (img1.width + img2.width + gap, target_height), "white")
combined.paste(img1, (0, 0))
combined.paste(img2, (img1.width + gap, 0))

output_path = IMG_DIR / "combined_results.png"
combined.save(output_path)

print(output_path)