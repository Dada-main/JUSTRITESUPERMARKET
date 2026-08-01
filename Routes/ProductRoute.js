const express = require('express');
const router = express.Router();

//import the product controller
const productController = require('../controllers/ProductController');


//define the routes
router.post('/createproduct', productController.createProduct);
router.put('/updateproduct/:id', productController.updateProduct);
router.get('/getproduct/:id', productController.getProductById);
router.get('/getallproducts', productController.getAllProducts);
router.delete('/deleteproduct/:id', productController.deleteProduct);

//export the router
module.exports = router;