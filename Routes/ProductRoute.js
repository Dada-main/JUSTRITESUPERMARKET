const express = require('express');
const router = express.Router();

//import the product controller
const productController = require('../controllers/ProductController');


//define the routes
router.post('/createproduct', productController.createProduct);

router.put('/updateproduct/:id', productController.updateProduct);

//export the router
module.exports = router;