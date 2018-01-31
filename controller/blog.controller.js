var mongoose = require('mongoose'),
    BlogPost = mongoose.model('BlogPost');

exports.AddBlogPost = function(req, res) {
    if (!req.body.title) {
        res.status(400).send({ message: "Title cannot be Empty" });
    }
    else {
        var BlogPostData = new BlogPost({
            title: req.body.title,
            htmlString: req.body.htmlString,
            user:req.body._userId,
            createdDate: new Date().toDateString(),
            updatedDate: new Date().toDateString()
        });

        BlogPostData.save(function(err, data) {
            console.log(data);
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Some error occurred while creating the Blog Post." });
            }
            else {
                res.send(data);
            }
        });
    }
};



exports.UpdateBlogPost = function(req, res) {
    BlogPost.findById(req.body.id, (err, BlogPost) => {  
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            BlogPost.title = req.body.title || BlogPost.title;
            BlogPost.htmlString = req.body.htmlString || BlogPost.htmlString;
            BlogPost.updatedDate = new Date().toDateString();
    
            // Save the updated document back to the database
            BlogPost.save((err, BlogPost) => {
                if (err) {
                    res.status(500).send(err)
                }
                res.status(200).send(BlogPost);
            });
        }
    });
};




exports.GetAllBlogPost = function(req, res) {
    BlogPost.find({}, function(err, BlogPost) {
        if (err) {
            res.send(err);
        }

        else
            res.json(BlogPost);
    });

};
