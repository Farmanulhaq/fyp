import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../ResetPassword/Rpass.css"

const Rpass = () => {
    let nav = useNavigate();

    const [new_password, setNew_password] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const [user_id, setUser_id] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const user_id = localStorage.getItem('_id')
        if (user_id) {
            setUser_id(user_id)
        }
    })

    const resetPassword = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }


        try {

            const { data } = await axios.post("http://localhost:5000/api/auth/update-password", { user_id, new_password, confirm_password },
                config)



            // console.log(data.data.user_id)
            // localStorage.setItem("_id" , data.data.user_id)
            // localStorage.setItem("email",email);
            // localStorage.removeItem("chasis");
            localStorage.setItem("authToken", data.token);
            setMessage("Password Updated Successfully");
            setTimeout(() => {
                setMessage("");
                nav('/welcome')
            }, 3000)



        } catch (error) {

            setError(error.response.data.message);

            setTimeout(() => {
                setError("");
            }, 5000);

        }
    }



    return (
        <>
            <center><h2>Reset Password</h2></center>
            <div className="form2">
                <form onSubmit={resetPassword}>
                    {error && <span className='dangerText error-message'>{error}</span>}
                    {message && <span className='dangerText error-message'>{message}</span>}
                    <div className="input-container2">
                        <label>Enter New Password </label>
                        <input required type="password" name="uname" value={new_password}
                            onChange={(e) => setNew_password(e.target.value)} />
                        <label>Confirm Password </label>
                        <input required type="Password" name="uname" value={confirm_password}
                            onChange={(e) => setConfirm_password(e.target.value)} />
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