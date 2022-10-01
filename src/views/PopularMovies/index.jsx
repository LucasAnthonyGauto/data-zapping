import {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Title } from "../../components/atoms"
import { PopularMovies, Keypad } from '../../components/organisms'

const Page = () => {
  const { page } =  useParams()
  const typePage = "movie/popular"

  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/${typePage}?api_key=192e0b9821564f26f52949758ea3c473&language=en-MX&page=${page}`)
    .then(res => {
      setMovies(res.data.results)
    }).catch(err => console.error(err))
  }

  console.log(page);

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
          {movies.length && <PopularMovies movies={movies}/>}
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