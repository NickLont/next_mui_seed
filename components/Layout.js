import PropTypes from 'prop-types'
import NavBar from 'components/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import ProgressBar from 'components/ProgressBar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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
  const router = useRouter()
  const [routeChanging, setRouteChanging] = useState(false)

  const handleRouteChangeStart = () => {
    setRouteChanging(true)
  }

  const handleRouteChangeFinish = () => {
    setRouteChanging(false)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeFinish)
    router.events.on('routeChangeError', handleRouteChangeFinish)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', () => console.log('routeChangeComplete'))
      router.events.off('routeChangeError', handleRouteChangeFinish)
    }
  }, [router.events])

  return (
    <div className={classes.container}>
      <NavBar />
      <ProgressBar isAnimating={routeChanging} />
      <div>{children}</div>
    </div>
  )
}

export default Layout
