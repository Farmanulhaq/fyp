import React from 'react'
import {useNavigate} from 'react-router-dom'
import Footer from '../footer/Footer';
import './verify.css'

const Verify = () => {

    let nav = useNavigate()

  return (
    <>
    <div class="container">
	<div class="l-screen">
	<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1 class='r1'>Verify Auction Sheets!</h1>
				<p class= 'p1'>Steps to follow:-</p>
                <div class='list'>
                <li>Enter auction sheet number or the chasis number</li>
                <li>Click on verify</li>
                <li>Pay the required fees through one of the wallets mentioned</li>
                <li>Download the pdf of the authentic auction sheet to verify</li>
                </div>
				<button class="ghost" onClick={() => {nav('/welcome')}} id="signin" >Back To Home</button>
			</div>
		</div>
	</div>
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Enter Chasis Number" 
					required
					id='loginemail'
					>
					</input>
				</div>
				<button class="button login__submit">
					<span class="button__text">Submit</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>	
		
	</div>
		
	
</div>
<Footer/>

  </>
  )
}

export default Verify