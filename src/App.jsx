import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import {HomeScreen, ListPopularMovies, MovieDetailScreen, ListTopRatedMovies, CartScreen} from "./views"
import {AppProvider} from "./context/AppContext"

function App() {
  return (
      <AppProvider>
        <BrowserRouter>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='movie/popular/1'>Popular Movies</NavLink>
            <NavLink to='movie/toprated/1'>Mejor Valoradas</NavLink>
            <NavLink to='cart'>Mi carrito</NavLink>
          </nav>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            {/* <Route path='/movies' element={<ListMoviesScreen />} /> */}
            <Route path={`movie/popular/:page`} element={<ListPopularMovies />} />
            <Route path={`movie/toprated/:page`} element={<ListTopRatedMovies />} />
            <Route path={`movie/:movieId`} element={<MovieDetailScreen />} />
            <Route path={`cart`} element={<CartScreen />} />
            <Route path='*' element={"Error 404"} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
  )
}

export default App;