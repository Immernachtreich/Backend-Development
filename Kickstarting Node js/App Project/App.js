const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url, request.method, request.headers);
    //process.exit();

    response.setHeader('Content-Type', 'text/html');

    if(request.url == '/home') {

        response.write(
            `<html>
            <head>
                <title> Home </title>
            </head>
            <body>
                <h1> Welcome home </h1>
            </body>
            </html>`);

    } else if(request.url == '/about') {

        response.write(
            `<html>
            <head>
                <title> About </title>
            </head>
            <body>
                <h1> Welcome to About Us page </h1>
            </body>
            </html>`);

    } else if(request.url == '/node') {

        response.write(
            `<html>
            <head>
                <title> Node </title>
            </head>
            <body>
                <h1> Welcome to my Node Js project </h1>
            </body>
            </html>`);
    }
})

server.listen(4000);