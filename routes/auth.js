import express from 'express';

import { forgotPassword, login, register, resetPassword } from '../controllers/auth.js';

const _router = express.Router();


_router.route('/register').post(register);
_router.route('/login').post(login);
_router.route('/forgotpassword').post(forgotPassword);
_router.route('/resetpassword/:resetToken').put(resetPassword);

export default _router;