import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = (props) => {
    // const {movieData} = useParams();
    // const movie = JSON.parse(decodeURIComponent({movieData}));
    alert( " -- ", props);
    console.log("hello clicked");
    return (
        <div>
            {/* <h2>Movie Details{movie}</h2> */}
            <div>
                {/* <h3>{movieData}</h3> */}
                {/* <p>Year: {movie.Year}</p> */}
                {/* <p>Type: {movie.Type}</p> */}
                {/* <p>IMDB ID: {movie.imdbID}</p> */}
                {/* <p>Poster: <img src={movie.Poster} alt={movie.Title} /></p> */}
                {/* Display other movie details here */}
            </div>
        </div>
    );
};

export default MovieDetails;
