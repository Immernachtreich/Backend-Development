// Node js core modules Imports
const path = require('path');

// Dependencies Imports
const express = require('express'); // Express Imports
const bodyParser = require('body-parser'); // Body Parser Imports

// Local Imports
const adminRoutes = require('./routes/Admin.js'); // Admin Routes Imports
const shopRoutes = require('./routes/Shop.js'); // Shop Routes Imports
const contactUsRoutes = require('./routes/Contact-Us.js'); // Contact-Us Routes Imports
const successRoutes = require('./routes/Success.js') // Success Routes Imports

const app = express(); // express() is a function and calling it returns request handler

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))) // Express.static is used to access static files from the system

// For Admin Pages
app.use('/admin', adminRoutes);

// For Home Page
app.use('/shop', shopRoutes);

// For Contact-Us Page
app.use('/contactus', contactUsRoutes);

// For Success Page
app.use('/success', successRoutes);

// For catching errors
app.use((request, response, next) => {
    response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
app.listen(4000);