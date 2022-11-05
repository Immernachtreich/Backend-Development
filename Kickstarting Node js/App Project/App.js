const http = require('http'); // Node Imports

const express = require('express'); // Express Imports

const app = express(); // express() is a function and calling it returns request handler

// use() allows us to use middleware
app.use( (request, response, next) => {

    console.log('In the middleware');
    next(); // next() allows the request to continue onto the next middleware in line
}) 

app.use( (request, response, next) => {
    console.log('In the second middleware');
    response.send(`<h1> Hello from Express </h1>`);
}) 

app.listen(3000);