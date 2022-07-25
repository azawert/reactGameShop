import React from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router'
import { setCurrentGame } from '../../redux/slices/gameSlice';
import GameBuy from '../GameBuyButton'
import Genre from '../Genre'
import styles from './GameCard.module.scss'


function GameCard({...game}) {
  const {image,title,genres,id,price,description} = game;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGameClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/games/${title}`);
  }

  return (
    <div className={styles.gamecard__container} onClick={handleGameClick}>
      <div className={styles.gamecard__container__details}>
        <img src={image} className={styles.gamecard__container__image}></img>
        <span className={styles.gamecard__container__title}>{title}</span>
        <div className={styles.gamecard__container__genre}>
          {genres.map(genre=><Genre genre={genre} key={genre}/>)}
        </div>
        <div className={styles.gamecard__container__buybutton}><GameBuy  id={id} price={price} title={title} image={image} genres={genres} description={description}/></div>
      </div>
    </div>
    
  )
}

export default GameCard