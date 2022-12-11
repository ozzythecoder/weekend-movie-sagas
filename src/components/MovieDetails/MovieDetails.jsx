import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function MovieDetails() {

  const dispatch = useDispatch();

  const { id } = useParams();

  // get this movie from the state
  const movie = useSelector(store => store.movies.filter(e => e.id == id)[0])

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <div>
      <h2>{movie.title}</h2>
      
      <div>
        <img src={movie.poster} />
      </div>
      <p>
        {movie.description}
      </p>
      <a href='/'>Back to List</a>
    </div>
  )
}