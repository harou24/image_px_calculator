"""This file is just to play with fastAPI"""

from fastapi import FastAPI
from src.img_px_calculator import get_nb_px_in_img_from_url

print("FASTAPI")

app = FastAPI()


@app.get("/")
def home():
    return {"Data": "Hello World !"}

@app.get("/getsize")
def getSize():
    url = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
    sizeInPx = get_nb_px_in_img_from_url(url)
    return {"Size": sizeInPx}

