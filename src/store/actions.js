const WATCHED_MOVIE = "WATCHED_MOVIE";
const UNWATCH_MOVIE = "UNWATCH_MOVIE";
const ADD_MOVIE = "ADD_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";

export const watchedMovie = (watchedMovie) => ({
  type: WATCHED_MOVIE,
  payload: { watchedMovie },
});

export const unwatchMovie = (unwatchMovie) => ({
  type: UNWATCH_MOVIE,
  payload: { unwatchMovie },
});

export const addMovie = (newMovie) => ({
  type: ADD_MOVIE,
  payload: { newMovie },
});

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: { movieId },
});
