import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function MovieForm() {

  const dispatch = useDispatch();

  const [ titleIn, setTitle ] = useState('')
  const [ posterUrlIn, setPosterUrl ] = useState('')
  const [ descriptionIn, setDescription ] = useState('')
  const [ genreIn, setGenre ] = useState('')

  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' })
  }, [])

  const genres = useSelector(store => store.genres)

  
  const genreOptions = genres.map((genre, index) => {
    return (
      <option key={index}>
        {genre.name}
      </option>
    )
  })

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('in handleSubmit')

    const movieObj = {
      title: titleIn,
      poster: posterUrlIn,
      description: descriptionIn
    }

  }

  const validateInputs = () => {

  }


  return (
    <div>
      <form
        className="page-form"
        onSubmit={handleSubmit}>
        
        <label className="form-label" labelfor="movie-title-in">
          Movie Title:
        </label>
        <input
          type="text"
          className="form-single-input"
          id="movie-title-in"
          value={titleIn}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          />

        <label className="form-label" labelfor="movie-poster-in">
          Movie Poster URL:
        </label>
        <input
          type="text"
          id="movie-poster-in"
          value={posterUrlIn}
          onChange={e => setPosterUrl(e.target.value)}
          className="form-single-input"
          placeholder="Image URL"
          />
        
        <label
          className="form-label"
          labelfor="movie-description-in" >
          Description:
        </label>
        <textarea
          id="movie-description-in"
          value={descriptionIn}
          onChange={e => setDescription(e.target.value)}
          placeholder="Type a brief description">
        </textarea>
        
        <label className="form-label" labelfor="movie-genre-in">
          Genre:
        </label>
        <select
          className="form-select"
          value={genreIn}
          onChange={e => setGenre(e.target.value)}>
          <option
            value={''}
            disabled>
              Select a genre:
          </option>
          {genreOptions}
        </select>
        
        <div>
          {/* Dummy cell */}
        </div>
        
        <button className="form-submit-btn" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
}
