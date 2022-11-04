import './App.css';
import Main from './pages/Main';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import PlayersForm from './components/PlayersForm';
import PlayerDetails from './pages/PlayerDetails';
import { useEffect } from 'react';


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/players')
    }
  }, [location.pathname, navigate])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route path='/players' element={<Main />} />
          <Route path='/players/new' element={<PlayersForm />} />
          <Route path='/:id' element={<PlayerDetails />} />
          <Route path='/status/:id' element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
