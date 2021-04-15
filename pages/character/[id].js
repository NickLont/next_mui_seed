import { useQuery } from '@apollo/client'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import client from 'apollo-client'
import Character from 'components/Character'
import { GET_CHARACTERS_QUERY, GET_CHARACTER_QUERY } from 'graphQL/queries'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex'
  },
  characterContainer: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%'
  }
}))

const CharacterPage = () => {
  const classes = useStyles()
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_CHARACTER_QUERY, {
    variables: { id }
  })
  console.log('data: ', data)

  return (
    <div className={classes.container}>
      <Typography variant="h5" color="primary" component="p">
        Character Page
      </Typography>
      <div className={classes.characterContainer}>
        <Character />
      </div>
    </div>
  )
}

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: GET_CHARACTERS_QUERY
//   })
//   const paths = data.characters.results.map((character) => character.id)
//   console.log('paths: ', paths)

//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps(props) {
//   console.log('props: ', props)

//   const character = {}
//   return {
//     props: {
//       character
//     }
//   }
// }

export default CharacterPage
