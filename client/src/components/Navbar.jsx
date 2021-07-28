import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment className="Navbar">
      <Link to= '/'> <h2>Blogs</h2> </Link>
    </Fragment>
  );
};
 
export default Navbar;