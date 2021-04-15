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

const GET_CHARACTER_QUERY = gql`
  query GET_CHARACTER_QUERY($id: ID!) {
    character(id: $id) {
      id
      name
      species
      gender
      origin {
        id
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
      image
      status
      location {
        id
        name
      }
    }
  }
`

export { GET_CHARACTERS_QUERY, GET_CHARACTER_QUERY }
