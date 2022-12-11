// module imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";

function MovieList() {
  
  // declare dispatch
  const dispatch = useDispatch();

  // get movies from global state
  const movies = useSelector((store) => store.movies);

  // on reload, refresh movies and scroll to top of the window
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    window.scrollTo(0,0)
  }, []);

  return (
    <main className="page-card">
      <h2>All Movies</h2>
      <h3>Click on any movie to learn more.</h3>

      <section className="movies">
        {/* loop over movies and render a card for each */}
        {movies.map((movie) => {
          return (
            <div className="movie-card-container" key={movie.id}>
              <a href={"/#/details/" + movie.id}> {/* entire card is rendered as a link */}
                <div className="page-sub-card movie-list-card">
                  <h3 className="movie-card-title">{movie.title}</h3>
                  <img className="movie-poster-img" src={movie.poster} alt={movie.title} />
                </div>
              </a>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
