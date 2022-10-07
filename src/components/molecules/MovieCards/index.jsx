import { Img, Title, Text } from '../../atoms'
import styles from "./styles.module.css"

function SmallCards ({ movieTitle, imageMovie,date, onClick }) {
  return (
    <div className={styles['filmContainer']} onClick={onClick}>
      <Img styleImg={"smallImg"} exportImg={imageMovie} textAlt={"Image from the movie " + movieTitle}/>
      <Title text={movieTitle} type={"h3"}/>
      <Text text={date}/>
    </div>
  )
}

export default SmallCards;