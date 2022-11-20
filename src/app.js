require('dotenv').config()
const express = require('express');
const app = express();

const index = require('./routes/index');
const userRoute = require('./routes/userRoute');
app.use('/', index);
app.use('/api', userRoute);

module.exports = app;