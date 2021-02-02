import movies from "../movies";

const initialState = { movies };

const reducer = (state=initialState, action) => {
    switch (action.type){
        case "WATCHED_MOVIE":
            const {watchedMovie} = action.payload;
            return {
                ...state,
                movies: state.movies.map(movie => {
                    (movie.name === watchedMovie.name) ? watchedMovie : movie
                })
            }; 
        case "UNWATCH_MOVIE":
            return{

            };
        case "ADD_MOVIE":
            return {
  
            }; 
        case "DELETE_MOVIE":
            return {

            }; 
        default: return state;
    };
};

export default reducer;