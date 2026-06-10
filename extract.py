import fitz
doc = fitz.open("public/優化-時光咖啡聽.pdf")
page = doc.load_page(0)
pix = page.get_pixmap(dpi=150)
pix.save("public/cafe-cover.jpg")
print("Saved cafe-cover.jpg")
