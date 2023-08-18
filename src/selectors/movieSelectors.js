// src/selectors/movieSelectors.js

import { createSelector } from 'reselect';

const selectMovies = (state) => state.movies.movies;

export const selectAllMovies = createSelector(
  [selectMovies],
  (movies) => movies
);
