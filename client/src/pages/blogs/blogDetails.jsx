import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { GET_BLOG_DETAILS } from './queries';


const BlogDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(GET_BLOG_DETAILS, {
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
          <ReactMarkdown>{data.blog.content}</ReactMarkdown>
          <Link to={'/'}>Back</Link>
        </div>)}      
    </div>
  );
};
 
export default BlogDetails;