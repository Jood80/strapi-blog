import { Link } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';

const BLOGS = gql`
  query getBlogs {
    blogs {
      id,
      title,
      author,
      content    
    }
  }
`;

const Home = () => {
  const { isLoading, error, data } = useQuery(BLOGS);
  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error ...</p>}
      {data && data.blogs.map((blog) => (
        <div key={blog.id} className='blog-card'>
          <div className="title">{ blog.id}</div>
          <h2>{blog.title}</h2>
          <small>{blog.author}</small>
          <p>{blog.content.substring(0, 240)} .....</p>
          <Link to={`/details/${blog.id}`}>Read more</Link>
        </div>
      ))} 
    </div>
  );
};
 
export default Home;
