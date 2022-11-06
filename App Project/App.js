// Dependencies Imports
const express = require('express'); // Express Imports
const bodyParser = require('body-parser'); // Body Parser Imports

// Local Imports
const adminRoutes = require('./routes/Admin.js'); // Admin Routes Imports
const shopRoutes = require('./routes/Shop.js'); // Shop Routes Imports


const app = express(); // express() is a function and calling it returns request handler

app.use(bodyParser.urlencoded({extended: true}))

// For Admin Pages
app.use('/admin', adminRoutes);

// For Home Page
app.use('/shop', shopRoutes);

// For catching errors
app.use((request, response, next) => {
    response.status(404).send(`<h1> Page Not Found </h1>`)
})
app.listen(4000);