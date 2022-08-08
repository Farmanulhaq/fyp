import React from 'react'
import Home from '../Home/Home'
import About from '../about/About'
import Brand from '../brand/Brand';
import Blogs from '../blog/Blog';
import Car from '../car/car'
import Team from '../team/Team'
import Footer from '../footer/Footer';
import Video from '../video/Video';

const welcome = () => {
  return (
    <>
    <Home/>
    <Video />
    <About/>
    <Car/>
    <Brand/>
    <Car/>
    <Blogs/>
    <Team/>
    <Footer/>
    

    </>
  )
}

export default welcome