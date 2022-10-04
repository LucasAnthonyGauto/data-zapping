import { Input, Button } from "../../atoms"
import {useNavigate} from "react-router-dom"
import { useState } from "react"
const NavBars = ({nLHome, nLPopular, nLTopRated, nLCart}) => {

  const navigate = useNavigate()
  const [moviName, setMoviName] = useState()

  const moviNameFuncion = () => {
    setMoviName(document.getElementsByName("search")[0].value);
    console.log(moviName);
  }
  const searchMovie = () => {
    moviNameFuncion()
    navigate(`/movie/search/${moviName}/1`)
  }
  


  return(
    <nav className="nav">
      <div className="nav-Full">
        <ul>
          <li>{nLHome}</li>
          <li>{nLPopular}</li>
          <li>{nLTopRated}</li>
          <li>{nLCart}</li>
        </ul>
        <div>
          <Input
            placeholderText={"Inserte nombre"} 
            onChange={moviNameFuncion} 
            inputType={"text"}
            name={"search"}
            />
          <Button 
          buttonAction={() => searchMovie()}/>
        </div>
      </div>
      <div className="nav-Menu-hide">
        <ul>
          <li>{nLHome}</li>
          <li>{nLPopular}</li>
          <li>{nLTopRated}</li>
          <li>{nLCart}</li>
        </ul>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBars;