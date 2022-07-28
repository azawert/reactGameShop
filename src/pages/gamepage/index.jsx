import React from "react";
import { useSelector } from "react-redux";
import Genre from "../../components/Genre";
import GameBuy from "../../components/GameBuyButton";
import styles from "./GamePage.module.scss";
const GamePage = () => {
  const selectedGame = useSelector((state) => state.gamesSlice.currentGame);

  if (!selectedGame) return null;

  return (
    <div className={styles.gamepage__wrapper}>
      <h1 className={styles.gamepage__wrapper__content__title}>{selectedGame.title}</h1>
      <div className={styles.gamepage__wrapper__content}>
        <div className={styles.gamepage__wrapper__content__left}>
          <iframe
            width="90%"
            height="400px"
            src={selectedGame.video}
            title={selectedGame.title}
          ></iframe>
        </div>
        <div className={styles.gamepage__wrapper__content__right}>
          <img src={selectedGame.image}></img>
          <p>{selectedGame.description}</p>
          <p className={styles.gamepage__wrapper__content__secondary__text}>Популярные метки:</p>
          {selectedGame.genres.map((genre) => (
            <Genre genre={genre} />
          ))}
          <div className={styles.gamepage__wrapper__content__buy__button}>
            <GameBuy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
