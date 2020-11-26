import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleItem from './pages/SingleItem.jsx';
import SearchResults from './pages/SearchResults.jsx';
import Home from "./pages/Home";
import PageError from './pages/PageError';

function App() {
// TODO #3
  return (
    <Router>
      <Switch>
        <Route exact path={"/items/:id"} component={SingleItem} />
        <Route exact path={"/items"} component={SearchResults} />
        <Route exact path={"/"} component={Home} />
        <Route component={PageError} />
      </Switch>
    </Router >
  );
}

export default App;
