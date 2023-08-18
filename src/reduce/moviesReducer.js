// src/redux/moviesReducer.js

const initialState = {
    movies: ['Mission Impossible','Up in the air'],
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  