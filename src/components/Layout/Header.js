import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table-full-of-food"/>
      </div>
    </>
  )
}

export default Header
