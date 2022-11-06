const path = require('path'); // Node js core module allows us to work with file paths

const express = require('express');

const rootDir = require('../util/path'); // Local Import for root directory where app.js is

const router = express.Router(); // Used for rerouting url routes

router.get('/', (request, response, next) => {

    // SendFile is for sending our Html file
    // path.join is used for joining all the mentioned paths
    // __dirname gives the name of the global directory which for this file is routes folder
    // ../ is used to go back one level
    // then we go into views and select the Shop.html file
    // rootDir points to file location of app.js = B:\Baskdevil\Sharpener Codes\Backend Development\App Project

    response.sendFile(path.join(rootDir, 'views', 'Shop.html'));
});

router.post('/', (request, response, next) => {
    console.log(request.body)
    response.redirect('/shop');
})

module.exports = router;