import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


const Home = () => {
  const { isLoading, error, blogs } = useFetch('http://localhost:1337/blogs');
  
  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error ...</p>}
      {blogs && blogs.map((blog) => (
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
