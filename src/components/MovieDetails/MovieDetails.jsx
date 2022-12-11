import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MovieDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  // get list of movies from the state
  const movieList = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <div>
      {movieList
        .filter((e) => e.id == id)
        .map((movie, index) => {
          return (
            <div key={index}>
              <h2>{movie.title}</h2>
              <h3>{movie.genre_id}</h3>

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
