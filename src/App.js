import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=21bb3c33";

const movie1 =
{
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // data = data.search;
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Avengers')
    }, []);

    return (
        <div className="app">
            <h1>Film-Flix</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm) }
                />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie) =>
                            (
                                <MovieCard movie={movie} />
                            ))
                        }
                    </div>
                ) :
                    (
                        <div className="empty">
                            <h2> No movies found!</h2>
                        </div>
                    )
            }
            {/* <div className="conatainer">
                {
                    console.log(movies, " movies in app.js")
                }
                <MovieCard movie={movies[0]} ></MovieCard>
            </div> */}
        </div>
    )
}

export default App;