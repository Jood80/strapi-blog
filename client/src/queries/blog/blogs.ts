import { gql } from '@apollo/client';

export const GET_ALL_BLOGS = gql`
  query getBlogs {
    blogs {
      id,
      title,
      author,
      content    
    }
  }
`;