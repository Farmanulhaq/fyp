import React from 'react'
import './login.css'
import Home from '../Home/Home'
import Footer from '../footer/Footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'

import {useNavigate} from 'react-router-dom'


const Signin = () => {
	
    let nav = useNavigate()

  return (
    <>
    <Home/>
    <div class="container">
	<div class="l-screen">
	<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp" onClick={() => {nav('/signup')}}>Sign Up</button>
			</div>
		</div>
	</div>
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" required></input>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" required></input>
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
				<p class='center'>Forgot Password?</p>
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="fa-brands fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	
</div>
  </>
  )
}

export default Signin