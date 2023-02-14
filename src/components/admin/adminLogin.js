import React from 'react'
import './adminLogin.css'
import Home from '../Home/Home'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import pic from '../../others/vc.png'
import {useNavigate} from 'react-router-dom'


const AdminSignin = ({history}) => {

	let nav = useNavigate()

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if(localStorage.getItem("authToken")){
			nav('/welcome')
		}
	}, [history])

	const loginHandler = async (e) => {
		e.preventDefault();

		const config = {
			headers:{
				"Content-Type" : "application/json",
			}
		}

		try {
			const {data} = await axios.post("http://localhost:5000/api/auth/login", {email, password},
			config)

			if(data.sucess === false){
				setError(data.error);
			}
			else{
				localStorage.setItem("email",email);
				localStorage.removeItem("chasis");
				localStorage.setItem("authToken", data.token);
				nav('/welcome')
			}

			
			
		} catch (error) {
			setError(error.response.data.error);
			setTimeout(() => {
				setError("");
			}, 5000000);
		}
	}
	
   

  return (
    <>
    <div class="container">
		
	<div class="l-screen">
	<div class="overlay">
	

			<div class="overlay-panel overlay-right">
				<a href='/welcome'><img class = "pic1" src={pic}></img></a>
				<h1>Admin Login</h1>
				<p>Admin can Login into this</p>
				{/* <button class="ghost" id="signUp" onClick={() => {nav('/signup')}}>Sign Up</button> */}
			</div>
		</div>
	</div>
	<div class="screen">
		
		<div class="screen__content">
			<form onSubmit={loginHandler} class="login">
			{error && <span className='dangerText error-message'>{error}</span>}
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Enter Email" 
					required
					id='loginemail'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					>
					</input>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" 
					placeholder="Password" 
					required
					id='loginpassword'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
				{/* <p class='forget' >Forgot Password?</p> */}
			</form>
			{/* <div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-google"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
			{/* <a class='bth' onClick={() => {nav('/welcome')}}>
				<i className='fas fa-arrow-alt-circle-left back' ></i>Back To Home	
			</a> */}
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

export default AdminSignin