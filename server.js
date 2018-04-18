// server.js
'use strict'

// Dependencies
var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var Comment     = require('./models/comment');
var Product     = require('./models/product');
var Survey      = require('./models/Survey');
var User        = require('./mdoels/User')

// Setting up instances and port 
var app         = express();
var port        = process.env.PORT || 3001;



// Connecting to our database
mongoose.connect('mongodb://admin:password@ds014388.mlab.com:14388/discovered_capstone');

// Requiring use of bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Preventing Issues with CORS 
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.get('/', function (req, res) {
    res.json({ message: 'API Initialized' });
});


app.get('/comments', function (req, res) {
    Comment.find(function (err, comments) {
        if (err) {
            console.log("Error ", err);
            res.send(err);
        }
        res.send(comments);
    });
});

app.post("/comments/:author/:text/:date", function (req, res) {
    var comment    = new Comment();
    comment.author = req.params.author;
    comment.text   = req.params.text;
    comment.date   = req.params.date;
    comment.save(function (err) {
        if (err) {
            res.send(err);
        }
    });
});

app.get("/search/:category/:age/:language", function (req, res) {
    var category = req.body.category;
    var langauge = req.body.language;
    var age      = req.body.age;
    Product.find({ category: category }, { language: language }, { age: age }, function (err, products) {
        if(err) {
            console.log("Error ", err);
            res.send(err);
        }
        res.send(products);

    });
});

app.post("/survey", function(req, res) {
    var survey = new Survey();
    survey.responses = req.body.responses;
    survey.user      = req.body.id;
    survey.save(function(err) {
        if(err) {
            res.send(err);
        }
        res.json({message: "Survey Results Successfully Logged"});
    });
})

app.post("/User", function(req, res) {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.display_name = req.body.display_name;
    user.name_first = req.body.name_first;
    user.name_last = req.body.name_last;
    user.grade_level = req.body.grade_level;
});

app.listen(port, function () {
    console.log(`Server Started Successfully on ${port}`);
});