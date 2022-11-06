const express = require('express');

const router = express.Router(); // Used for rerouting url routes

const contactUsController = require('../controllers/Contact-UsControllers.js') // Controller Import

router.get('/', contactUsController.getContactUsPage);

module.exports = router;