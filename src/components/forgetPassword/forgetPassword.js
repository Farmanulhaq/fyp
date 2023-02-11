import React from 'react'
import {useNavigate } from 'react-router-dom'
import "../forgetPassword/forgetPassword.css"

const Forget = () =>{

    let nav = useNavigate();

    return(
        <>
            <center><h2>Forgot Password?</h2></center>
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Enter Email Address </label>
                        <input  required type="email" name="uname" />
                    </div>
                    <div className="button-container">
                        <center><button type='submit'>
								<span class="button__text" onClick={() => {nav('/OTP')}}>Send Reset Code</span>
							</button></center>
                    </div>
                </form>
            </div>

        </>
    )

}

export default Forget