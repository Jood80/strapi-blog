import { useQuery , gql} from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const BLOGS = gql`
 query getBlog($id: ID!) {
    blog(id:$id) {
      id,
      title,
      author,
      content    
    }
}
`;

const BlogDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(BLOGS, {
    variables: { id }
  })

  return ( 
    <div>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error ...</p>}
      {data && (
        <div className='blog-card'>
          <div className="title">{data.blog.id}</div>
          <h2>{data.blog.title}</h2>
          <small>{data.blog.author}</small>
          <p>{data.blog.content}</p>
          <Link to={'/'}>Back</Link>
        </div>)}      
    </div>
  );
};
 
export default BlogDetails;