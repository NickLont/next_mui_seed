import PropTypes from 'prop-types'
import NavBar from 'components/NavBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
