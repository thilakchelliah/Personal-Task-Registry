var express = require('express');
var router = express.Router();
require("../models/user");
require("../models/BlogPost");
var userController = require('../controller/user.controller.js');
var blogController = require('../controller/blog.controller.js');


router.post('/User/Create', userController.CreateUser);
router.get('/User/checkUser', userController.CheckIfUserNameExist);
router.get('/User/checkEmail', userController.checkIfEmailExist);
router.get('/User/CheckSignUpCred',userController.CheckSignUpCred);

router.get('/Blog/FetchAll',blogController.GetAllBlogPost);
router.get('/Blog/FetchOne',blogController.GetOneBlogPost);


module.exports = router;
