import { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

export const AuthGiver = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [role, setRole] = useState(null)

  useEffect(() => {
    const teacher = sessionStorage.getItem("isTeacherLoggedIn") 

    if (teacher === "true") { 
      setUser({
        email: "teacher@gmail.com",
        uid: "teacher-frontend-only"
      })
      setRole("teacher")
      setLoading(false)
      return
    }
        const admin = sessionStorage.getItem("isAdminLoggedIn") 

    if (admin === "true") { 
      setUser({
        email: "admin@gmail.com",
        uid: "admin-frontend-only"
      })
      setRole("admin")
      setLoading(false)
      return
    }


    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setRole("student") 
      } else {
        setUser(null)
        setRole(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthGiver.Provider value={{ user, loading, role }}>
      {children}
    </AuthGiver.Provider>
  )
}

export default AuthProvider
