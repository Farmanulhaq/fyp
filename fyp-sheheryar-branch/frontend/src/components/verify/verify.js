import React from 'react'
import {useNavigate} from 'react-router-dom'

import Home from '../Home/Home'



const Signup = () => {

    let nav = useNavigate()

  return (
    <>
    <Home/>
    <div class="container">
	<div class="l-screen">
	<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1>Want to verify your auction sheet?</h1>
				<p class= 'p1'>Steps to follow:-</p>
                <div class='list'>
                <li>Enter auction sheet number or the chasis number</li>
                <li>Click on verify</li>
                <li>Pay the required fees through one of the wallets mentioned</li>
                <li>Download the pdf of the authentic auction sheet to verify</li>
                </div>
				<button class="ghost" onClick={() => {nav('/login')}} id="signin" >Learn More</button>
			</div>
		</div>
	</div>
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
                    <h3>Enter Auction Sheet Or Chasis number</h3>
					<input type="text" class="login__input" required></input>
				</div>
				<button class="button login__submit">
					<span class="button__text">Verify</span>
				</button>
			</form>
		</div>
		
	</div>
	
</div>
  </>
  )
}

export default Signup