import { gql} from '@apollo/client';

export const CATEGORY = gql`
    query GetCategory($id: ID!) {
      category(id: $id) {
        id,
        name,
        blogs {
          id,
          title,
          content,
          author,
          categories {
            id
            name,
          }
        }
      }
    }
  `