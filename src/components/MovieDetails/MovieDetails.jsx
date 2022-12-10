import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";

export default function MovieDetails() {

  const { id } = useParams();

  const movie = useSelector(store => store.movies.filter(e => e.id == id)[0])

  console.log(movie);

  return (
    <div>Hey {movie.title}</div>
  )
}