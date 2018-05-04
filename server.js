// server.js
'use strict'

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Review = require('./models/review');
var Product = require('./models/product');
var Survey = require('./models/Survey');
var User = require('./models/user')

// Setting up instances and port 
var app = express();
var port = process.env.PORT || 3001;



// Connecting to our database
mongoose.connect('mongodb://admin:password@ds014388.mlab.com:14388/discovered_capstone');

// Requiring use of bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Preventing Issues with CORS 
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.get('/', function (req, res) {
    res.json({ message: 'API Initialized' });
});


app.get('/review', function (req, res) {
    Review.find(function (err, reviews) {
        if (err) {
            console.log("Error ", err);
            res.send(err);
        }
        res.send(reviews);
    });
});

app.post("/review/:author/:text/:date", function (req, res) {
    var review = new Review();
    review.author = req.params.author;
    review.text = req.params.text;
    review.date = req.params.date;
    review.save(function (err) {
        if (err) {
            res.send(err);
        }
    });
});

app.get("/search", function (req, res) {
    Product.find({}, function (err, products) {
        if (err) {
            console.log("Error ", err);
            res.send(err);
        }
        res.send(products);
    });
});

app.post("/survey", function (req, res) {
    var survey = new Survey();
    survey.responses = req.body.responses;
    survey.user = req.body.id;
    survey.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Survey Results Successfully Logged" });
    });

})


app.post("/account/signup/:email/:password/:display_name/:name_first/:name_last/:teaching_title", function(req, res) {
    var user = new User();
    user.email = req.params.email;
    user.password = req.params.password;
    user.display_name = req.params.display_name;
    user.name_first = req.params.name_first;
    user.name_last = req.params.name_last;
    user.teach_title = req.params.teaching_title;
    user.save(function(err) {
        if(err) {

            res.send(err);
        }
    });
});

app.get('/account/signin/:email/:password', (req, res) => {
    let currEmail = req.params.email;
    let currPassword = req.params.password;

    User.find({email : currEmail, password : currPassword}, function(err, users) {
        if(err) {
            console.log("Error ", err);
            res.send(err);
        }
        res.send(users);
        console.log(users);
    });
});

app.post("/product/new/:title/:url/:image/:developer/:language/:ageRange/:summary/:date", function (req, res) {
    var product = new Product();
    product.title = req.params.title;
    product.developer = req.params.developer;
    product.url = req.body.url;
    product.image = req.body.image;
    product.language = req.params.language;
    product.summary = req.params.summary
    product.ageRange = req.params.ageRange;
    product.date = req.params.date;
    product.save(function (err) {
        if (err) {
            res.send(err);
        }
    })
});

app.get("/review/:id", function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            console.log("Error ", err);
            res.send(err);
        }
        res.send(product);
    });
});

app.post("/review/:id/:headline/:review/:rating/:user", function (req, res) {
    var review = new Review();
    review.headline = req.params.headline;
    review.review = req.params.review;
    review.rating = req.params.rating;
    review.author = req.body.user;
    review.save(function (err) {
        if (err) {
            res.send(err);
        }
    })
});

app.delete("/product/delete/:id", function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        res.redirect("/search");

    });


});




app.listen(port, function () {
    console.log(`Server Started Successfully on ${port}`);
});


// router.delete("/:id", function(req, res) {
//     Campground.findByIdAndRemove(req.params.id, function(err) {
//         if(err) {
//             res.redirect("/campgrounds");
//         } else {
//             res.redirect("/campgrounds");
//         }
//     })


// });