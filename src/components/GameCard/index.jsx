import React from 'react'
import styles from './GameCard.module.scss'
import GameBuy from '../GameBuyButton'
import Genre from '../Genre'
function GameCard({title,image,genres,id,price,description}) {
  return (
    <div className={styles.gamecard__container}>
      <div className={styles.gamecard__container__details}>
        <img src={image} className={styles.gamecard__container__image}></img>
        <span className={styles.gamecard__container__title}>{title}</span>
        <div className={styles.gamecard__container__genre}>
          {genres.map(genre=><Genre genre={genre} key={genre}/>)}
        </div>
        <div className={styles.gamecard__container__buybutton}><GameBuy  id={id} price={price}/></div>
      </div>
    </div>
    
  )
}

export default GameCard