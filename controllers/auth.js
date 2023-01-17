import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import crypto from 'crypto'
import { sendEmailToUser } from '../utils/sendEmails.js';

export const register = async (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;

    try {

        if(password === confirmPassword){
            const user = await User.create({
                username,
                email,
                password,
                confirmPassword
            });
            user.save()
            // return console.log(req.body)
            sendTokenToUser(user, 201, res)

        }
       else {
        res.status(400).json({
            success: false,
            error: "password does not match"
        })
       }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}
export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(401).json({
            success: false,
            error: "Invalid username or password!"
        });
    }

    try {
        const user = await User.findOne({ email }).select("+password");
        console.log(user);

        if (!user) {
            res.status(404).json({
                success: false,
                error: "User not found!"
            });
        } else{
            const _isValid = await bcrypt.compare(req.body.password, user.password);
            sendTokenToUser(user, 200, res)
            // if (!_isValid) {
            //     res.status(404).json({
            //         success: false,
            //         error: "Invalid credentials"
            //     });
            // } else{
            //     sendTokenToUser(user, 200, res)
            // }
        }



    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}

export const forgotPassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email});

        if (!user) {
            return next(res.status(404).json({
                success: false,
                error: "Email could not be sent."
            }));
        }

        const _resetToken = await resetUserPasswordToken({email});
        console.log(_resetToken);
        // await user.save();


        const resetUrlLink = `https://localhost:3000/resetpassword/${_resetToken}`
        const restEmailMessage =
            `
        <h1> Your reset email link is:</h1>
        <p>Click on the link to reset your password</p>
        <a href=${resetUrlLink} clicktracking= off>${resetUrlLink}</a>
        `

        try {
            await sendEmailToUser({
                to: user.email,
                subject: "Rest Password Request",
                text: restEmailMessage,
            })

            res.status(200).json({
                success: true,
                data: "Email Sent"
            })
        } catch (error) {
            user.resetPasswordToke = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();
            return next(res.status(500).json({
                success: false,
                error: "Email could not be sent"
            }))
        }
    } catch (error) {
        next(error);
    }
}

export const resetPassword = async (req, res, next) => {
    const __resetToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try {
        const user = await User.findOne({
            resetPasswordToke : __resetToken,
            resetPasswordExpire : { $gt: Date.now()}
        });

        if(!user){
            return next(res.status(400).json({
                success :false,
                error : "Invalid reset token"
            }));
        }

        user.password = req.body.password;
        user.resetPasswordToke = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({
            success : true,
            _message : "Request Served"
        })
    } catch (error) {
        
    }


}


const sendTokenToUser = (user, statusCode, res) => {
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRETE, {
        expiresIn: process.env.JWT_EXPIRE,
    });
    res.status(statusCode).json({
        success: true,
        token,
        //  message: "Account Created Successfully!"
    })
}


const resetUserPasswordToken = async (email) => {
    const resetToken = crypto.randomBytes(20).toString("hex");

    await User.findOneAndUpdate(email, { resetPasswordToke : crypto.createHash("sha256").update(resetToken).digest("hex") });
    await User.findOneAndUpdate(email, { resetPasswordExpire: Date.now() + 10 * (60 * 1000) })
    return resetToken;
}