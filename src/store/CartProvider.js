import CartContext from './cart-context'

const CartProvider = props => {
  const addItemToCart = (item) => {}

  const removeItemFromCart = (id) => {}

 const cardContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemToCart,
  removeItem: removeItemFromCart    
 }


  return (
    <CartContext.Provider value={cardContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider