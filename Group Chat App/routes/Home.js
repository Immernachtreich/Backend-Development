const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (request, response, next) => {

    fs.readFile('message.txt', 'utf8',(err, data)=> {

        response.send(
            `<html>
            <head>
                <title> Group Chat </title>
            </head>
            <body>
                <pre>${data}</pre>
                <form 
                action="/message" method="POST" 
                onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
    
                    <input type="text" name="message">
                    <input type="hidden" id="username" name="username"> </input>
    
                    <button type="submit"> Send </button>
    
                </form>
            </body>
            </html>`
        )
    })
});

router.post('/', (request, response, next) => {

    fs.readFile('message.txt', 'utf8',(err, data)=> {

        response.send(
            `<html>
            <head>
                <title> Group Chat </title>
            </head>
            <body>
                <pre>${data}</pre>
                <form 
                action="/message" method="POST" 
                onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
    
                    <input type="text" name="message">
                    <input type="hidden" id="username" name="username"> </input>
    
                    <button type="submit"> Send </button>
    
                </form>
            </body>
            </html>`
        )
    })
});

module.exports = router;