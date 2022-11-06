const path = require('path'); // Node js core module allows us to work with file paths

const express = require('express');

const rootDir = require('../util/path'); // Local Import for root directory where app.js is

const router = express.Router(); // Used for rerouting url routes

router.get('/', (request, response, next) => {

    response.sendFile(path.join(rootDir, 'views', 'Contact-Us.html'));
});

module.exports = router;