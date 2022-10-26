import React from 'react';
import './App.css';
import Header from './components/FunctionalComponent/Header'
import Navigation from './components/FunctionalComponent/Navigation'
import Main from './components/FunctionalComponent/Main'
import SubContents from './components/FunctionalComponent/SubContents'
import Advertisement from './components/FunctionalComponent/Advertisement'

                
function App() {
  return (
    <div className="app">
        
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}
export default App;


