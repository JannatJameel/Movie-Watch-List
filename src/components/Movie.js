import { Button } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { watchedMovie, deleteMovie } from "../store/actions";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const [editMovie, setEditMovie] = useState(movie);

  const handleChange = () => {
    if (movie.status === "unwatched") {
      console.log("helloooo");
      setEditMovie((movie["status"] = "watched"));
      dispatch(watchedMovie(movie));
    } else {
      setEditMovie((movie["status"] = "unwatched"));
    }
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    console.log(movie);
  };

  return (
    <li className="list-group-item">
      <div>
        <p style={{ float: "left" }}>{movie.name}</p>
        <div style={{ float: "right" }}>
          <Button
            type="button"
            className="btn btn-success"
            onClick={handleChange}
          >
            {movie.status}
          </Button>
          <Button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Movie;
