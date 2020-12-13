import React, { useState } from "react";
import './App.css';

const movies = {
  Action: [
    { name: "War", duration: "2hrs 34mins" },
    { name: "Baby", duration: "2hrs 39mins" },
    { name: "Dhangal", duration: "2hrs 49mins" }
  ],
  Comedy: [
    { name: "102 Not Out", duration: "1hrs 42mins" },
    { name: "Welcome", duration: "2hrs 39mins" },
    { name: "Phir Hera Pheri", duration: "2hrs 34mins" }
  ],
  Romance: [
    { name: "Bajirao Mastani", duration: "2hrs 38mins" },
    { name: "Dilwale Dulhania Le Jayenge", duration: "3hrs 15mins" },
    { name: "Highway", duration: "2hrs 13mins" }
  ],
  Drama: [
    { name: "Mission Mangal", duration: "2hrs 10mins" },
    { name: "Badhaai Ho", duration: "2hrs 04mins" },
    { name: "English Vinglish", duration: "2hrs 14mins" }
  ]
};

function App() {
  const [genreSelected, setGenreSelected] = useState("Action");

  function genreClickHandler(genre) {
    setGenreSelected(genre);
  }
  return (
    <div className="App">
      <h1>📽️ 🎬 Bollywood Buff 🎞️ 🎥</h1>
      <h4>🍿These are some of the movies i recommend! 🍿</h4>
      <div>
        {Object.keys(movies).map((genre) => (
          <button onClick={() => genreClickHandler(genre)} className="genres">
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="movie-container">
        <ul>
          {movies[genreSelected].map((movie) => (
            <li key={movie.name} className="movie-list">
              <h2> {movie.name} </h2>
              <p style={{ fontSize: "smaller" }}> {movie.duration} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
