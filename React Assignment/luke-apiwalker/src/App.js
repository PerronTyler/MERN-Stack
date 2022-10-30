import './App.css';
import { Route, Routes } from 'react-router-dom';
import LukeForm from './components/LukeForm';
import React from 'react';
import People from './pages/People';
import Planets from './pages/Planets';
import Error from './pages/Error';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element= {<LukeForm />}>
          <Route path='/people/:id' element={<People/>} />
          <Route path='/planets/:id'element={<Planets/>} />
          <Route path='/Error'element={<Error/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
