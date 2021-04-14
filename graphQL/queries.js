import { gql } from '@apollo/client'

const GET_CHARACTERS_QUERY = gql`
  query {
    characters {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          dimension
        }
        location {
          id
          name
        }
        image
        episode {
          id
          name
          episode
        }
        created
      }
    }
  }
`

export { GET_CHARACTERS_QUERY }
