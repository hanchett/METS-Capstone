// server.js
'use strict'

// Dependencies
var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var Comment    = require('./models/comment');

// Setting up instances and port 
var app        = express();
var port       = process.env.PORT || 3001;
mongoose.connect('mongodb://admin:password@ds014388.mlab.com:14388/discovered_capstone');

// Requiring use of bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Preventing Issues with CORS 
// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     res.setHeader("Cache-Control", "no-cache");
//     next();
// });


app.get('/', function(req, res) {
    res.json({message: 'API Initialized'});
});


app.get('/comments', function(req, res) {
    Comment.find(function(err, comments) {
        if(err) {
            console.log("Error ", err);
            res.send(err);
        }
        res.send(comments);
    });
});

app.post("/comments", function(req, res){
    var comment = new Comment();
    comment.author = req.body.author;
    comment.text   = req.body.text;
    comment.date   = req.body.date;
    comment.save(function(err) {
        if(err) {
            res.send(err);
        }
        res.json({message: "Comment Successfully Added"});
    });
});


app.listen(port, function() {
    console.log(`Server Started Successfully on ${port}`);
});