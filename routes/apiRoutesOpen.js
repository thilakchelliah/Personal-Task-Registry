var express = require('express');
var router = express.Router();
require("../models/user");
var userController = require('../controller/user.controller.js');


router.post('/User/Create', userController.CreateUser);
router.get('/User/checkUser', userController.CheckIfUserNameExist);
router.get('/User/checkEmail', userController.checkIfEmailExist);
router.get('/User/CheckSignUpCred',userController.CheckSignUpCred);

module.exports = router;
