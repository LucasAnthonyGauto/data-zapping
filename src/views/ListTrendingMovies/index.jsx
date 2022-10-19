import {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Button, Title } from "../../components/atoms"
import { MoviesCards, Keypad } from '../../components/organisms'

const Page = () => {
  const { page } =  useParams()
  const typePage = "movie/trending"
  const [searchedTime, setSearchedTime] = useState("week")

  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/${searchedTime}?&api_key=192e0b9821564f26f52949758ea3c473&language=es&page=${page}`)
    .then(res => {
      setMovies(res.data.results)
    }).catch(err => console.error(err))
  }
  
  useEffect(() => {
    fetchMovies()
  }, [page, searchedTime])

  function modifyTime () {
    if (searchedTime === "week") {
      setSearchedTime("day")
    }
    else if (searchedTime === "day" ) {
      setSearchedTime("week")
    }
  }

  return movies.length > 0 ? (
    <section className="">
      <Button buttonAction={() => {modifyTime()}} text={searchedTime}/>
      <Title
      titleStyle={"h1"} 
      type='h1' 
      text={`Most wanted movies of the ${searchedTime}`} />
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