"""Module documentation goes here."""

from fastapi import FastAPI

print("FASTAPI")

app = FastAPI()


@app.get("/")
def home():
    return {"Data": "Hello World !"}
