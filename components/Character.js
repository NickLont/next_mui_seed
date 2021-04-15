import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345
  },
  media: {
    height: 300
  },
  infoBlock: {
    marginBottom: theme.spacing(1)
  },
  statusContainer: {
    display: 'flex',
    margin: theme.spacing(1, 0, 2),
    alignItems: 'center'
  },
  icon: {
    marginBottom: 4,
    marginRight: 4
  }
}))

const InfoBlock = ({ name, value }) => {
  const classes = useStyles()
  return (
    <Typography variant="body1" color="textSecondary" component="p" className={classes.infoBlock}>
      {`${name}: `}
      <Typography color="primary" component="span">
        {`${value}`}
      </Typography>
    </Typography>
  )
}

InfoBlock.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}

const Character = ({ character }) => {
  const classes = useStyles()

  if (!character) return null

  const firstEpisode = `${character?.episode[0]?.episode}  ${character?.episode[0]?.name}`

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia className={classes.media} image={character.image} title={character.name} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {character.name}
          </Typography>
          <div className={classes.statusContainer}>
            <FiberManualRecordRoundedIcon
              fontSize="small"
              style={{ color: character.status === 'Alive' ? '#55CC44' : '#d63d2e' }}
              className={classes.icon}
            />
            <Typography variant="body1" color="primary">
              {character.status}
            </Typography>
          </div>
          <InfoBlock name="Gender" value={character.gender} />
          <InfoBlock name="Species" value={character.species} />
          <InfoBlock name="Planet of origin" value={character?.origin?.name} />
          <InfoBlock name="Last known location" value={character?.location?.name} />
          <InfoBlock name="First seen in" value={firstEpisode} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

Character.propTypes = {
  character: PropTypes.object
}

export default Character
