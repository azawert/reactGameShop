import {
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/homepage';
import Header from './components/Header';


function App() {
  return (
    <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </div>
  );
}

export default App;
