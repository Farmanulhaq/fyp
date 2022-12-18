import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
import './payment.css'

const Payment = () => {



    const [cardHolderName, setcardHolderName] = useState("");
	const [cardNumber, setcardNumber] = useState("");
	const [cvv, setCVV] = useState("");
	const [exp_month, setExpMonth] = useState("");
    const [exp_year, setExpYear] = useState("");
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

    const paymentHandler = async (e) => {
		e.preventDefault();
		const config = {
			header:{
				"Content-Type" : "application/json",
			}
		}
			try {
				const {data} = await axios.post("http://localhost:5000/api/auth/payment", {username,cardHolderName, cardNumber, exp_month, exp_year,cvv, chassis},
				config)

				if(data.success === false){
					setError(data.error);
				}
				else{
					//localStorage.setItem("authToken", data.token);
					//history.push("/login")
					setMessage("Card Added Successfully!");
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

    return(
        <>
  <div class="wrapper">
        <form action="" onSubmit={paymentHandler}>
        {error && <span className='dangerText error-message'>{error}</span>}
		{message && <span className='successText error-message'>{message}</span>}
        {/* {error && <span className='dangerText error-message'>{error}</span>}
		{message && <span className='successText error-message'>{message}</span>} */}
            <h4>Account</h4>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" 
                    placeholder="Full Name" 
                    required class="name"
                    id='name'
					value={cardHolderName}
					onChange={(e) => setcardHolderName(e.target.value)}
                    ></input>
                    <i class="fa fa-user icon"></i>
                </div>
                <div class="input_box">
                    <input type="text" 
                    placeholder="Name on Card" 
                    required class="name"
                    ></input>
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="email" placeholder="Email Address" required class="name"></input>
                    <i class="fa fa-envelope icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" placeholder="Address" required class="name"></input>
                    <i class="fa fa-map-marker icon" aria-hidden="true"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" placeholder="City" required class="name"></input>
                    <i class="fa fa-institution icon"></i>
                </div>
            </div>


            <div class="input_group">
                <div class="input_box">
                    <h4>Date Of Birth</h4>
                    <input type="text" placeholder="DD" required class="dob"></input>
                    <input type="text" placeholder="MM" required class="dob"></input>
                    <input type="text" placeholder="YYYY" required class="dob"></input>
                </div>
                <div class="input_box">
                    <h4>Gender</h4>
                    <input type="radio" name="gender" class="radio" id="b1" checked></input>
                    <label for="b1">Male</label>
                    <input type="radio" name="gender" class="radio" id="b2"></input>
                    <label for="b2">Female</label>
                </div>
            </div>


            <div class="input_group">
                <div class="input_box">
                    <h4>Payment Details</h4>
                    <input type="radio" name="pay" class="radio" id="bc1" checked></input>
                    <label for="bc1"><span>
                            <i class="fa fa-cc-visa"></i>Credit Card</span></label>
                    <input type="radio" name="pay" class="radio" id="bc2"></input>
                    <label for="bc2"><span>
                            <i class="fa fa-cc-paypal"></i>EasyPaisa/jazzcash</span></label>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" name="" 
                    class="name" 
                    placeholder="Card Number 1111-2222-3333-4444" 
                    required
                    id='cardNumber'
					value={cardNumber}
					onChange={(e) => setcardNumber(e.target.value)}
                    ></input>
                    <i class="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="tel" name="" 
                    class="name" 
                    placeholder="Card CVC 632" required
                    id='cvv'
					value={cvv}
					onChange={(e) => setCVV(e.target.value)}
                    ></input>
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <div class="input_box">
                        <input type="number" 
                        placeholder="Exp Month" 
                        required 
                        class="name"
                        id='exp_month'
                        value={exp_month}
                        onChange={(e) => setExpMonth(e.target.value)}
                        ></input>
                        <i class="fa fa-calendar icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="input_box">
                    <input type="number" 
                    placeholder="Exp Year" 
                    required
                    class="name"
                    id='exp_year'
					value={exp_year}
					onChange={(e) => setExpYear(e.target.value)}
                    >
                    
                    </input>
                    <i class="fa fa-calendar-o icon" aria-hidden="true"></i>
                </div>
            </div>
            <div class="input_box">
                <input type="number" placeholder="Enter Amount" required class="name"></input>
                <i class="fa fa-money icon" aria-hidden="true"></i>
            </div>

            <div class="input_group">
                <div class="input_box">
                    <button type="submit">PAY NOW</button>
                </div>
            </div>

        </form>
    </div>
        </>
    )
    


}

export default Payment;