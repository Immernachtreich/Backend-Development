const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/', (request, response, next) => {

    let message = `${request.body.username} : ${request.body.message}
`
    fs.appendFile('message.txt', message,(err) => {
        response.redirect('/');
    })
    
});

module.exports = router;