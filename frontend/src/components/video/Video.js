import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Video.css'

import {useNavigate} from 'react-router-dom'


import cars from '../../others/movingCars.mp4'


const Video = () => {
  
  let nav = useNavigate()
  const [showSignUpButton, setShowSignUpButton] = useState(true)
  const [showLogInButton, setShowLogInButton] = useState(true)
  useEffect(() => {
      if(localStorage.getItem("authToken")){
        setShowSignUpButton(false);
        setShowLogInButton(false);
      }
  })

  return (
    <div className='hero' id='home'>
      <video autoPlay loop muted id='video'>
        <source src={cars} type='video/mp4' />
      </video>

      <div className='content'>
        <h1>VEHICFY</h1>
        <p>100% Authentic vehicles verification through BlockChain</p>

        <div>
          <button class="cybr-btn" onClick={() => {nav('/verify')}}>
            Verify
            <span aria-hidden class="cybr-btn__glitch">Verify</span>
          </button> 
          { showSignUpButton ? 
          <button onClick={() => {nav('/signup')}} class="cybr-btn">
            Sign Up
            <span aria-hidden class="cybr-btn__glitch">Sign Up</span>
          </button> : null }
          { showLogInButton ?
          <button onClick={() => {nav('/login')}} class="cybr-btn" to="/signin">
            Sign In
            <span aria-hidden  class="cybr-btn__glitch">Sign In</span>
          </button> : null }
          {/* <Link to='/signIn' className='btn btn-dark'>SignIn</Link>
          <Link to='/signUp' className='btn btn-dark'>SignUP</Link> */}
        </div>
      </div>

      {/* <Modal size='lg' isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          <ModalBody>
          <div class="container">
  <div class="row">
    <div class="col-md-6">
      1 of 2
    </div>
    <div class="col-md-6">
      2 of 2
    </div>
  </div>
</div>
          </ModalBody> */}

      {/* </ModalHeader>
      </Modal> */}

    </div>
  )
}

export default Video