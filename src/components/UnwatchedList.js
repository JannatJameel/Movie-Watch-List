import Movie from "./Movie";
import { ListStyled } from "../styles";

import { useSelector } from "react-redux";


const UnwatchedList = () => {
    const movies = useSelector(state => state.movies);

    const unwatchedMovies = movies.map(movie => (movie.status === "unwatched")? movie : "");
    const movieList = unwatchedMovies.map((movie) => <Movie movie={movie} key={movie.id}/>);
    // console.log(unwatchedMovies);

    return (
        <ListStyled>
            <ul className="list-group">{movieList}</ul>
        </ListStyled>
        
    );
};

export default UnwatchedList;