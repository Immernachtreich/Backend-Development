// Dependencies Imports
const express = require('express'); // Express Imports
const bodyParser = require('body-parser'); // Body Parser Imports
const fs = require('fs');

// Route Imports
const loginRoutes = require('./routes/Login');
const messageRoutes = require('./routes/Message');
const homeRoutes = require('./routes/Home');

const app = express(); // express() is a function and calling it returns request handler

app.use(bodyParser.urlencoded({extended: true}));

app.use('/login', loginRoutes);
app.use('/', homeRoutes);
app.use('/message', messageRoutes);
//For catching errors
app.use((request, response, next) => {
    response.status(404).send(`<h1> 404 Page Not Found </h1>`)
})

app.listen(5000);