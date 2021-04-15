import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#__next': {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  })
)

const GlobalStyles = () => {
  useStyles()

  return null
}

export default GlobalStyles
