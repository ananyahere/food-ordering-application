import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart(props) {
  const cartItems = [{id: 'c1', name: 'susi', price: '34', amount: 2}].map(cartItem => <li>{cartItem.name}</li>)

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
