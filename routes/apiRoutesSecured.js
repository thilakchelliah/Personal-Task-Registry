var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller.js');

router.get('/test', function(req, res){
    res.send('hello world');
});
router.get('/User/FetchAll',userController.GetUserData);



module.exports = router;
