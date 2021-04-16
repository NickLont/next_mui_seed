import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import useUser from 'lib/useUser'
import { Avatar } from '@material-ui/core'

const NavBar = () => {
  const { user, logout } = useUser({ redirectTo: '/login' })

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
        {!user && (
          <Button color="inherit">
            <Link href="/login">
              <Typography variant="subtitle1">Login</Typography>
            </Link>
          </Button>
        )}
        {user && (
          <div style={{ marginLeft: 'auto' }}>
            <Button color="inherit">
              <Link href="/profile">
                <Typography
                  variant="subtitle1"
                  style={{ textTransform: 'none' }}>{`Profile ${user.username}`}</Typography>
              </Link>
              <Avatar alt="Remy Sharp" src={user.avatarUrl} style={{ marginLeft: 8 }} />
            </Button>
            <Button color="inherit" onClick={logout}>
              <Typography variant="subtitle1" style={{ textTransform: 'none' }}>
                Logout
              </Typography>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
