from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def root_notes():
    return {"message": "Notes route working!"}
