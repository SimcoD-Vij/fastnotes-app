import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8000', // Change if deployed
})

// 🌐 Register a new user
export const registerUser = (form) => API.post('/auth/register', form)

// 🔐 Login user with OAuth2-compatible structure
export const loginUser = (form) =>
  API.post('/auth/login', new URLSearchParams(form), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })

// 👤 Get current user profile
export const getProfile = (token) =>
  API.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  })

// 📝 (Optional) Get notes (to be implemented in Notes.jsx)
export const getNotes = (token) =>
  API.get('/notes/', {
    headers: { Authorization: `Bearer ${token}` },
  })
