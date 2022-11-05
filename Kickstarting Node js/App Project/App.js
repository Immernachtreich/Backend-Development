const express = require('express'); // Express Imports
const bodyParser = require('body-parser') // Body Parser Imports

const app = express(); // express() is a function and calling it returns request handler


// use() allows us to use middleware

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product', (request, response, next) => {
    response.send(
        `<html>
        <head>
            <title> Enter Message </title>
        </head>
        <body>
            <form action="/product" method="POST">
                <label> Product </label>
                <input type="text" name="product">
                <label> Size </label>
                <input type="number" name="size">
                <button type="submit"> Add Product </button>
            </form>
        </body>
        </html>`);
}); 

app.post('/product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/add-product');
});

app.use('/', (request, response, next) => {
    response.send(`<h1> Hello from Express </h1>`);
});

app.listen(3000);