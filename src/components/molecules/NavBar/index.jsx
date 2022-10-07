import { Input, Button } from "../../atoms"
import {useNavigate} from "react-router-dom"
import { useState } from "react"
import styles from './styles.module.css'
const NavBar = ({}) => {

  const navigate = useNavigate()
  const [moviName, setMoviName] = useState("")

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


  return(
    <nav className={styles["nav"]}>
      <div className={styles["nav-full"]}>
        <ul className={styles["nav-full-links"]}>
          <li>"Home"</li>
          <li>""</li>
          <li>""</li>
          <li>""</li>
          <li>""</li>
          <li>""</li>
          <li>""</li>
        </ul>
      </div>
      <div className={styles["nav-search"]}>
        <Input
          placeholderText={"search movi"} 
          onChange={() => moviNameFuncion()} 
          inputType={"text"}
          name={"search"}
          />
        <Button 
        buttonAction={() => searchMovie()}/>
      </div>
      <div className={styles["nav-hide"]}>
          <spam></spam>
        <ul className={styles["nav-hide-links"]}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className={styles["nav-hide-munu"]}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;