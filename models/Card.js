import mongoose from 'mongoose'
import User from '../models/User.js'
// import User from 'User'

// const mongoose = require("mongoose");
// const User = import("./User");

const cardSchema = new mongoose.Schema(
  {
    cardHolderName: {
      type: String,
    },
    cardNumber: {
      type: Number,
    },
    expDate: {
      type: String,
    },
    // ExpMonth: {
    //     type: String
    // },
    // ExpYear: {
    //     type: String
    // },
    cvv: {
      type: String,
    },
    default: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String
    },
    customerId:{
      type: String,
    },
    transaction:{
        tokenId:{type: String, default: null},
        amount:{type: Number, default:null}
    },
    chassis:{
      type : String
    }
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);
export default Card;
// module.exports = Card;
