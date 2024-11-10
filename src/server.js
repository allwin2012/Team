// const express = require('express');
// const router = express.Router();
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log('Server Running'));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     },
// });

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Ready to Send');
//     }
// });

// router.post('/contact', (req, res) => {
//     const name = req.body.firstName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone;
//     const mail = {
//         from: name,
//         to: "james.plamondon74@gmail.com",
//         subject: "Contact Form Submission - Portfolio",
//         html: `<p>Name: ${name}</p>
//                <p>Email: ${email}</p>
//                <p>Phone: ${phone}</p>
//                <p>Message: ${message}</p>`
//     };
//     contactEmail.sendMail(mail, (error) => {
//         if (error) {
//             res.json(error);
//         } else {
//             res.json({ code: 200, status: 'Message Sent' });
//         }
//     });
// });

import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const templateParams = {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
    };

    emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_USER_ID'
    )
    .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setButtonText('Send');
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails(formInitialDetails);
    })
    .catch((error) => {
        console.error('Error sending email:', error);
        setButtonText('Send');
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    });
};
