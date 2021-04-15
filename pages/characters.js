import PropTypes from 'prop-types'
import client from '../apollo-client'
import { GET_CHARACTERS_QUERY } from 'graphQL/queries'
import { makeStyles } from '@material-ui/core'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { default as MaterialLink } from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: theme.spacing(2)
  },
  characterContainer: {
    margin: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer'
    }
  }
}))

const CharactersPage = ({ characters }) => {
  const classes = useStyles()

  return (
    <>
      <p>Characters List, Statically Rendered:</p>
      <div className={classes.container}>
        {characters.map((character) => (
          <Link
            href={`/character/${character.id}`}
            key={character.id}
            value={character.id}
            passHref>
            <Card className={classes.characterContainer}>
              <CardContent>
                <p>
                  <b>{character.name}</b>
                </p>
                <p>
                  {character.species}, {character.gender}
                </p>
                <img src={character.image} alt="" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_CHARACTERS_QUERY
  })
  return {
    props: {
      characters: data.characters.results
    }, // will be passed to the page component as props
    revalidate: 300
  }
}

CharactersPage.propTypes = {
  characters: PropTypes.array
}

export default CharactersPage
