import React from 'react'
import {useNavigate} from 'react-router-dom'

import './signup.css'
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
				<h1>Already have an account?</h1>
				<p>Login to your personal account and go with vehicify</p>
				<button class="ghost" onClick={() => {nav('/login')}} id="signin" >Sign In</button>
			</div>
		</div>
	</div>
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="First Name" required></input>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="text" class="login__input" placeholder="Last Name" required></input>
				</div>
                <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="text" class="login__input" placeholder="Email" required></input>
				</div>
                <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" required></input>
				</div>
                <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Confirm Password" required></input>
				</div>
				<button class="button login__submit">
					<span class="button__text">Create Account</span>
				</button>
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	
</div>
  </>
  )
}

export default Signup