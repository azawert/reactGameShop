import React from 'react'
import styles from './homepage.module.scss'
import axios from 'axios'
import GameCard from '../../components/GameCard'
import { Ring } from 'react-awesome-spinners'
const HomePage = () => {
  const [games,setGames] = React.useState([]);
  const [isLoading,setIsLoading] = React.useState(true)

  React.useEffect( ()=> {
    async function fetchData() {
     await axios.get('https://62dc85c04438813a2616dd38.mockapi.io/games').then((response)=>{
      setGames(response.data)
      setIsLoading(false);
    })
    }
    fetchData();
  },[])
  

  return (
    <div className={styles.container}>
    {isLoading? <Ring/> : games.map(game=><GameCard {...game} key={game.id}/>)}
    </div>
  )
}

export default HomePage