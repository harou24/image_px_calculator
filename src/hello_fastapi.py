"""This file is just to play with fastAPI"""

from fastapi import FastAPI
from img_px_calculator import *
from pydantic import BaseModel
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


class Item(BaseModel):
    url: str


print("FASTAPI")

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"Data": "Hello World !"}

@app.get("/get-size")
def getSize():
    url = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
    sizeInPx = get_nb_px_in_img_from_url(url)
    return {"Size": sizeInPx}

@app.post("/get-size-from-url/")
def getSizeFromUrl(item: Item):
    sizeInPx = get_nb_px_in_img_from_url(item.url)
    return {"size": sizeInPx}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000)

