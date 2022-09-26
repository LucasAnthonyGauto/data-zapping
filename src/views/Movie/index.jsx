import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import {Title, Img} from "../../components/atoms"
const Page = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)


  const fetchMovie = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=192e0b9821564f26f52949758ea3c473&language=en`)
    .then(res => {
      setMovie(res.data)
    }).catch(err => console.error(err))
  }

  useEffect(() => {
    fetchMovie()
  },[movieId])

  return movie ? (
    <section>
      <Title type='h1' text={movie.title} />
      <Img exportImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} textAlt="movie.original_title"  />
    </section>
  ) : (
    <section>
      <Title type='h1' text={'No se encontro la pelicula'} />
    </section>
  )
}

export default Page