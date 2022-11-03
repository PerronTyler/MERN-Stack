import './App.css';
import Main from './pages/Main';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import AuthorsForm from './components/AuthorsForm';
import AuthorDetails from './pages/AuthorDetails';
import { useEffect } from 'react';


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/'){
      navigate('/authors')
    }
  }, [location.pathname, navigate])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route path='/authors' element={<Main />} />
          <Route path='/authors/new' element={<AuthorsForm />} />
          <Route path='/:id' element={<AuthorDetails />} />
          <Route path='/edit/:id' element={<AuthorsForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
