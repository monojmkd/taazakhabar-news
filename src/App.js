import React , { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News';
import BrandLogo from './components/BrandLogo';
import { Route,HashRouter,Routes } from "react-router-dom";
import Categories from './components/Categories';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'
const App =()=> {
  const [progress, setProgress] = useState(0) 
  return (
 <>
    <BrandLogo/>
   <NavBar/>
   <LoadingBar
      height={8}
        color='#A3CAEF'
        progress={progress} />
   <HashRouter>   
   <Categories />
   <Routes>
   <Route exact path="/" element={<News setProgress = {setProgress} key = "National" category={"national"} />} />
   <Route exact path="/sports" element ={<News  setProgress = {setProgress} key = "Sports" category={"sports"} />} />
   <Route exact path="/technology" element ={<News setProgress = {setProgress} key = "Technology" category={"technology"} />} />
   <Route exact path="/science" element ={<News setProgress = {setProgress} key = "Science" category={"science"} />} />
   <Route exact path="/business" element ={<News setProgress = {setProgress} key = "Business" category={"business"} />} />
   <Route exact path="/politics" element ={<News setProgress = {setProgress} key = "Politics" category={"politics"} />} />
   <Route exact path="/entertainment" element ={<News setProgress = {setProgress} key = "Entertainment" category={"entertainment"} />} />
   <Route exact path="/world" element ={<News setProgress = {setProgress} key = "World" category={"world"} />} />
   <Route exact path="/hatke" element ={<News setProgress = {setProgress} key = "Hatke" category={"hatke"} />} />
   </Routes>   
   </HashRouter>
   <Footer/>
   </>
  );
}

export default App;
