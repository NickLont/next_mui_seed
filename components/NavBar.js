import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import useUser from 'lib/useUser'
import fetchJson from 'lib/fetchJson'
import { Avatar } from '@material-ui/core'
import { useRouter } from 'next/router'

const NavBar = () => {
  const { user, mutateUser } = useUser({ redirectTo: '/login' })
  const router = useRouter()

  const logout = async (e) => {
    e.preventDefault()
    await mutateUser(fetchJson('/api/logout'))
    router.push('/login')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">
          <Link href="/">
            <Typography variant="subtitle1">Home</Typography>
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/characters">
            <Typography variant="subtitle1">Characters</Typography>
          </Link>
        </Button>
        {user?.isLoggedIn && (
          <Button color="inherit">
            <Link href="/profile">
              <Typography variant="subtitle1">Profile</Typography>
            </Link>
          </Button>
        )}
        {!user?.isLoggedIn && (
          <Button color="inherit">
            <Link href="/login">
              <Typography variant="subtitle1">Login</Typography>
            </Link>
          </Button>
        )}
        {user?.isLoggedIn && (
          <div style={{ marginLeft: 'auto' }}>
            <Button color="inherit" onClick={logout}>
              <Typography variant="subtitle1" style={{ textTransform: 'none' }}>
                {`Logout ${user?.login}`}
              </Typography>
              <Avatar alt="Remy Sharp" src={user?.avatarUrl} style={{ marginLeft: 16 }} />
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
