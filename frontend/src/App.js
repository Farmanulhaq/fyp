import React from 'react';
import Home from './components/Home/Home';
import About from './components/about/About';
import Brand from './components/brand/Brand';
import Blogs from './components/blog/Blog';
import Car from './components/car/car'
import Team from './components/team/Team'
import Signin from './components/login/Login'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from './containers/footer/Footer';
import Login from './components/login/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Routes>
          <Route exact path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/' element={<About />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Car />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Brand />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Blogs />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Team />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Footer />}/>
        </Routes>

      </Router>

    </>
  );
}

export default App;
