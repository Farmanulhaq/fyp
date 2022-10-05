import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "This field can not be empty"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "This field can not be empty"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ]
    },
    name:{
        type : String,
        default : null
    },
    subject:{
        type : String
    },
    message:{
        type : String,
        required : true
    },

    password: {
        type: String,
        required: [true, "Please add password"],
        minlength: 6,
        select: false
    },
    resetPasswordToke: String,
    resetPasswordExpire: Date,

},
{ timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const _salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, _salt);
    next();
});

// userSchema.method.resetUserPasswordToken = async (email) => {
//     const resetToken = crypto.randomBytes(20).toString("hex");
//     const resetPasswordToke = () => {
//         crypto.createHash("sha256").update(resetToken).digest("hex");
//     }
//    await User.findOne({ email }).create({ resetPasswordToke: resetPasswordToke });
//    await User.findOne({ email }).create({ resetPasswordExpire: Date.now() + 10 * (60 * 1000) });
//     return resetToken;
// }

const User = mongoose.model('UserAuth', userSchema);
export default User;