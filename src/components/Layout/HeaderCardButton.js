import React, {useContext} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'


function HeaderCardButton(props) {

  const cartCtx = useContext(CartContext)

  const numberOfCartItem = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCardButton
