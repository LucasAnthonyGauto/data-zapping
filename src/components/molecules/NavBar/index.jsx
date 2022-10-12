import { Input, Button, Text } from "../../atoms"
import {useNavigate} from "react-router-dom"
import { useState } from "react"
import styles from './styles.module.css'
const NavBar = ({NLAPopular ,NLATrending ,NLMPopular ,NLMTopRated ,NLMTrending ,NLMUpcomiCinema ,NLSOnAir ,NLSPopular ,NLSTopRated ,NLSTrending, NLenguage,NFavorites}) => {

  const navigate = useNavigate()
  const [moviName, setMoviName] = useState("")
  const [menuHide, setMenuHide] = useState("nav-hide")
  const [hideMovi, setHideMovi] = useState(false)
  const [hideSeries, setHideSeries] = useState(false)
  const [hideActors, setHideActors] = useState(false)

  const moviNameFuncion = () => {
    setMoviName(document.getElementsByName("search")[0].value);
    console.log(moviName);
  }
  const searchMovie = () => {
    if (moviName === "" ){ 
  }else {
    navigate(`/movie/search/${moviName}/1`)
  }
  }

  function hideMenu () {
    if (menuHide === "nav-active") {
      setMenuHide("nav-hide")
    }
    else if (menuHide === "nav-hide" ) {
      setMenuHide("nav-active")
    }
  }
  function modifyMovi () {
    if (hideMovi === false) {
      setHideMovi(true)
    }
    else if (hideMovi === true ) {
      setHideMovi(false)
    }
  }
  function modifySerie () {
    if (hideSeries === false) {
      setHideSeries(true)
    }
    else if (hideSeries === true ) {
      setHideSeries(false)
    }
  }
  function modifyActors () {
    if (hideActors === false) {
      setHideActors(true)
    }
    else if (hideActors === true ) {
      setHideActors(false)
    }
  }
  return(
    <nav className={styles["nav"]}>
      <div className={styles["nav-search"]}>
        <Input
          placeholderText={"search movi"} 
          onChange={() => moviNameFuncion()} 
          inputType={"text"}
          name={"search"}
          />
        <Button 
        text={"HOLA"}
        btnStyle={"btnSearch"}
        buttonAction={() => searchMovie()}/>
      </div>
      <div className={styles["nav-full"]}>
        <ul className={styles["nav-full-links"]}>
          <li 
            onMouseEnter={() => {setHideSeries(true)}}
            onMouseLeave={() => {setHideSeries(false)}}>Series
            {hideSeries && (
            <ul className={styles["nav-full-links-float"]}>
              <li>{NLSTopRated}</li>
              <li>{NLSPopular}</li>
              <li>{NLSOnAir}</li>
              <li>{NLSTrending}</li>
            </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => {setHideMovi(true)}}
            onMouseLeave={() => {setHideMovi(false)}}>Movies
            {hideMovi && (
              <ul className={styles["nav-full-links-float"]}>
                <li>{NLMTopRated}</li>
                <li>{NLMPopular}</li>
                <li>{NLMUpcomiCinema}</li>
                <li>{NLMTrending}</li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => {setHideActors(true)}}
            onMouseLeave={() => {setHideActors(false)}}>Actors
            {hideActors && (
            <ul className={styles["nav-full-links-float"]}>
              <li>{NLAPopular}</li>
              <li>{NLATrending}</li>
            </ul>
            )}
          </li>
          <li>{NLenguage}</li>
          <li>{NFavorites}</li>
        </ul>
      </div>
      <div className={[styles[menuHide]]}>
          <Text text={"Menu"}/>
          <ul className={styles["nav-hide-links"]}>
            <li>Recommendation</li>
            <li 
              onClick={() => {modifySerie()}}>Series
              {hideSeries && (
            <ul className={styles["nav-full-links-spam"]}>
              <li>{NLSTopRated}</li>
              <li>{NLSPopular}</li>
              <li>{NLSOnAir}</li>
              <li>{NLSTrending}</li>
            </ul>
            )}
          </li>
          <li 
            onClick={() => {modifyMovi()}}>Movies
            {hideMovi && (
              <ul className={styles["nav-full-links-spam"]}>
                <li>{NLMTopRated}</li>
                <li>{NLMPopular}</li>
                <li>{NLMUpcomiCinema}</li>
                <li>{NLMTrending}</li>
              </ul>
            )}
          </li>
          <li 
            onClick={() => {modifyActors()}}>Actors
            {hideActors && (
            <ul className={styles["nav-full-links-spam"]}>
              <li>{NLAPopular}</li>
              <li>{NLATrending}</li>
            </ul>
            )}
          </li>
            <li>{NLenguage}</li>
            <li>{NFavorites}</li>
          </ul>
      </div>
        <div onClick={() => {hideMenu()}} className={[styles["nav-hide-menu"]]}>
          <div className={styles["line1"]}>Prueva</div>
          <div className={styles["line2"]}>Prueva</div>
          <div className={styles["line3"]}>Prueva</div>
        </div>
    </nav>
  )
}

export default NavBar;