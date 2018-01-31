var express = require('express');
var router = express.Router();
require("../models/BlogPost");
var userController = require('../controller/user.controller.js');
var blogController = require('../controller/blog.controller.js');

router.get('/validateUser', function(req, res){
    res.send('hello world');
});
router.get('/User/FetchAll',userController.GetUserData);

//Blog manager

router.post('/Blog/Create',blogController.AddBlogPost);
router.post('/Blog/Update',blogController.UpdateBlogPost);
router.get('/Blog/FetchAll',blogController.GetAllBlogPost);



module.exports = router;
