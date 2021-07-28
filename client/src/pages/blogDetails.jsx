import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {isLoading, error, blogs }= useFetch(`http://localhost:1337/blogs/${id}`)
  
  return ( 
    <div>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error ...</p>}
      {blogs && (
        <div className='blog-card'>
          <div className="title">{blogs.id}</div>
          <h2>{blogs.title}</h2>
          <small>{blogs.author}</small>
          <p>{blogs.content}</p>
          <Link to={'/'}>Back</Link>
        </div>)}      
    </div>
  );
};
 
export default BlogDetails;