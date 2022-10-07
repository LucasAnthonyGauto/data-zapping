import {useState, useEffect} from "react"
import axios from "axios"
import {Title} from "../../components/atoms"
import {MoviesCards, Keypad} from "../../components/organisms"
import { useParams } from "react-router-dom"


const Page = () => {
  const [movies, setMovies] = useState([])
  const { page, movi } = useParams()
  const typePage = "movie/search/" + movi
  
  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movi}&api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${page}`).then(res => {
      setMovies(res.data.results)
    }).catch(err => console.error(err))
  }
  useEffect(() => {
    fetchMovies()
  }, [page])

  return movies.length > 0 ? (
    <section className="">
      <Title
      titleStyle={"h1"} 
      type='h1' 
      text={`Best popular movies`} />
        <div 
        className={"listMovies"}>
          {movies.length && <MoviesCards movies={movies}/>}
        </div>
        <div className={"paginationButtons"}>
          <Keypad positionPage={page} page={+page} typePage={typePage}/>
        </div>
    </section>
    ) : (
      <Title text={"Esta pagina no existe"} type={"h1"}/>
    )
}

export default Page