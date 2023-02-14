import React from 'react'
import {useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "../forgetPassword/forgetPassword.css"

const Forget = () =>{

    let nav = useNavigate();

	const [email, setEmail] = useState("");
	
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	if(localStorage.getItem("authToken")){
	// 		nav('/welcome')
	// 	}
	// }, [history])

	const forgotPasswordHandler = async (e) => {
		e.preventDefault();

		const config = {
			headers:{
				"Content-Type" : "application/json",
			}
		}
		

		try {
			
			const {data} = await axios.post("http://localhost:5000/api/auth/forgot-password", {email},
			config)
			
			

				console.log(data.data.user_id)
				localStorage.setItem("_id" , data.data.user_id)
				localStorage.setItem("email",email);
				// localStorage.removeItem("chasis");
				// localStorage.setItem("authToken", data.token);
				setMessage("OTP verification code has been sent to your email address");
					setTimeout(() => {
						setMessage("");
                        nav('/verify-user')
					}, 3000)
			
			
			
		} catch (error) {
			
			setError(error.response.data.message);
			
			setTimeout(() => {
				setError("");
			}, 5000);
		
		}
	}
	
   


    return(
        <>
            <center><h2>Forgot Password?</h2></center>
            <div className="form">
                <form onSubmit ={forgotPasswordHandler}>
                {error && <span className='dangerText error-message'>{error}</span>}
						{message && <span className='dangerText error-message'>{message}</span>}
                    <div className="input-container">
                        <label>Enter Email Address </label>
                        <input  required type="email" name="uname" value={email}
					onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="button-container">
                        <center><button type='submit'>
								<span class="button__text" >Send Reset Code</span>
							</button></center>
                    </div>
					<center><button class="ghost2" onClick={() => { nav('/welcome') }} id="signin" >Back To Home</button></center>
					
                </form>
            </div>

        </>
    )

}

export default Forget