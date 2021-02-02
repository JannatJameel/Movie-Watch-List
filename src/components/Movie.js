import { Button } from "../styles";

const Movie = ({movie}) => {
    return (
        <li class="list-group-item">
            <div>
                <p style={{float: "left"}}>{movie}</p>
                <div style={{float: "right"}}>
                    <Button type="button" className="btn btn-success">Watched</Button>
                    <Button type="button" className="btn btn-danger">Delete</Button>
                </div>
            </div>
        </li>
    );
};

export default Movie;