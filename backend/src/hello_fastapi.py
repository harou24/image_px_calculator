"""This file is just to play with fastAPI"""

from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from src.img_px_calculator import getImgDimFromPath, getImgDimFromUrl
from pydantic import BaseModel
import uvicorn
import shutil
from src.enable_cors import allowCors
from src.utils import get_project_root


class ImgData(BaseModel):
    url: str

app = FastAPI()
allowCors(app)



""" ENDPOINTS """

@app.get("/")
def home():
    return {"Data": "Hello World !"}

@app.get("/get-size")
def getSizeHardCoded():
    url = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
    sizeInPx = get_nb_px_in_img_from_url(url)
    return {"size": sizeInPx}

@app.post("/get-size-from-url/")
def getSizeFromUrl(item: ImgData):
    sizeInPx = getImgDimFromUrl(item.url)
    return {"size": sizeInPx}

@app.post("/get-size-from-path/")
async def saveFile(file: UploadFile):
    path = "images/" + file.filename
    with open("images/" + file.filename, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    sizeInPx = getImgDimFromPath("images/" + file.filename)    
    root = get_project_root()
    src = str(root) + "/" + path
    return {"size": sizeInPx, "path": src}

@app.post("/uploadfile/")
async def createUploadFile(file: UploadFile):
    return {"filename": file.filename, "content_type": file.content_type, "file": file.file}

@app.post("/save-file/")
async def saveFile(file: UploadFile):
    path = "images/" + file.filename
    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"filename": file.filename, "content_type": file.content_type, "file": file.file}


""" RUNNING SERVER ON PORT 5000 """
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000)
