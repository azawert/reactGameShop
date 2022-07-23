import React from 'react'
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import CartBlock from '../Cartblock'
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.wrapper}>
            <Link to = "/" className={styles.store__title}>
                GameStore 
            </Link>
        </div>
        <div className={styles.cart__btn_wrapper}>
            <CartBlock/>
        </div>
    </div>
  )
}

export default Header