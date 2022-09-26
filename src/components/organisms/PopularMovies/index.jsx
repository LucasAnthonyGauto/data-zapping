import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { MovieCards } from "../../molecules"

function PopularMovies ({movies}) {
  const navigate = useNavigate()


  return (
    <>
    {movies.map((movie) => (
      <MovieCards 
        onClick={() => navigate(`/movie/${movie.id}`) } 
        imageMovie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        movieTitle={movie.title}/>
    ))}
    </>
  )
}

export default PopularMovies;