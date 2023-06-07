import { movies } from './data/movies.js';
import MovieComponent from './MovieComponent';
import './MoviesComponent.css';
function fetchMovieData(){
    return movies;
}

const MoviesComponent = () =>{
    const movieData= fetchMovieData();
    return(
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    movieData.map((movie)=>(
                        <MovieComponent key={movie.id} movie ={movie}/>

                        
                    ))
                }
                
            </ul>
        </div>
    );

  }

  export default MoviesComponent;