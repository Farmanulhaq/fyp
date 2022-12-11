import express from 'express';
// import { verifyToken } from '../middleware/authentication.js'


import { forgotPassword, login, register, resetPassword } from '../controllers/auth.js';
import { ContactUs } from '../controllers/contactus.js';
import {authProtect} from '../middleware/authMiddleware.js'
import { addCard, getCard, payment  } from '../Controllers/cardController.js';
// const { addCard, getCard, payment } = import('../Controllers/cardController')

const _router = express.Router();


_router.route('/register').post(register);
_router.route('/login').post(login);
_router.route('/forgotpassword').post(forgotPassword);
_router.route('/resetpassword/:resetToken').put(resetPassword);
_router.route('/contact').post(ContactUs)
       



//Card
// _router.route('/addcard').post(addCard, verifyToken);
// _router.route('/getcard').get(getCard, verifyToken);
// _router.route('/payment').post(payment, verifyToken);

_router.route('/addcard').post(addCard, authProtect);
_router.route('/getcard').get(getCard, authProtect);
_router.route('/payment').post(payment, authProtect);

// _router.post('/addcard', authProtect, addCard)
// _router.get('/getcard', authProtect, getCard)
// _router.post('/payment', authProtect, payment)




export default _router; 