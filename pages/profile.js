import { Typography } from '@material-ui/core'
import withSession from '../lib/session'

const ProfilePage = ({ user }) => {
  // const { user } = useUser()
  // const { user } = useUser({ redirectTo: '/login' })

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

export const getServerSideProps = withSession(async function ({ req, res }) {
  // Get the user's session based on the request
  const user = req.session.get('user')

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { user }
  }
})
