import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        <Nav />
        <Route path="/" exact>

          <MovieList />
        </Route>
        {/* Details page */}
        <Route exact path="/details/:id" children={<MovieDetails />} />

        {/* Add Movie page */}
        <Route exact path="/addMovie" children={<MovieForm />} />
      </Router>
      <Footer />
    </div>
  );
}


export default App;
