from pydantic import BaseModel, EmailStr

class RegisterSchema(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    email: EmailStr

    class Config:
        orm_mode = True
