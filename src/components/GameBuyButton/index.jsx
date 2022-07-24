import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../button'
import styles from './GameBuyButton.module.scss'
import { addItemToCart } from '../../redux/slices/cartSlice'
const GameBuy = ({price,id,description,title,image,genres}) => {
  const dispatch = useDispatch();
  const game = {price,id,description,title,image,genres};
  const addToCart = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(game))
  }
  return (
    <div>
        <span className={styles.gamebuy__price}>{price} руб.</span>
       <Button onClick={addToCart} size='s' type='primary'>В корзину</Button>
    </div>
  )
}

export default GameBuy