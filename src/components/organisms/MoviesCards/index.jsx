import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { SmallCards } from "../../molecules"

function MoviesCards ({movies}) {
  const navigate = useNavigate()


  return (
    <>
    {movies.map((movie) => (
      <SmallCards 
        onClick={() => navigate(`/movie/${movie.id}`) } 
        imageMovie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        movieTitle={movie.title}/>
    ))}
    </>
  )
}

export default MoviesCards;