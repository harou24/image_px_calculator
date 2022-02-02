"""This file is just to play with fastAPI"""

from fastapi import FastAPI

print("FASTAPI")

app = FastAPI()


@app.get("/")
def home():
    return {"Data": "Hello World !"}

