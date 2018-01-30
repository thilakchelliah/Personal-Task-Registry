var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    BlogPost = mongoose.model('BlogPost');

exports.AddBlogPost = function(req, res) {
    if (!req.body.Title) {
        res.status(400).send({ message: "Title cannot be Empty" });
    }
    else {
        var BlogPostData = new BlogPost({
            title: req.body.email,
            htmlString: req.body.username,
            password: hashedPass,
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
};


//validators

exports.CheckIfUserNameExist = function(req, res) {
    User.find({ username: req.query.userName }, function(err, user) {
        if (err) {
            res.send(err);
        }
        else if (user.length != 0) {
            return res.send("Duplicate Username,Please choose another one!");
        }
        else
            return res.send("");
    });
};

exports.checkIfEmailExist = function(req, res) {
    User.find({ email: req.query.email }, function(err, email) {
        if (err) {
            res.send(err);
        }
        else if (email.length != 0) {
            return res.send("Email already used,Please choose another one!");
        }
        else
            return res.send("");
    });
};

exports.CheckSignUpCred = function(req, res) {

    User.find({ username: req.query.username }).lean().exec(function(err, user) {
        if (err) {
            res.send({ result: "Error", message: err });
        }
        else if (user.length != 0) {
            if (bcrypt.compareSync(req.query.password, user[0].password)) {
                console.log(user);
                var token = jwt.sign(user[0], global.config.jwt_secret, {
                    expiresIn: 1440 // expires in 1 hour
                });
                return res.send({ result: "success", message: "valid User", token: token });
            }
            else {

                return res.send({ result: "Error", message: "Wrong Password" });
            }
        }
        else
            return res.send({ result: "Error", message: "Invalid User" });
    });
};


exports.GetUserData = function(req, res) {
    User.find({}, function(err, userData) {
        if (err) {
            res.send(err);
        }

        else
            res.json(userData);
    });

};
