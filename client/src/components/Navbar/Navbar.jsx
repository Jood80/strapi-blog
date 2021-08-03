import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from './queries';


const Navbar = () => {
  const { isLoading, error, data } = useQuery(GET_ALL_CATEGORIES)
  
  if (isLoading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>
  
  console.log({data});
  return (
    <div className="site-header">
      <Link to='/'><h1>Blogs</h1></Link>
      <nav className='categories'>
        <span>Filter blogs by category: </span>
        {data && data.categories.map((category) => {
          console.log({category});
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