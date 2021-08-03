import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from './queries';


const Navbar = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES)
  
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>
  
  return (
    <div className="site-header">
      <Link to='/'><h1>Blogs</h1></Link>
      <nav className='categories'>
        <span>Filter blogs by category: </span>
        {data && data.categories.map((category) => {
          return(
            <Link key={category.id} to={`category/${category.id}`}>
              {category.name}
            </Link>
          )} )}
      
      </nav>
    </div>
  );
};
 
export default Navbar;