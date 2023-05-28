import {useEffect} from "react";
//21bb3c33
const API_URL  ="http://www.omdbapi.com/?i=tt3896198&apikey=21bb3c33";
const App = () =>
{
    const searchMovies = async (title)=>
    {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data)
    }

    useEffect(()=>
    {

    },[]);
}

export default App;