const nodemailer = require("nodemailer");
require('dotenv').config();
const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_ROCIO } = process.env;

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${EMAIL_USER}`,
      pass: `${EMAIL_PASSWORD}`
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


const sendEmail= async(req, res)=> {
  
    const name = req.body.firstname + req.body.lastname;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: `${EMAIL_ROCIO}`,
      subject: "Contact Form - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message Sent" });
      }
    });
  };

  module.exports= {
    sendEmail
}