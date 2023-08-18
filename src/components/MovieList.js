// src/components/MovieList.js

import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllMovies } from '../selectors/movieSelectors';

function MovieList() {
  const movies = useSelector(selectAllMovies);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
