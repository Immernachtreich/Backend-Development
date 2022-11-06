const express = require('express');

const router = express.Router(); // Used for rerouting url routes

router.get('/', (request, response, next) => {
    response.send(`<h1> Hello from Express </h1>`);
});

module.exports = router;