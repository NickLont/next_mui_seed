import client from '../apollo-client'
import { GET_CHARACTERS_QUERY } from 'graphQL/queries'
import { makeStyles } from '@material-ui/core'

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
          <button
            key={character.id}
            className={classes.characterContainer}
            onClick={() => console.log(`Character id: ${character.id}`)}>
            <p>
              <b>{character.name}</b>
            </p>
            <p>
              {character.species}, {character.gender}
            </p>
            <img src={character.image} alt="" />
          </button>
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

export default CharactersPage
