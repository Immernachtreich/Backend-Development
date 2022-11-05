const express = require('express');

const router = express.Router(); // Used for rerouting url routes

router.get('/add-product', (request, response, next) => {
    response.send(
        `<html>
        <head>
            <title> Enter Message </title>
        </head>
        <body>
            <form action="/admin/add-product" method="POST">
                <label> Product </label>
                <input type="text" name="product">
                <label> Size </label>
                <input type="number" name="size">
                <button type="submit"> Add Product </button>
            </form>
        </body>
        </html>`);
}); 

router.post('/add-product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/admin/add-product');
})

module.exports = router;