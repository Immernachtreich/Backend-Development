const express = require('express'); // Express Import
const bodyParser= require('body-parser'); // Body-Parser Import
const cors = require('cors'); // Cors Import

const sequelize = require('./util/database.js'); // MySQL Database import (Local Import)

// Route Imports
const productRoutes = require('./routes/product.js'); // Product Routes Imports
const cartRoutes = require('./routes/cart.js') // Cart Routes Imports

const app = express(); // Initializing the backend

app.use(cors()); // Initializing Cors
app.use(bodyParser.json({ extended: false })); // Initializing Body Parser

// Product Routes
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Error Routes
app.use((req, res) => {
    res.status(404).send(`<h1> Page Not Found </h1>`);
})

// Initializing database and listening to port
sequelize.sync()
    .then((result) => {
        app.listen(5010);
    })
    .catch(err => {
        console.log(err);
    })