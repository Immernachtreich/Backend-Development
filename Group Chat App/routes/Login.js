const express = require('express');
const fs = require('fs');

const router = express.Router();


router.get('/', (request, response, next) => {
    
    response.send(
        `<html>
        <head>
            <title> Login Page </title>
        </head>
        <body>
            <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">

                <label> Username </label>
                <input id="username" type="text" name="username">

                <button type="submit"> Login </button>

            </form>
        </body>
        </html>`
    )
});

module.exports = router;