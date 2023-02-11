import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../ResetPassword/Rpass.css"

const Rpass = () =>{
    return(
        <>
            <center><h2>Reset Password</h2></center>
            <div className="form2">
                <form>
                    <div className="input-container2">
                        <label>Enter New Password </label>
                        <input  required type="password" name="uname" />
                        <label>Confirm Password </label>
                        <input  required type="Password" name="uname" />
                    </div>
                    <div className="button-container2">
                        <button type='submit'>
								<span class="button__text2">Reset Password</span>
						</button>
                    </div>
                </form>
            </div>

        </>
    )

}

export default Rpass