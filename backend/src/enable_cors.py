from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:8080"]

def allowCors(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )