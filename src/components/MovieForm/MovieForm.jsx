export default function MovieForm() {
  return (
    <div>
      <form className="page-form">
        
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
        <select className="form-select">
          <option>Test</option>
          <option>Test 2</option>
        </select>
        
        <div></div>
        
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
