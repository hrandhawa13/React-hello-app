const MovieComponent = ({ movie }) => {

    return (
        <li className="movie" key={movie.id}>
            <img src={movie.poster} alt={movie.title}></img>
            <p>{movie.title} by {movie.director} was released on {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <p>Runtime: {movie.runtime}</p>
        </li>

    );
}



export default MovieComponent;