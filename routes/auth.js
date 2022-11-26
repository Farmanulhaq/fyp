import express from 'express';

import { forgotPassword, login, register, resetPassword } from '../controllers/auth.js';
import { ContactUs } from '../controllers/contactus.js';


const _router = express.Router();


_router.route('/register').post(register);
_router.route('/login').post(login);
_router.route('/forgotpassword').post(forgotPassword);
_router.route('/resetpassword/:resetToken').put(resetPassword);
_router.route('/contact').post(ContactUs)
       

export default _router;