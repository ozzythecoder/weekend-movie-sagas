import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function MovieForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [titleIn, setTitle] = useState("");
  const [posterUrlIn, setPosterUrl] = useState("");
  const [descriptionIn, setDescription] = useState("");
  const [genreIn, setGenre] = useState("");

  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  const genres = useSelector((store) => store.genres);

  const genreOptions = genres.map((genre, index) => {
    return <option key={index} value={genre.id}>{genre.name}</option>;
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("in handleSubmit");

    const movieObj = {
      title: titleIn,
      poster: posterUrlIn,
      description: descriptionIn,
      genre_id: Number(genreIn)
    };

    if (!validateInputs(movieObj)) return false;

    console.log('adding movie to DB:', movieObj)

  };

  const validateInputs = (movieObj) => {
    if (Object.values(movieObj).some((e) => e == "")) {
      alert("All text inputs are required.");
      return false;
    } else if (genreIn == "") {
      alert("Please select a genre.");
      return false;
    }

    return true;
  };

  const handleCancel = () => {
    // clear all inputs
    setTitle('');
    setPosterUrl('');
    setDescription('');
    setGenre('');

    // navigate user back to list page
    history.push('/');
  }

  return (
    <div className="content-card">
      <h2>Add a Movie</h2>
      <form>
        <div className="page-form">
          <label className="form-label" labelfor="movie-title-in">
            Movie Title:
          </label>
          <input
            type="text"
            className="form-single-input"
            id="movie-title-in"
            value={titleIn}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <label className="form-label" labelfor="movie-poster-in">
            Movie Poster:
          </label>
          <input
            type="text"
            id="movie-poster-in"
            value={posterUrlIn}
            onChange={(e) => setPosterUrl(e.target.value)}
            className="form-single-input"
            placeholder="Image URL"
          />

          <label className="form-label" labelfor="movie-description-in">
            Description:
          </label>
          <textarea
            id="movie-description-in"
            value={descriptionIn}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type a brief description"
          ></textarea>

          <label className="form-label" labelfor="movie-genre-in">
            Genre:
          </label>
          <select
            className="form-select"
            value={genreIn}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value={""} disabled>
              Select a genre:
            </option>
            {genreOptions}
          </select>
        </div>
      </form>

      <div className="form-flex">
        <button
          type="submit"
          className="form-submit-btn"
          onClick={handleSubmit}>
          Add Movie
        </button>
        <button
          className="form-cancel-btn"
          onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
