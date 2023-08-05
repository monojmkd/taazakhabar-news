import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News';
import image from './media/1.png'

function App() {
  return (
    <>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <img src={image} style={{maxWidth:"50%"}} alt="..."></img>
    </div>
   <NavBar/>
  <News/>
   </>
  );
}

export default App;
