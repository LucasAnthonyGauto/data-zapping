import { useParams } from "react-router-dom"
import {useEffect, useState, useContext} from "react"
import axios from "axios"
import {Title, Img, Text} from "../../components/atoms"
import { AppContext } from "../../context/AppContext"
import {Container, Row, Col, Button} from "react-bootstrap"
const Page = () => {
  const {addToCart} = useContext(AppContext)
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [count, setCount] = useState(1)
  
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
    <Container>
      <Row>
        <Col xs={12} className="py-5">
          <Title type='h1' text={movie.title} />
          <Img exportImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} textAlt="movie.original_title"  />
          <Title type={"h3"}/>
          <Text text={movie.overview}/>
          <Button onClick={() => decreaseCount()}>-</Button>
          <p>{count}</p>
          <Button onClick={() => increaseCount()}>+</Button>
          <Button onClick={() => addToCart({id: movie.id, title: movie.title, img: movie.poster_path}, count)}>Añadir al carrito</Button>
        </Col>
      </Row>
    </Container>
   
  ) : (
    <section>
      <Title type='h1' text={'No se encontro la pelicula'} />
    </section>
  )
}

export default Page