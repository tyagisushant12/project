import { useState } from "react";
import MovieCard from "./Moviecard";
import './SearchMovie.css'

export default function SearchMovie(){
   const [movieName,setMovieName]=useState("");
   const [movies,setMovies]=useState([]);
    function fetchMovie(event){
        event.preventDefault();
        const url=`https://api.themoviedb.org/3/search/movie?&api_key=90683028b6108f4b1b2b9f054b2632b2&query=${movieName}&include_adult=false&language=en-US&page=1`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMovies(data.results));
    }
    function handleMovieName(event){
        console.log(event.target.value);
        setMovieName(event.target.value);
    }
    return(
        <div>
            <h3>enter the movie name</h3>
        <form className="form" onSubmit={fetchMovie}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" value={movieName} onChange={handleMovieName} placeholder="Enter the movie name"/>
            <br />
            <button className="button" type="submit" >Search</button>
        </form>
        <div className="img">
            {movies.filter(movie=>movie.poster_path!=null).map(movie =>
          <MovieCard data={movie} key={movie.id}/>
            )}
        </div>
        </div>

    )
}