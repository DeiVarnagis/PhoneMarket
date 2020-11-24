require('dotenv').config();
const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/user');
const express = require('express');
const jwt = require('jsonwebtoken');
// const config = require('config');
const router = express.Router();
const nodemailer = require('nodemailer');

var smtpCconfig = {
    host: 'smtp.gmail.com',
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    requireTLS: true,
    secureConnection: false,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
};
const transporter = nodemailer.createTransport(smtpCconfig);
const EMAIL_SECRET = process.env.EMAIL_SECRET;

router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});

router.get('/', async (req, res) => {
    const users = await User.find().select('-').sort('name');
    res.send(users);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        // var emailAddress = req.body.email;
        // var userName = req.body.name;
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered.');
        user = new User(_.pick(req.body, ['name', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        // console.log('my secret - ', EMAIL_SECRET);
        const token = jwt.sign(
            { user: _.pick(user, '_id') },
            'Deivida5_5ecret',
            {
                expiresIn: 60 * 24
            }
        );
        res.send(token);
        // const url = `http://localhost:3700/confirmation/${token}`;
        // var mailOptions = {
        //     from: 'Mykolas Rene',
        //     to: emailAddress,
        //     subject: 'Validate your email',
        //     text: 'Validate your email',
        //     html: `<tr>
        //     <td align="left" style="padding:0px 40px 40px 40px"><p
        //                 style="color:#262626; font-size:32px; text-align:left; font-family: Verdana, Geneva, sans-serif">
        //             Hello Dear ${userName}</p>
        //         <br style="color:#000000; font-size:16px; text-align:left; font-family: Verdana, Geneva, sans-serif; line-height:22px ">
        //         Please validate your email! You can do it by clicking on the button below 👇</br>
        //         </br>
        //         <hr style="border-top: dotted 1px;" />
        //         <a href=${url} type="button" style={color: green}>
        //             Validate email address
        //         </a> <br/>
        //         <br/>
        //         </p></td>

        // </tr>`
        // };
        // if (token) {
        //     transporter.sendMail(mailOptions, (err, res) => {
        //         if (err) {
        //             console.log('error while sending validation link - ', err);
        //         } else {
        //             console.log('Message sent: ', res.message);
        //         }
        //     });
        // } else {
        //     console.log('Something is wrong');
        // }
        // return user;
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
// `Please click this Link to confirm your email: <a href="${url}">${url}</a>`
