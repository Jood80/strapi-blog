import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import  { Home, Category, BlogDetails} from './pages'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Router>
  );
}

export default App;
