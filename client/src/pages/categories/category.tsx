import { useQuery} from '@apollo/client'
import { useParams, Link } from 'react-router-dom';
import { GET_BLOGS_PER_CATEGORY } from './queries';

const Category = () => {
  const { id }: { id: string } = useParams()
  const { loading, error, data } = useQuery(GET_BLOGS_PER_CATEGORY, {
    variables: { id },
  })
 
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>
  
  return ( 
    <div>
      <h2>{data && data.category.name}</h2>
      {data && data.category.blogs.map((blog) => (
        <div key={blog.id} className='blog-card'>
          <div className="title">{ blog.id}</div>
          <h2>{blog.title}</h2>
          <small>{blog.author}</small><br/>
          {blog.categories.map(c => (
            <small key={c.id}>{c.name}</small>
          ))}
          <p>{blog.content.substring(0, 240)} .....</p>
          <Link to={`/details/${blog.id}`}>Read more</Link>
        </div>
      ))} 
    </div>
  );
};
 
export default Category;