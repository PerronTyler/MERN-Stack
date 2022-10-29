import './App.css';
import {Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import NumID from './pages/NumID';
import Hello from './pages/Hello';
import MainHeader from './components/MainHeader';
import CustomHello from './pages/CustomHello';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Routes>
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/Hello' element={<Hello />} />
        <Route path='/:NumID' element={<NumID />} />
        <Route path='/:anyWord/:anyColor/:anyBackground' element={<CustomHello/>} />
      </Routes>
    </div>
  );
}

export default App;
