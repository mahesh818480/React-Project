
const express = require('express');
const cors = require('cors');
const app = express();
require("./DBconnection");
const {Form} = require('./models');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// var nodemailer = require('nodemailer');

// POST endpoint to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    const { fname, email, password, cnfPass } = req.body;
    // Define schema (add the Form model in your backend)
    const newForm = new Form({ fname, email, password, cnfPass });
    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
});

// Send to Mail Message

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'gmahesh8184@gmail.com', // replace with your email
//     pass: 'osox wtfl qyju vchm', // replace with your email password
//   }
// });

// var mailOptions = {
//   from: 'gmahesh8184@gmail.com',
//   to: 'adarshchoudary111@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});