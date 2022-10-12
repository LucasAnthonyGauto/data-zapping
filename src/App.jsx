import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import {HomeScreen, ListPopularMovies, MovieDetailScreen, ListTopRatedMovies, CartScreen, SearchMovies, ListTrendingMovies} from "./views"
import {AppProvider} from "./context/AppContext"
import NavBars from "./components/molecules/NavBar";

function App() {
  return (
      <AppProvider>
        <BrowserRouter>
            <NavBars></NavBars>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='movie/popular/1'>Popular Movies</NavLink>
            <NavLink to='movie/toprated/1'>Mejor Valoradas</NavLink>
            <NavLink to='movie/trending/1'>Tendencias</NavLink>
            <NavLink to='cart'>Mi carrito</NavLink>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            {/* <Route path='/movies' element={<ListMoviesScreen />} /> */}
            <Route path={`movie/popular/:page`} element={<ListPopularMovies />} />
            <Route path={`movie/toprated/:page`} element={<ListTopRatedMovies />} />
            <Route path={`movie/trending/:page`} element={<ListTrendingMovies />} />
            <Route path={`movie/search/:movi/:page`} element={<SearchMovies />} />
            <Route path={`movie/:movieId`} element={<MovieDetailScreen />} />
            <Route path={`cart`} element={<CartScreen />} />
            <Route path='*' element={"Error 404"} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
  )
}

export default App;