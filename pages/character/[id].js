import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    background: 'blue'
  }
}))

const CharactersPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p>Characters Page</p>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

export default CharactersPage
