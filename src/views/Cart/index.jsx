import {useContext} from "react"
import { Title } from "../../components/atoms"
import { AppContext } from "../../context/AppContext"
const Page = () => {
  const {cart} = useContext(AppContext)
  return (
    <div>
      <Title type='h1' text="Mi carrito" />
      {cart.map((item) => (
        <div key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${item.img}`} style={{width: 150}}/>
          <Title type={"h2"} text={item.title} />
        </div>
      ))}
    </div> 
  )
}
export default Page