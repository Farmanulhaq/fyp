import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../OTP/OTP.css'

const authscreen = () =>{

    const resend = async() =>{
        document.getElementById('resend').innerHTML = ""
    }

    const submit = async() => {
        let otp = "";
        let input1 = document.getElementById("txt1").value
        let input2 = document.getElementById("txt2").value
        let input3 = document.getElementById("txt3").value
        let input4 = document.getElementById("txt4").value
        let input5 = document.getElementById("txt5").value
        let input6 = document.getElementById("txt6").value

        otp = input1 + input2 + input3 + input4 + input5 + input6 
        console.log(otp)
    }


    return(
        

        <>
        <center><h1>VERIFICATION</h1></center>
          <div class="form1">
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
            <center><button type='submit' class='otpVerify' onClick={submit}><span class="button__text">Verify</span></button></center>
            <center><p className='resend' id='resend' onClick={resend}>Resend OTP only once</p></center>
        </div>
        </>
        
    )

}

export default authscreen