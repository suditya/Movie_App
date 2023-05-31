import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const MovieCard = (movie) => {
    console.log(movie.movie.imdbID);
    
    return (
        
        
        <Link to={`/movie/${movie.movie.imdbID}`}>
        <div className="movie">
            {/* {console.log(movie, "movies")} */}
            <div>
                <p>{movie.movie.Year}</p>
            </div>
            <div>
                <img src={movie.movie.Poster !== 'N/A' ? movie.movie.Poster : "https://via.placeholder.com/400"} alt={movie.movie.Title} />
            </div>
            <div>
                <span>
                    {movie.movie.Type}
                </span>
                <h3>
                    {movie.movie.Title}
                </h3>
            </div>
        </div>
        </Link>
    )
}

export default MovieCard;

