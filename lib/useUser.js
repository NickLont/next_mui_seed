import { useEffect, useState } from 'react'
import Router from 'next/router'

export default function useUser({ redirectTo = false, redirectIfFound = false } = {}) {
  //   const [user, setUser] = useState(null)
  const [user, setUser] = useState({
    isLoggedIn: true
  })

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    const checkUserData = () => {
      const item = localStorage.getItem('user')

      // here examines external data
      if (item) {
        setUser(JSON.parse(item))
      } else if (!item) {
        setUser(null)
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
    if (redirectTo && !redirectIfFound && !user?.isLoggedIn) {
      Router.push(redirectTo)
    }
    if (!redirectTo || !user) return
  }, [user, redirectIfFound, redirectTo])

  return { user, logout }
}
