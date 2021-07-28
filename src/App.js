// import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Category from './pages/category';
import BlogDetails from './pages/blogDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <Home/>
          </Route>
          <Route path='/details/:id' >
            <BlogDetails/>
          </Route>
          <Route path='/category/:id' >
            <Category/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
