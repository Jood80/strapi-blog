import { gql} from '@apollo/client';

export const BLOGS = gql`
 query getBlog($id: ID!) {
    blog(id:$id) {
      id,
      title,
      author,
      content    
    }
}
`;