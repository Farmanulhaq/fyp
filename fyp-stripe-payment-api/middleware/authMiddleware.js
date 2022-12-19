import jwt from 'jsonwebtoken';
import User from '../models/User.js'

export const authProtect = async (req, res, next) => {
    let _token;

    if(req.headers.authorization && req.headers.authorization.startsWith("blockchainProj"))
    {
        _token = req.headers.authorization.split(" ")[1];
    }

    if(!_token) {
        return next(res.status(401).json({seccess:false, error: "Not an authorized person to access this route"}));
    }

    try {
        const decode = jwt.verify(_token, process.env.JWT_SECRETE);
        const user = await User.findById(decode.user_id);

        if(!user){
            return next(res.status(404),json({success:false, error: "No user found!"}))
        }

        req.user = user;
        next();
    } catch (error) {
        return next(res.status(401).json({success:false, error: "You are not authorized to access this route"}));
    }
}