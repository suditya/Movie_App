import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';
// import { url } from 'inspector';

const apiKey = '21bb3c33'
const MovieDetails = () => {
    const { movieName } = useParams();
    const [movie, setMovie] = useState(null);
    //   console.log(movieName, "id", useParams())

    useEffect(() => {
        // Fetch the movie details based on the movieName
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://www.omdbapi.com/?i=${movieName}&apikey=${apiKey}`);
            const data = await response.json();
            console.log(data, "data");
            setMovie(data);
        };
        console.log(movie, "#####", movieName);

        fetchMovieDetails();
    }, [movieName]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    //   const backgroundStyle = {
    //     backgroundImage: `url(${movie.Poster})`,
    //   };

    console.log(movie);
    return (

        <div className="movie-details-container">
            <div className="movie-background" style={{ backgroundImage: `url("${movie.Poster}")` }}></div>
            <div className="movie-content">
                <div className="movie-poster">
                    {console.log(`url("${movie.Poster}")`, "movie url poster  ")}
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movie-info">
                    <h2 className="movie-title">{movie.Title}</h2>
                    <p>
                        <strong>📅 Year:</strong> {movie.Year}
                    </p>
                    <p>
                        <strong>🔍 Rated:</strong> {movie.Rated}
                    </p>
                    <p>
                        <strong>📆 Released:</strong> {movie.Released}
                    </p>
                    <p>
                        <strong>⏰ Runtime:</strong> {movie.Runtime}
                    </p>
                    <p>
                        <strong>🎭 Genre:</strong> {movie.Genre}
                    </p>
                    <p>
                        <strong>🎬 Director:</strong> {movie.Director}
                    </p>
                    <p>
                        <strong>✍️ Writer:</strong> {movie.Writer}
                    </p>
                    <p>
                        <strong>👥 Actors:</strong> {movie.Actors}
                    </p>
                    <p>
                        <strong>📝 Plot:</strong> {movie.Plot}
                    </p>
                    <p>
                        <strong>🗺️ Language:</strong> {movie.Language}
                    </p>
                    <p>
                        <strong>🌍 Country:</strong> {movie.Country}
                    </p>
                    <p>
                        <strong>🏆 Awards:</strong> {movie.Awards}
                    </p>
                    <p>
                        <strong>⭐ IMDB Rating:</strong> {movie.imdbRating}
                    </p>
                    <p>
                        <strong>👍 IMDB Votes:</strong> {movie.imdbVotes}
                    </p>
                    <p>
                        <strong>💰 Box Office:</strong> {movie.BoxOffice}
                    </p>
                    {/* Display other movie details here */}
                    {/* Display other movie details here */}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
