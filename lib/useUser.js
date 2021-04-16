import { useEffect, useState } from 'react'
import Router from 'next/router'

export default function useUser({ redirectTo = false, redirectIfFound = false } = {}) {
  const [user, setUser] = useState(null)
  //   let user
  //   if (typeof window === 'undefined') {
  //     user = null
  //   } else {
  //     user = JSON.parse(localStorage.getItem('user')) || null
  //   }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || null
    setUser(user)
  }, [])

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    console.log('user: ', user)
    console.log('user: ', Boolean(user))
    console.log('Boolean(!user?.isLoggedIn): ', Boolean(!user?.isLoggedIn))
    console.log('redirectIfFound: ', redirectIfFound)
    console.log('redirectTo: ', redirectTo)
    console.log('1: ', redirectTo && !redirectIfFound && !user?.isLoggedIn)

    // if (!redirectTo || !user) return

    // if (!user) {
    //   console.log('here2 ')
    // }

    if (
      // If redirectTo is set, redirect if the user was not found.
      redirectTo &&
      !redirectIfFound &&
      !user?.isLoggedIn
    ) {
      console.log('here')
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user }
}
