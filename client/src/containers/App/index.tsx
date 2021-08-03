import { ApolloProvider} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import client from '../../utils/apolloClient'
import { Navbar } from '../../components';
import  { Home, Category, BlogDetails} from '..'


function App() {
  return (
    <Router>
      <div className="App">
        <ApolloProvider client={client}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/details/:id' component={BlogDetails} />
            <Route exact path='/category/:id' component={Category} />
          </Switch>
        </ApolloProvider>
      </div>
    </Router>
  );
}

export default App;
