import { useParams } from "react-router-dom"

export default function MovieDetails() {

  const { id } = useParams();

  return (
    <div>Hey {id}</div>
  )
}