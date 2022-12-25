import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Footer from '../footer/Footer';
import './verify.css'

const Verify = () => {

    let nav = useNavigate()

	const[chasis,setChasis] = useState("")

	const handle=() =>{
		localStorage.setItem("chasis",chasis);
		nav('/payment');
	}
	

	// function Store_Chasis_No()
	// {
	// 	const temp = document.getElementById('login');
	// 	const btn = document.getElementById('chasis_submit');
	// 	console.log(temp);
	// 	localStorage.setItem(temp);
	// }


	useEffect(() => {
		if(!localStorage.getItem("authToken")){
			nav('/login');
		}
	})

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
					<input type="text" id="login" class="login__input" placeholder="Enter Chasis Number"onChange={(e) => setChasis(e.target.value) }  required >
					</input>
				</div>
				
				<button type='button' class="button login__submit" id="chasis_submit" onClick= {handle} >
					<span class="button__text" >Submit</span>
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
// onClick={() => { nav('/payment') }}
// onClick={Store_Chasis_No}