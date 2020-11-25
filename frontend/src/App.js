import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails.jsx';
import SearchResults from './pages/SearchResults.jsx';
import SearchBar from './components/SearchBar';
import PageError from './pages/PageError';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={"/items/:id"} component={SearchResults} />
          <Route exact path={"/items"} component={ProductDetails} />
          <Route exact path={"/"} component={SearchBar} />
          <Route component={PageError} />
        </Switch>
      </Router >
  );
}

export default App;
