import styles from './styles.module.css'
export default function Img ({ textAlt, exportImg, styleImg='smallImg' }) { 
  return ( 
  <img className={styles[styleImg]} alt={textAlt} src={exportImg}></img>
  )};