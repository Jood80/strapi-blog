import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
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
            <Route exact path='/' component={Home}/>
            <Route path='/details/:id' component={BlogDetails} />
            <Route exact path='/category/:id' component={Category} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
