import { Typography } from '@material-ui/core'
import client from 'apollo-client'
import Character from 'components/Character'
import { GET_CHARACTERS_QUERY, GET_CHARACTER_QUERY } from 'graphQL/queries'
import { makeStyles } from '@material-ui/core'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  characterContainer: {
    alignSelf: 'center',
    paddingTop: theme.spacing(10)
  }
}))

const CharacterPage = ({ character }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Head>
        <title>{character.name}</title>
        <meta property="og:title" key="title" />
      </Head>
      <Typography variant="h5" color="primary" component="p">
        Character Page
      </Typography>
      <div className={classes.characterContainer}>
        <Character character={character} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_CHARACTERS_QUERY
  })
  const paths = data.characters.results.map((character) => ({ params: { id: character.id } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_CHARACTER_QUERY,
    variables: params
  })
  const { character } = data

  return {
    props: {
      character
    }
  }
}

export default CharacterPage
