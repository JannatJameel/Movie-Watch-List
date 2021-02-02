import movies from "../movies";

const initialState = { movies };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WATCHED_MOVIE":
      const { watchedMovie } = action.payload;

      return {
        ...state,
        movies: state.movies.map((movie) => {
          //   if (movie.name === watchedMovie.name) {
          //     return watchedMovie;
          //   } else {
          //     return movie;
          //   }
          return movie.id === watchedMovie.id ? watchedMovie : movie;
        }),
      };

    case "UNWATCH_MOVIE":
      return {};
    case "ADD_MOVIE":
      return {};
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.id !== action.payload.movieId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
