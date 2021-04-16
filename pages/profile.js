import { Typography } from '@material-ui/core'
import useUser from 'lib/useUser'

const ProfilePage = () => {
  const { user } = useUser({ redirectTo: '/login' })

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Typography>Your profile</Typography>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default ProfilePage
