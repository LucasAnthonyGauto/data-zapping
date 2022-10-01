import {useContext} from "react"
import { Title, Text, Button, Img } from "../../components/atoms"
import { AppContext } from "../../context/AppContext"
const Page = () => {
  const {cart, increaseQty, decreaseQty, deleteFromCart, deleteAllCart, changeLenguage} = useContext(AppContext)
  return cart.length > 0 ? (
    <section>
      <Title type='h1' text="Mi carrito" />
      {cart.map((item) => (
        <div key={item.id}>
          <Img exportImg={`https://image.tmdb.org/t/p/w500/${item.img}`}/>
          <Title type={"h3"} text={item.title} />
          <Button text={"+"} buttonAction={() => increaseQty(item.id)}/>
          <Text text={item.quantity}/>
          <Button text={"-"} buttonAction={() => decreaseQty(item.id)}/>
          <Text/>
          <Button text={"Quitar del Carro"} buttonAction={() => deleteFromCart(item.id)}/>
        </div>
      ))}
      <Button text={"Baciar carrito"} buttonAction={() => deleteAllCart()}/>
        <div>
          <Title text={"Realizar pago"} type={"h3"}/>
          <Text text={`Total : $`}/>
          <Button text={"Pagar"}/>
        </div>
    </section>
  ) : (
    <section>
      <Title type='h1' text="Mi carrito" />
      <Text text={"Todabia no as agregado nada al carrito, exprora el catalogo para ver las mejores ofertas"}/>
    </section>
  )
} 
export default Page