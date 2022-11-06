const express = require('express');

const successController = require('../controllers/SuccessController.js');

const router = express.Router(); // Used for rerouting url routes

router.post('/', successController.getSuccessPage);

module.exports = router;