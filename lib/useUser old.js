import { useEffect, useState } from 'react'
import Router from 'next/router'

export default function useUser({ redirectTo = false, redirectIfFound = false } = {}) {
  //   const [user, setUser] = useState(null)
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  const logout = () => {
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    setUser(null)
  }

  useEffect(() => {
    const checkUserData = () => {
      const item = localStorage.getItem('user')

      // here examines external data
      if (item) {
        setUser(JSON.parse(item))
        setIsAuthenticated(true)
      } else if (!item) {
        setUser(null)
        setIsAuthenticated(false)
      }
    }
    checkUserData()

    window.addEventListener('storage', () => {
      checkUserData()
    })

    return () => {
      window.removeEventListener('storage', checkUserData)
    }
  }, [])

  useEffect(() => {
    if (redirectTo && !redirectIfFound && isAuthenticated === false) {
      Router.push(redirectTo)
    }
    if (!redirectTo || !user) return
  }, [user, redirectIfFound, redirectTo])

  return { user, logout, isAuthenticated }
}
