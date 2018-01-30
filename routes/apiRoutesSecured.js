var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller.js');
var blogController = require('../controller/blog.controller.js');

router.get('/test', function(req, res){
    res.send('hello world');
});
router.get('/User/FetchAll',userController.GetUserData);

//Blog manager

router.get('/Blog/Add',blogController.AddBlogPost);
router.get('/Blog/Update',blogController.UpdateBlogPost);
router.get('/Blog/FetchAll',blogController.GetAllBlogPost);



module.exports = router;
