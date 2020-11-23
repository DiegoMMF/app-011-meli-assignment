import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails.jsx';
import SearchResults from './pages/SearchResults.jsx';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBar />
        <Switch>
          <Route exact path={"/items"} component={ProductDetails} />
          <Route exact path={"/items/:id"} component={SearchResults} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
