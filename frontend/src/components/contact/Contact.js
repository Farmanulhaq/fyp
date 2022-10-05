import React from 'react';
import img from '../../assets/contact.gif'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const ContactForm = () => {

    let nav = useNavigate()


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const contactHandler = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json",
            }
        }
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/contact", { email, name, subject, message },
                config)

            if (data.success === false) {
                setError(data.error);
                window.alert("Something went wrong")
            }
            else{

                
                window.alert("message send succesfully")
                setEmail("")
                setName("")
                setSubject("")
                setMessage("")
                setError("")
                console.log(email)
                // localStorage.setItem("authToken", data.token);
                // history.push("/login")
            }



        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    return (
        <>
            <div className="" id='contact'>
                <div className="container-contact1">
                    <div className="contact1-pic js-tilt" data-tilt="">
                        <img src={img} alt="IMG" />
                    </div>
                    <form className="contact1-form validate-form" onSubmit={contactHandler} >
                        <span className="contact1-form-title">Get in touch</span>
                        <div
                            className="wrap-input1 validate-input"
                            data-validate="Name is required"
                        >
                            <input className="input1" type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <span className="shadow-input1" />
                        </div>
                        <div
                            className="wrap-input1 validate-input"
                            data-validate="Valid email is required: ex@abc.xyz"
                        >
                            <input
                                className="input1"
                                type="email"
                                value={email}
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="shadow-input1" />
                        </div>
                        <div
                            className="wrap-input1 validate-input"
                            data-validate="Subject is required"
                        >
                            <input
                                className="input1"
                                type="text"
                                name="subject"
                                value={subject}
                                placeholder="Subject"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <span className="shadow-input1" />
                        </div>
                        <div
                            className="wrap-input1 validate-input"
                            data-validate="Message is required"
                        >
                            <textarea
                                className="input1"
                                name="message"
                                placeholder="Message"
                                value={message}
                                defaultValue={""}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <span className="shadow-input1" />
                        </div>
                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn" >
                                <span>
                                    Send Email
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default ContactForm;