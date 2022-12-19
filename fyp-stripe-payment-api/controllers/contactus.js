import  User  from '../models/User.js'
import {sendEmail} from '../config/mailer.js'

export const ContactUs = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send({
        status: 0,
        message: "Field Required",
      });
    } else if (!req.body.message) {
      return res.status(400).send({
        status: 0,
        message: "Field Required",
      });
    } else {
      const send = new User({
        email: req.body.email,
        name: req.body.name,
        subject: req.body.subject,
        message: req.body.message,
      });

      sendEmail(send.email, send.name, send.message, "Email message");

      if (!send) {
        return res.status(400).send({
          status: 0,
          message: "invalid",
        });
      } else {
        return res.status(200).send({
          status: 1,
          message: "Send",
          send,
        });
      }
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

// module.exports = {
//   ContactUs
// };
