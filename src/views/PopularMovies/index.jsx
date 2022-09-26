import {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import styles from './style.module.css'
import { Title } from "../../components/atoms"
import { PopularMovies } from '../../components/organisms'
import Keypad from "../../components/organisms/Keypad"

const Page = () => {
  const { page }=  useParams()
  const typePage = "popular"

  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${typePage}?api_key=192e0b9821564f26f52949758ea3c473&language=en-MX&page=${page}`)
    .then(res => {
      setMovies(res.data.results)
    }).catch(err => console.error(err))
  }

  useEffect(() => {
    fetchMovies()
  }, [page])
  return movies.length>0  ?(
    <section className="">
      <Title
      titleStyle={"h1"} 
      type='h1' 
      text={`Best popular movies`} />
        <div 
        className={styles["listMovies"]}>
          {movies.length && <PopularMovies movies={movies}/>}
        </div>
        <Keypad page={page} typePage={typePage}/>
    </section>
  ) : (
    <section>
      <Title type='h1' text={"Pagina no encontrada"}/>
    </section>
  )
  
}

export default Page