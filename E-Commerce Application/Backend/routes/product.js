const express = require('express');

const productController = require('../controllers/product.js');

const router = express.Router();

router.get('/get-musics', productController.getMusic);

router.get('/get-merches', productController.getMerch);

module.exports = router;