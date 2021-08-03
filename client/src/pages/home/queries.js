import { gql } from '@apollo/client';

export const BLOGS = gql`
  query getBlogs {
    blogs {
      id,
      title,
      author,
      content    
    }
  }
`;