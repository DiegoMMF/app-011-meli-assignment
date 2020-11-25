import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails.jsx';
import SearchResults from './pages/SearchResults.jsx';
import SearchBar from './components/SearchBar';
import Home from "./pages/Home";
import PageError from './pages/PageError';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={"/items/:id"} component={ProductDetails} />
        <Route exact path={"/items"} component={SearchResults} />
        <Route exact path={"/"} component={Home} />
        <Route component={PageError} />
      </Switch>
    </Router >
  );
}

export default App;
