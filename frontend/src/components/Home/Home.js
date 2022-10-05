import {React, useState} from 'react';
import { Link } from 'react-scroll';
import './Home.css'
import pic from '../../others/vc.png'
import {useNavigate} from 'react-router-dom'



const Home = () => {
  let nav = useNavigate()

  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  return (
    <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary fixed-top ">
    <div class="container-fluid header">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
        <a href='/welcome'><img src={pic} class=" nav-link  navbar-brand pic" alt='#' ></img></a>
        {/* <a class=" nav-link active navbar-brand" href="#">Hidden brand</a> */}
        
  
       
        <ul class="navbar-nav myUL  mb-2 mb-lg-0  ms-auto">
       
          <li class="nav-item ">
            <Link to="home" spy={true} smooth={true} offset={-100} dunpmration={50} class="nav-link  nav-content active" onClick={() => {nav('/welcome')}}  >Home</Link>
          </li>
          <li class="nav-item ">
            <Link  to="abt_vehicify" spy={true} smooth={true} offset={-100} dunpmration={200} class="nav-link nav-content"  onClick={closeMenu} >About Us</Link>
          </li>
          <li class="nav-item  ">
            <Link to="brand" spy={true} smooth={true} offset={-100} dunpmration={500}  class="nav-link nav-content" >Our Support</Link>
          </li>
          <li class="nav-item  ">
            <Link to="blog" spy={true} smooth={true} offset={-100} dunpmration={500} class="nav-link nav-content" >Blogs</Link>
          </li>
          <li class="nav-item  ">
            <Link to="team" spy={true} smooth={true} offset={-100} dunpmration={500} class="nav-link nav-content" >Our Team</Link>
          </li>
          <li class="nav-item  ">
            <Link to="contact" spy={true} smooth={true} offset={-100} dunpmration={500} class="nav-link nav-content" >Contact Us</Link>
          </li>
        </ul>

        </div>
  
      
    </div>
      </nav>
      
    </div>
    
   
  )
}

export default Home