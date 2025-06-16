# 📝 FastNotes App

A fullstack note-taking web application built with **FastAPI** (backend) and **Vite + React** (frontend). Users can register, log in, and manage their personal notes securely. The app features JWT-based authentication and a responsive UI.

---

## 🌐 Live Demo

🔗 [Visit App](https://your-vercel-deployment-url.vercel.app)

---

## 🏗️ Tech Stack

### Backend (FastAPI)
- **FastAPI** – High-performance Python web framework
- **SQLAlchemy** – ORM for database models
- **JWT** – Token-based authentication
- **SQLite / PostgreSQL** – Configurable DB engine

### Frontend (Vite + React)
- **React** – Component-based UI
- **Vite** – Lightning-fast dev server and build tool
- **Axios** – API communication
- **React Router v6** – SPA routing

---

notes-app/
│
├── Backend/
│   ├── notes_api/
│   │   ├── __init__.py
│   │   ├── main.py             # 🚀 App entry point
│   │   ├── config.py           # App settings (SECRET_KEY, etc.)
│   │   ├── database.py         # SQLAlchemy DB engine + session logic
│   │   ├── models.py           # SQLAlchemy models (User, Note)
│   │   ├── schemas.py          # Pydantic schemas for validation
│   │   ├── auth_utils.py       # Password hashing + JWT handling
│   │   └── routers/
│   │       ├── __init__.py
│   │       ├── auth_routes.py  # /register, /login, /profile
│   │       └── notes.py        # CRUD for notes
│   ├── requirements.txt
│   └── (Optional folders: venv/, migrations/, logs/)
│
├── Frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Notes.jsx
│   │   ├── services/
│   │   │   └── api.js          # Axios-based API interactions
│   │   ├── App.js
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── (Optional: .env, dist/, node_modules/)
│
└── README.md


## 🔐 Features

- ✅ User Registration & Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Create, Read, Update, Delete Notes
- ✅ Axios-based API integration
- ✅ Fully responsive UI

---

## 🚀 Deployment

### Backend (Render)

1. Create a `render.yaml` with:

services:
  - type: web
    name: notes-api
    buildCommand: "pip install -r requirements.txt"
    startCommand: "uvicorn notes_api.main:app --host 0.0.0.0 --port 8000"
    envVars:
      - key: DATABASE_URL
        fromDatabase:
          name: notes-db
          property: connectionString
      - key: SECRET_KEY
        value: your-secret
      - key: PYTHON_VERSION
        value: "3.11"

databases:
  - name: notes-db
    databaseName: notes
    user: notes_user

2. Push to GitHub and import repo in https://render.com

---

### Frontend (Vercel)

1. Go to https://vercel.com
2. Link your GitHub repo
3. Configure:

   * **Framework**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`

4. Add environment variable:

   VITE_API_BASE_URL=https://<your-backend-url>

---

## 🧪 API Endpoints

| Method | Route            | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `/auth/register` | Register user      |
| POST   | `/auth/login`    | Log in and get JWT |
| GET    | `/auth/profile`  | Get user profile   |
| GET    | `/notes/`        | Get all notes      |
| POST   | `/notes/`        | Create a note      |
| PUT    | `/notes/{id}`    | Update a note      |
| DELETE | `/notes/{id}`    | Delete a note      |

---

## 🛠️ Setup Locally

### Backend

cd Backend  
python -m venv venv  
source venv/bin/activate  # or venv\Scripts\activate on Windows  
pip install -r requirements.txt  
uvicorn notes_api.main:app --reload

### Frontend

cd Frontend  
npm install  
npm run dev

---

## 👤 Author

* https://github.com/SimcoD-Vij

---

## 📜 License

MIT License – use it, fork it, star it, break it, just don’t sue me.
