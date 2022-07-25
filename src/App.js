import {
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/homepage';
import Header from './components/Header';
import CartPage from './pages/cartpage';
import GamePage from './pages/gamepage';


function App() {
  return (
    <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/games/:title' element ={<GamePage/>}/>
    </Routes>
    </div>
  );
}

export default App;
