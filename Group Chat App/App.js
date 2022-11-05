// Dependencies Imports
const express = require('express'); // Express Imports
const bodyParser = require('body-parser'); // Body Parser Imports
const fs = require('fs');

const app = express(); // express() is a function and calling it returns request handler

app.use(bodyParser.urlencoded({extended: true}));

app.get('/login', (request, response, next) => {
    
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
})

app.get('/', (request, response, next) => {

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
})

app.post('/', (request, response, next) => {

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
})

app.post('/message', (request, response, next) => {

    let message = `${request.body.username} : ${request.body.message}
`
    fs.appendFile('message.txt', message,(err) => {
        response.redirect('/');
    })
    
});

//For catching errors
app.use((request, response, next) => {
    response.status(404).send(`<h1> 404 Page Not Found </h1>`)
})

app.listen(5000);