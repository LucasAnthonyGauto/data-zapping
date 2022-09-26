import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import {HomeScreen, ListPopularMovies, MovieDetailScreen, ListTopRatedMovies} from "./views"
function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink activeClassName="active" to='/'>Home</NavLink>
          <NavLink activeClassName="active" to='movie/popular/1'>Popular Movies</NavLink>
          <NavLink activeClassName="active" to='movies/toprated/1'>Mejor Valoradas</NavLink>
        </nav>
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          {/* <Route path='/movies' element={<ListMoviesScreen />} /> */}
          <Route path={`movie/popular/:page`} element={<ListPopularMovies />} />
          <Route path={`movies/toprated/:page`} element={<ListTopRatedMovies />} />
          <Route path={`movie/:movieId`} element={<MovieDetailScreen />} />
          <Route path='*' element={"Error 404"} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;