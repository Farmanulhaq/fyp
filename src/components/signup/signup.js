import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './signup.css'
import Footer from '../footer/Footer'
import pic from '../../others/vc.png'



const Signup = ({history}) => {

	let nav = useNavigate()

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	if(localStorage.getItem("authToken")){
	// 		history.push("/login")
	// 	}
	// }, [history])

	const registerHandler = async (e) => {
		e.preventDefault();
		const config = {
			header:{
				"Content-Type" : "application/json",
			}
		}
			try {
				const {data} = await axios.post("http://localhost:5000/api/auth/register", {username, email, password, confirmPassword},
				config)

				if(data.success === false){
					setError(data.error);
				}
				else{
					//localStorage.setItem("authToken", data.token);
					//history.push("/login")
					setMessage("Account Created Successfully!");
					setTimeout(() => {
						setMessage("");
					}, 3000)
					
				}

				
				
			} catch (error) {
				setError(error.response.data.error);
				setTimeout(() => {
					setError("");
				}, 3000);
			}
	}
	

	return (
		<>
			<div class="container">
				<div class="l-screen">
					<div class="overlay">
						<div class="overlay-panel overlay-right">
						<a href='/welcome'><img class = "pic1" src={pic}></img></a>
							<h1>Already have an account?</h1>
							<p>Login to your personal account and go with vehicify</p>
							<button class="ghost" onClick={() => { nav('/login') }} id="signin" >Sign In</button>
						</div>
					</div>
				</div>
				<div class="screen">
					<div class="screen__content">
						<form onSubmit={registerHandler} class="login">
							{error && <span className='dangerText error-message'>{error}</span>}
							{message && <span className='successText error-message'>{message}</span>}
							{/* <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="First Name" required></input>
				</div> */}
							<div class="login__field">
								<i class="login__icon fas fa-lock"></i>
								<input type="text" class="login__input"
									placeholder="User Name"
									required
									id='name'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								>
								</input>
							</div>
							<div class="login__field">
								<i class="login__icon fas fa-lock"></i>
								<input type="email" class="login__input"
									placeholder="Email"
									required
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								>
								</input>
							</div>
							<div class="login__field">
								<i class="login__icon fas fa-lock"></i>
								<input type="password" class="login__input" placeholder="Password"
									required
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								>
								</input>
							</div>
							<div class="login__field">
								<i class="login__icon fas fa-lock"></i>
								<input type="password" class="login__input"
									placeholder="Confirm Password"
									required
									id='confirmPassword'
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								>
								</input>
							</div>
							<button onClick={() => {nav('/OTP')}} class="button login__submit butt" >
								<span class="button__text">Create Account</span>
							</button>
							<a class='bth1' onClick={() => {nav('/welcome')}}>
							<i className='fas fa-arrow-alt-circle-left' ></i>Back To Home	
							</a>
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

export default Signup