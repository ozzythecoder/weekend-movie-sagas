import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import './MovieDetails.css'

export default function MovieDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  // get list of movies, and the genre of this movie
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: "FETCH_GENRE_BY_MOVIE", payload: id })
    window.scrollTo(0,0)
   }, []);
  
  // get list of movies from the state
  const movieList = useSelector((store) => store.movies);
  const genreList = useSelector(store => store.thisMovieGenre)

  console.log('genreList', genreList)


  const genres = genreList.map((genre, index) => genre.name)

  return (
    <div>
      {movieList
        .filter((e) => e.id == id)
        .map((movie, index) => {
          return (
            <div
              className="content-card"
              key={index}>
              <h2>{movie.title}</h2>
              <h3>{genres.join(', ')}</h3>

              <div>
                <img src={movie.poster} />
              </div>
              <p>{movie.description}</p>
              <a href="/#/">Back to List</a>
            </div>
          );
        })}
    </div>
  );
}
