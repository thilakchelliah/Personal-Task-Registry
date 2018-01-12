var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.CreateUser = function(req, res) {
    if (!req.body.username) {
        res.status(400).send({ message: "Username cannot be empty" });
    }
    else if (CheckIfUserExist(req.body.username)) {
        debugger;
    }
    else {
        var userCurrent = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            createdDate: new Date().toDateString(),
            updatedDate: new Date().toDateString()
        });

        userCurrent.save(function(err, data) {
            console.log(data);
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Some error occurred while creating the Note." });
            }
            else {
                res.send(data);
            }
        });
    }
}

var CheckIfUserExist = function(username) {
    User.find({ username: username }, function(err, user) {
        if (err)
            console.log('error occured in the database');
        return user;
    });
}
