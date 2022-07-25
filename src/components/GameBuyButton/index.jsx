import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../button'
import styles from './GameBuyButton.module.scss'
import { addItemToCart, deleteItemFromCart } from '../../redux/slices/cartSlice'
const GameBuy = ({price,id,description,title,image,genres}) => {
  const dispatch = useDispatch();
  const game = {price,id,description,title,image,genres};
  const [isAdded,setIsAdded] = React.useState(false);
  const addToCart = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(game))
    setIsAdded(true);
  }
  const removeFromCart = (e)=>{
    e.stopPropagation();
    dispatch(deleteItemFromCart(game))
    setIsAdded(false);
  }
  return (
    <div>
        <span className={styles.gamebuy__price}>{price} руб.</span>
       {isAdded?<Button onClick={removeFromCart} size='s' type='secondary'>Удалить из корзины</Button> : <Button onClick={addToCart} size='s' type='primary'>В корзину</Button>}
    </div>
  )
}

export default GameBuy