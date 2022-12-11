// module imports
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function MovieForm() {
  // set up hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // local state variables
  const [titleIn, setTitle] = useState("");
  const [posterUrlIn, setPosterUrl] = useState("");
  const [descriptionIn, setDescription] = useState("");
  const [genreIn, setGenre] = useState("");

  // get genres for options menu
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  const genres = useSelector((store) => store.genres);
  const genreOptions = genres.map((genre, index) => {
    return <option key={index} value={genre.id}>{genre.name}</option>;
  });

  // form submission
  const handleSubmit = (evt) => {
    // prevent refresh
    evt.preventDefault();

    // build object to send
    const movieObj = {
      title: titleIn,
      poster: posterUrlIn,
      description: descriptionIn,
      genre_id: Number(genreIn)
    };

    // validate inputs
    if (!validateInputs(movieObj)) return false;

    // add movie to DB and move user back to home page
    dispatch({type: 'ADD_MOVIE', payload: movieObj })
    history.push('/')
  };

  // input validation
  const validateInputs = (movieObj) => {

    // if any inputs are blank, reject input
    if (Object.values(movieObj).some((e) => e == "")) {
      alert("All text inputs are required.");
      return false;
    }

    return true;
  };

  // user clicks cancel button
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

          {/* Movie title input */}
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

          {/* Movie poster URL input */}
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

          {/* Movie genre dropdown select */}
          <label className="form-label" labelfor="movie-genre-in">
            Genre:
          </label>
          <select
            className="form-select"
            value={genreIn}
            onChange={(e) => setGenre(e.target.value)}>
            <option value={""} disabled> {/* Placeholder until user selects a genre */}
              Select a genre:
            </option>
            {genreOptions}
          </select>
        </div>
      </form>

      <div className="form-flex">

        {/* Add Movie button */}
        <button
          type="submit"
          className="form-submit-btn"
          onClick={handleSubmit}>
          Add Movie
        </button>

        {/* Cancel button */}
        <button
          className="form-cancel-btn"
          onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
