import React from 'react'
import styles from './homepage.module.scss'
import axios from 'axios'
import GameCard from '../../components/GameCard'
import { Ring } from 'react-awesome-spinners'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGames } from '../../redux/slices/gamesSlice'
const HomePage = () => {
  // const [games,setGames] = React.useState([]);
  // const [isLoading,setIsLoading] = React.useState(true)
  const games = useSelector(state=>state.gamesSlice.games)
  const status = useSelector(state=>state.gamesSlice.status);
  const dispatch = useDispatch();
  const fetchData = () =>{
    dispatch(fetchGames())
    
  }
  React.useEffect( ()=> {
    
    fetchData();
   
  },[])
  

  return (
    <div className={styles.container}>
    {status === 'loading'? <Ring/> : games.map(game=><GameCard {...game} key={game.id}/>)}
    </div>
  )
}

export default HomePage