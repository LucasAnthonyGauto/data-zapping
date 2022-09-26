import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoveButtons } from '../../molecules'
import style from './styles.module.css'

function Keypad  ({ page, typePage }) {
  const navigate = useNavigate()
  const [pageNumber, setPageNumber] = useState(page)
  console.log(pageNumber);

  return(
    <div className={[style["keypad"]].join(" ")}>
      <MoveButtons 
        buttonAction={() => navigate(`/movie/popular/${1 + 1}`)} 
        text={"Atras"}/>
      <MoveButtons buttonAction={""} text={""}/>
      <MoveButtons buttonAction={""} text={""}/>
      <MoveButtons buttonAction={""} text={page}/>
      <MoveButtons buttonAction={""} text={""}/>
      <MoveButtons buttonAction={""} text={"A"}/>
    </div>
  )
}


export default Keypad