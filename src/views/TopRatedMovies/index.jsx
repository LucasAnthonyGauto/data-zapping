import {useState, useEffect} from "react"
import axios from "axios"
import {Title} from "../../components/atoms"
import {PopularMovies} from "../../components/organisms"
import { useParams } from "react-router-dom"
import styles from './style.module.css'

const Page = () => {
  const [movies, setMovies] = useState([])
  const { page } = useParams()

  let uri = (`https://api.themoviedb.org/3/movie/top_rated?api_key=192e0b9821564f26f52949758ea3c473&language=en-MX&page=${page}`)
  
  const fetchMovies = () => {
    axios.get(uri).then(res => {
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
      text={`pagina ${page}`} />
      <div 
      className={styles["listMovies"]}>
        {movies.length && <PopularMovies movies={movies}/>}
      </div>
    </section>
  ) : (
    <section>
      <Title type='h1' text={"Pagina no encontrada"}/>
    </section>
  )
  
}

export default Page