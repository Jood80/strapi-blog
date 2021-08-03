import { gql} from '@apollo/client';

export const GET_BLOG_DETAILS = gql`
 query getBlog($id: ID!) {
    blog(id:$id) {
      id,
      title,
      author,
      content    
    }
}
`;