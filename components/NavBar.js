import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const NavBar = () => {
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
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
