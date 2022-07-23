import React from 'react'
import styles from './Cartblock.module.scss'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const CartBlock = () => {
  return (
    <div className={styles.cart__container}>
        <Link to=''>
        <div><AiOutlineShoppingCart size={25} className={styles.cart__icon}/></div>
        </Link>
        <span className={styles.cart__totalprice}>2132 руб.</span>
    </div>
  )
}

export default CartBlock