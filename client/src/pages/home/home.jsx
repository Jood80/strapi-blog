import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown'
import { GET_ALL_BLOGS } from './queries'


const Home = () => {
  const { isLoading, error, data } = useQuery(GET_ALL_BLOGS);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error ...</p>}
      {data && data.blogs.map((blog) => (
        <div key={blog.id} className='blog-card'>
          <div className="title">{ blog.id}</div>
          <h2>{blog.title}</h2>
          <small>{blog.author}</small>
          <ReactMarkdown>{blog.content.substring(0, 240)}</ReactMarkdown>
          <Link to={`/details/${blog.id}`}>Read more</Link>
        </div>
      ))} 
    </div>
  );
};
 
export default Home;
