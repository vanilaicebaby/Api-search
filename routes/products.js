const express = require('express');
const router = express.router();

const {
  getAllProduct,
  getAllProductStatic,
} = require('../controllers/products');

router.route('/').get(getAllProduct);

router.route('/static').get(getAllProductStatic);

module.exports = router;
