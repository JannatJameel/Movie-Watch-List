import Movie from "./Movie";
import { ListStyled } from "../styles";

import { useSelector } from "react-redux";

const WatchedList = () => {
    const movies = useSelector(state => state.movies);
    
    const watchedMovies = movies.map(movie => (movie.status === "watched")? movie : "");
    const movieList = watchedMovies.map((movie) => <Movie movie={movie} key={movie.id}/>);

    return (
        <ListStyled>
            <ul className="list-group">{movieList}</ul>
        </ListStyled>
        
    );
};

export default WatchedList;