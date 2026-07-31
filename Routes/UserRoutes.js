const express = require('express');
const router = express.Router();

//import the user controller
const userController = require('../controllers/UserController');

//define the routes
router.post('/createuser', userController.createUser);

router.post('/loginuser', userController.loginUser);

//export the router
module.exports = router;