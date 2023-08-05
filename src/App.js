import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News';
import BrandLogo from './components/BrandLogo';
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Categories from './components/Categories';

function App() {
  return (
 <>
    <BrandLogo/>
   <NavBar/>
   <BrowserRouter>   
   <Categories />
   <Routes>
   <Route exact path="/" element={<News key = "National" category={"national"} />} />
   <Route exact path="/sports" element ={<News key = "Sports" category={"sports"} />} />
   <Route exact path="/technology" element ={<News key = "Technology" category={"technology"} />} />
   <Route exact path="/science" element ={<News key = "Science" category={"science"} />} />
   <Route exact path="/business" element ={<News key = "Business" category={"business"} />} />
   <Route exact path="/politics" element ={<News key = "Politics" category={"politics"} />} />
   <Route exact path="/entertainment" element ={<News key = "Entertainment" category={"entertainment"} />} />
   <Route exact path="/world" element ={<News key = "World" category={"world"} />} />
   <Route exact path="/hatke" element ={<News key = "Hatke" category={"hatke"} />} />
   </Routes>
  
   
   </BrowserRouter>
   </>
  );
}

export default App;
