import React from "react"

const AppContext = React.createContext()
const {Provider} = AppContext

const AppProvider = ({children}) => {
  const [cart, setCart] = React.useState([])
  const [selectLanguage, setLanguage] = React.useState("en")
  console.log(selectLanguage)

  const changeLenguage = (lenguage) => {
    setLanguage(lenguage)
  }

  const addToCart = (item, count) => {
    if(isInCart(item.id)) {
      const modifiedCart = cart.map((cartItem) => {
        if(cartItem.id === item.id) {
          cartItem.quantity++
        }
        return cartItem
      })
      setCart(modifiedCart)
    }
    else {
      setCart([...cart, {...item, quantity: count}])
    }
  }

  const deleteFromCart = (id) => {
    if(isInCart(id)) {
    setCart(cart.filter((item) => item.id !== id))
    } else {
      alert('Este item que intentas borrar ya no se encuentra en el carrito')
    }
  }

  const deleteAllCart = () => {
    setCart([])
  }

  const increaseQty = (id) => {
    const modifiedCart = cart.map((cartItem) => {
      if(cartItem.id === id) {
        cartItem.quantity++
      }
      return cartItem
    })
    setCart(modifiedCart)
  }

  const decreaseQty = (id) => {
    const modifiedCart = cart.map((cartItem) => {
      if(cartItem.id === id && cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        deleteFromCart(id)
      }
      return cartItem
    })
    setCart(modifiedCart)
  }


  const isInCart = (id) => {
    return cart.findIndex(item => item.id === id) >= 0 ? true : false
  }

  return (
    <Provider value={{
      cart,
      addToCart,
      increaseQty,
      decreaseQty,
      deleteFromCart,
      deleteAllCart,
      changeLenguage
    }}>
      {children}
    </Provider>
  )
}
export {AppContext, AppProvider}