import movies from "../movies";
import Movie from "./Movie";
import { ListStyled } from "../styles";


const MovieList = () => {
    const movieList = movies.map((movie) => <Movie movie={movie.name}/>);

    return (
        <ListStyled>
            <ul class="list-group">{movieList}</ul>
        </ListStyled>
        
    );
};

export default MovieList;