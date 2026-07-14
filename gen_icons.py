from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs("public/icons", exist_ok=True)

def make_icon(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    margin = int(size * 0.06)
    draw.ellipse([margin, margin, size - margin, size - margin], fill=(0, 48, 115, 255))
    font_size = int(size * 0.5)
    try:
        font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", font_size)
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), "B", font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) // 2
    y = (size - th) // 2 - bbox[1]
    draw.text((x, y), "B", fill=(255, 255, 255, 255), font=font)
    return img

def make_svg():
    return '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\n  <circle cx="32" cy="32" r="32" fill="#003073"/>\n  <text x="32" y="44" text-anchor="middle" font-family="system-ui,sans-serif" font-size="38" font-weight="700" fill="#ffffff">B</text>\n</svg>'

for s in [192, 512]:
    make_icon(s).save("public/icons/icon-%d.png" % s, "PNG")
    print("Created public/icons/icon-%d.png" % s)

with open("public/favicon.svg", "w", encoding="utf-8") as f:
    f.write(make_svg())
print("Created public/favicon.svg")
