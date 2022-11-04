const fs = require('fs');

const requestHandler = (request, response) => {

    const url = request.url;

    if(url === '/') {

        fs.readFile('message.txt', 'utf-8',(err, data) => {
            
            response.write(
                `<html>
                <head>
                    <title> Enter Message </title>
                </head>
                <body>
                    <p> ${data} <p>
                    <form action="/message" method="POST">
                        <input type="text" name="message">
                        <button type="submit"> Send </button>
                    </form>
                </body>
                </html>`);
    
            return response.end();
        })
    } 
    
    if(url === '/message' && request.method === 'POST') {
    
        const body = [];
    
        // Oncoming data request
        request.on('data', (chunk) => {
            body.push(chunk);
        })
    
        // On end of data stream
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
    
            fs.writeFile('message.txt', message, () => {
    
                // Setting status code and location back to '/'
                response.statusCode = 302;
                response.setHeader('Location', '/');
                
                return response.end();
            });
        })
    }
    
    if(url === '/home') {
    
        response.write(
            `<html>
            <head>
                <title> Home </title>
            </head>
            <body>
                <h1> Welcome home </h1>
            </body>
            </html>`);
    
        return response.end();
    
    }
    
    if(url === '/about') {
    
        response.write(
            `<html>
            <head>
                <title> About </title>
            </head>
            <body>
                <h1> Welcome to About Us page </h1>
            </body>
            </html>`);
    
        return response.end();
    
    }
    
    if(url === '/node') {
    
        response.write(
            `<html>
            <head>
                <title> Node </title>
            </head>
            <body>
                <h1> Welcome to my Node Js project </h1>
            </body>
            </html>`);
    
        return response.end();
    }
}

// module.exports = requestHandler;

module.exports = {
    handler : requestHandler,
    someText : 'Some Text'
}

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Text';

// exports.handler = requestHandler;
// exports.someText = 'Some Text';
