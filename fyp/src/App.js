import React from 'react';
import Home from './components/Home/Home';
import About from './components/about/About';
import Brand from './components/brand/Brand';
import Blogs from './components/blog/Blog';
import Car from './components/car/car'
import Team from './components/team/Team'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './containers/footer/Footer';

function App() {

  return (
    <>
    <Router>
      <Home />
      <Routes>
        <Route path='/' exact />
      </Routes>
      <About/>
      <Car/>
      <Brand/>
      <Car/>
      <Blogs/>
      <Team/>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
