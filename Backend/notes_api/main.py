from fastapi import FastAPI
from notes_api.routers import notes, auth_routes
from notes_api.database import engine
from notes_api.models import Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="📝 Notes API",
    description="A simple Notes app with user auth and CRUD features",
    version="1.0.0",
)

# Mount routers
app.include_router(auth_routes.router, prefix="/auth", tags=["Auth"])
app.include_router(notes.router, tags=["Notes"])

@app.on_event("startup")
def on_startup():
    print("🚀 Notes API is live at http://127.0.0.1:8000 🚀")
