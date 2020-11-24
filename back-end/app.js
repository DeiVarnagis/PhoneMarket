require('dotenv').config();
const express = require('express');
const config = require('config');
const { User } = require('./models/user');
const jwt = require('jsonwebtoken');
const router = require('./routes/index');
const userRoute = require('./routes/users');
const phonesRoute = require('./routes/phones');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();

// const EMAIL_SECRET = process.env.EMAIL_SECRET;
// Routes
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use('/', router);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/phones', phonesRoute);

// app.get('/confirmation/:token', async (req, res) => {
//     console.log('In confirmation/:token ', req.params);
//     try {
//         const {
//             user: { _id }
//         } = jwt.verify(req.params.token, EMAIL_SECRET);
//         console.log('User id - ', _id);
//         await User.updateOne({ _id: _id }, { confirmed: true });
//     } catch (ex) {
//         console.log('error before redirrect');
//     }

//     return res.redirect('http://localhost:3000/login');
// });

const PORT = process.env.PORT || config.get('port');
// connect to db
const db = config.get('db');

// process.env.DB
mongoose.set('useCreateIndex', true);
mongoose.connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Successfully connected to database');
    }
);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
