import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function MovieForm() {

  const dispatch = useDispatch();

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
          className="form-single-input"
          id="movie-title-in"
          placeholder="Title" />

        <label className="form-label" labelfor="movie-poster-in">
          Movie Poster URL:
        </label>
        <input
          type="text"
          id="movie-poster-in"
          className="form-single-input"
          placeholder="Image URL"
          />
        
        <label
          className="form-label"
          labelfor="movie-description-in" >
          Description:
        </label>
        <textarea className="form-text-input"
          placeholder="Type a brief description"></textarea>
        
        <label className="form-label" labelfor="movie-genre-in">
          Genre:
        </label>
        <select
          className="form-select"
          value={genreIn}
          onChange={e => setGenre(e.target.value)}
        >
          <option className="disabled-option" value={''} disabled>Select a genre:</option>
          {genreOptions}
        </select>
        
        <div></div>
        
        <button className="form-submit-btn" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
}
