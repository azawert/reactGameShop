import React from 'react'
import Button from '../button'
import styles from './GameBuyButton.module.scss'
const GameBuy = ({price,id}) => {
  return (
    <div>
        <span className={styles.gamebuy__price}>{price} руб.</span>
       <Button onClick={()=>{}} size='s' type='primary'>В корзину</Button>
    </div>
  )
}

export default GameBuy