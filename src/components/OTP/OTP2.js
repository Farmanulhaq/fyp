import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../OTP/OTP.css'

const OTP2 = () => {

    let nav = useNavigate()
    const [verification_code, setOtp] = useState("");
    const [user_id, setUser_id] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const user_id = localStorage.getItem('_id')
        if (user_id) {
            setUser_id(user_id)
        }
    })

    const resend = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        try{
            const { data } = await axios.post("http://localhost:5000/api/auth/resend-code", { user_id}, config)

            if(data){
                setMessage(data.message);
            setTimeout(() => {
                setMessage("");
                
            }, 3000)

            }
        }catch(error){
            setError("OTP didnot match");
            console.log(error);
            setTimeout(() => {
                setError("");
            }, 5000);

        }
    }

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        let verification_code = "";
        let input1 = document.getElementById("txt1").value
        let input2 = document.getElementById("txt2").value
        let input3 = document.getElementById("txt3").value
        let input4 = document.getElementById("txt4").value
        let input5 = document.getElementById("txt5").value
        let input6 = document.getElementById("txt6").value

        verification_code = input1 + input2 + input3 + input4 + input5 + input6


        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/verify-user", { user_id, verification_code },
                config)
            
            localStorage.setItem("authToken", data.data.user_authentication);
            console.log(data.data)
            if(data){
                setMessage(data.message);
            setTimeout(() => {
                setMessage("");
                nav('/Rpass')
            }, 3000)

            }

        } catch (error) {

            setError("OTP didnot match");
            console.log(error);
            setTimeout(() => {
                setError("");
            }, 5000);

        }

    }


    return (


        <>
            <center><h1>VERIFICATION</h1></center>
            <div class="form1">
                <form onSubmit={forgotPasswordHandler}>
                    {error && <span className='dangerText error-message'>{error}</span>}
                    {message && <span className='dangerText error-message'>{message}</span>}
                    <center><p>Enter OTP Sent to your given email for verification</p></center>
                    <p id="demo"></p>
                    <div className="OTP-bx">
                        <input type="text" id='txt1' maxlength="1" required></input>
                        <input type="text" id='txt2' maxlength="1" required></input>
                        <input type="text" id='txt3' maxlength="1" required class="space"></input>
                        <input type="text" id='txt4' maxlength="1" required></input>
                        <input type="text" id='txt5' maxlength="1" required></input>
                        <input type="text" id='txt6' maxlength="1" required></input>
                    </div>
                    <center><button type='submit' class='otpVerify'><span class="button__text">Verify</span></button></center>
                </form>
                <center><p className='resend' id='resend' onClick={resend}>Resend OTP only once</p></center>
            </div>
        </>

    )

}

export default OTP2