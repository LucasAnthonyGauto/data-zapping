import { useNavigate } from 'react-router-dom'
import { MoveButtons } from '../../molecules'
import style from './styles.module.css'

function Keypad  ({ page, typePage, positionPage }) {
  const navigate = useNavigate()

  const pagination = (moved) => {
    navigate(`/${typePage}/${moved}`)
  }

  switch (positionPage) {
    case '1':
      return(
        <div className={[style["keypad"]].join(" ")}>
          <MoveButtons btnType={"pageActual"} text={page}/>
          <MoveButtons buttonAction={() => pagination(page + 1)}text={page + 1}/>
          <MoveButtons buttonAction={() => pagination(page + 2)}text={page + 2}/>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page + 3)}text={page + 3}/>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page + 4)}text={page + 4}/>
        </div>
      )
    case '2':
      return(
        <div className={[style["keypad"]].join(" ")}> 
          <MoveButtons buttonAction={() => pagination(page - 1)}text={page - 1}/>
          <MoveButtons btnType={"pageActual"} text={page}/>
          <MoveButtons buttonAction={() => pagination(page + 1)}text={page + 1}/>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page + 2)}text={page + 2}/>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page + 3)}text={page + 3}/>
        </div>
      )
    case '499':
      return(
        <div className={[style["keypad"]].join(" ")}>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page - 3)}text={page - 3}/>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page - 2)}text={page - 2}/>
          <MoveButtons buttonAction={() => pagination(page - 1)}text={page - 1}/>
          <MoveButtons btnType={"pageActual"} text={page}/>
          <MoveButtons buttonAction={() => pagination(page + 1)}text={page + 1}/>
        </div>
        )
    case '500':
      return(
        <div className={[style["keypad"]].join(" ")}>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page - 4)}text={page - 4}/>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page - 3)}text={page - 3}/>
          <MoveButtons buttonAction={() => pagination(page - 2)}text={page - 2}/>
          <MoveButtons buttonAction={() => pagination(page - 1)}text={page - 1}/>
          <MoveButtons btnType={"pageActual"} text={page}/>
        </div>
        )
    default: {
      return(
        <div className={[style["keypad"]].join(" ")}>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page - 2)}text={page - 2}/>
          <MoveButtons buttonAction={() => pagination(page - 1)}text={page - 1}/>
          <MoveButtons btnType={"pageActual"} text={page}/>
          <MoveButtons buttonAction={() => pagination(page + 1)}text={page + 1}/>
          <MoveButtons btnType={"hide"} buttonAction={() => pagination(page + 2)}text={page + 2}/>
        </div>
      )
    }
  }
}

export default Keypad