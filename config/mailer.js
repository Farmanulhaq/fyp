import nodemailer from "nodemailer";

// Email function
// const transporter = nodemailer.createTransport({
//     service: "appsstaging",
//     host: "server.appsstaging.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "noreply@server.appsstaging.com",
//         pass: "Technado@12345",
//     },
// });

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7a9d9b2fac6992",
    pass: "231079c88a029e",
  },
});

export const sendEmail = (email, name, message, subject) => {
  const mailOptions = {
    from: email,
    to: "sherishaikh6@gmail.com",
    subject: subject,
    html: `<p>${name} wants to connect with you and send a message ${message}</p>`,
  };
  console.log(mailOptions)
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

 
