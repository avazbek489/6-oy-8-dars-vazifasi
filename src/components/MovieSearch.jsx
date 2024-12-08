import { useState } from "react";
import { movies } from "../axios";
import "./Movie.css";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  function searchMovies() {
    movies(`?s=${query}&apikey=your_api_key`).then((response) => {
      if (response.status == 200) {
        setMovieList(response.data.Search);
        setError("");
      } else {
        setMovieList([]);
      }
    });
  }

  return (
    <div className="movie-search-container">
      <h1 className="movie-search-title">Kino qidiruv</h1>
      <input
        type="text"
        placeholder="Search Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="movie-search-input"
      />
      <button onClick={searchMovies} className="movie-search-button">
        Search
      </button>
      <div className="movie-list">
        {movieList.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <h3>
              {movie.Title} ({movie.Year})
            </h3>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
