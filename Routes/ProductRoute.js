const express = require('express');

//import the authentication middleware
const { protect } = require('../middleware/auth');



const router = express.Router();


//import the product controller
const productController = require('../controllers/ProductController');


//define the routes
router.post('/createproduct', protect, productController.createProduct);
router.put('/updateproduct/:id', protect, productController.updateProduct);
router.get('/getproduct/:id', protect, productController.getProductById);
router.get('/getallproducts', protect, productController.getAllProducts);
router.delete('/deleteproduct/:id', protect, productController.deleteProduct);

//export the router
module.exports = router;