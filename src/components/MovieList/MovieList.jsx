import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div className="movie-card-container" key={movie.id}>
              <a href={"/#/details/" + movie.id}>
                <div className="content-card movie-list-card">
                  <h3 className="movie-card-title">{movie.title}</h3>
                  <img src={movie.poster} alt={movie.title} />
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
