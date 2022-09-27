import {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import styles from './style.module.css'
import { Title } from "../../components/atoms"
import { PopularMovies, Keypad } from '../../components/organisms'

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


  console.log(page);


  useEffect(() => {
    fetchMovies()
  }, [page])
  switch (page){
    case '1':
      return (
        <section className="">
          <Title
          titleStyle={"h1"} 
          type='h1' 
          text={`Best popular movies`} />
            <div 
            className={styles["listMovies"]}>
              {movies.length && <PopularMovies movies={movies}/>}
            </div>
            <Keypad positionPage={"1"} page={Number(page)} typePage={typePage}/>
        </section>
      )
    case '2':
      return (
        <section className="">
          <Title
          titleStyle={"h1"} 
          type='h1' 
          text={`Best popular movies`} />
            <div 
            className={styles["listMovies"]}>
              {movies.length && <PopularMovies movies={movies}/>}
            </div>
            <Keypad positionPage={"2"} page={Number(page)} typePage={typePage}/>
        </section>
        )
    case '499':
      return (
        <section className="">
          <Title
          titleStyle={"h1"} 
          type='h1' 
          text={`Best popular movies`} />
            <div 
            className={styles["listMovies"]}>
              {movies.length && <PopularMovies movies={movies}/>}
            </div>
            <Keypad positionPage={"499"} page={Number(page)} typePage={typePage}/>
        </section>
        )
    case '500':
      return (
        <section className="">
          <Title
          titleStyle={"h1"} 
          type='h1' 
          text={`Best popular movies`} />
            <div 
            className={styles["listMovies"]}>
              {movies.length && <PopularMovies movies={movies}/>}
            </div>
            <Keypad positionPage={"500"} page={Number(page)} typePage={typePage}/>
        </section>
        )
    default:
      return movies.length>0 ?(
        <section className="">
          <Title
          titleStyle={"h1"} 
          type='h1' 
          text={`Best popular movies`} />
            <div 
            className={styles["listMovies"]}>
              {movies.length && <PopularMovies movies={movies}/>}
            </div>
            <Keypad page={Number(page)} typePage={typePage}/>
        </section>
        ) : (
          <Title text={"Esta pagina no existe"} type={"h1"}/>
        )
    }
  
}

export default Page