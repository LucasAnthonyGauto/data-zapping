import { useNavigate, useParams } from "react-router-dom"
import {useEffect, useState, useContext} from "react"
import axios from "axios"
import {Title, Img, Text,Button} from "../../components/atoms"
import { AppContext } from "../../context/AppContext"
import './styles.scss'

const Page = () => {
  const {addToCart} = useContext(AppContext)
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [count, setCount] = useState(1)
  
  const urlPrevious = () => {
    useNavigate(window.history.back())
  }
  console.log(window.history);
  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }

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
      <div className="movi">
        <Img styleImg={"backdropImg"} exportImg={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
        <div className="btnBack">
          <Button text={"<="} buttonAction={urlPrevious}/>
        </div>
        <Title type='h1' text={movie.title} />
        <div className="movi-img">
          <Img styleImg="mediumImg" exportImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} textAlt="movie.original_title"  />
          <Title type={"h4"} text={movie.release_date}/>
        </div>
        <div className="movi-inf">
          <Title type={'h2'} text={movie.tagline}/>
          <Text text={movie.overview}/>
        </div>
        <div className="recomend">
        </div>
        <div className="buy">
          <Button text={"+"} buttonAction={() => increaseCount()}/>
          <Text text={count}/>
          <Button text={"-"} buttonAction={() => decreaseCount()}/>
          <Button text={"Añadir al carrito"} buttonAction={() => addToCart({id: movie.id, title: movie.title, img: movie.poster_path}, count)}/>
        </div>
      </div>
    </section>
   
   ) : (
     <section>
      <Title type='h1' text={'No se encontro la pelicula'} />
    </section>
  )
}

export default Page