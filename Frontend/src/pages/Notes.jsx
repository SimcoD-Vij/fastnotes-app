import { useEffect, useState } from 'react'
import { getProfile, getNotes } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Notes() {
  const [user, setUser] = useState(null)
  const [notes, setNotes] = useState([])
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token')
      if (!token) return navigate('/login')

      try {
        const userData = await getProfile(token)
        setUser(userData)

        const notesData = await getNotes(token)
        setNotes(notesData)
      } catch {
        setError('Session expired. Please log in again.')
        setTimeout(() => navigate('/login'), 1500)
      }
    }

    fetchData()
  }, [navigate])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email}</h1>
      <h2 className="text-xl font-semibold mb-2">Your Notes:</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      {notes.length === 0 && !error ? (
        <p className="text-gray-600">No notes found.</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">{note.title}</h3>
              <p className="text-gray-700">{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
