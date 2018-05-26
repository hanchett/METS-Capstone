// server.js
"use strict";

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var passport = require('./middleware');
var bodyParser = require('body-parser');
var Review = require('./models/review');
var Product = require('./models/product');
var Survey = require('./models/Survey');
var User = require('./models/user');
var bcrypt = require('bcrypt');
var ForumPost = require('./models/forumPost');
var ForumComment = require('./models/forumComment');

// Setting up instances and port
var app = express();
var port = process.env.PORT || 3001;

// Connecting to our database
mongoose.connect(
  "mongodb://admin:password@ds014388.mlab.com:14388/discovered_capstone"
);

// Requiring use of bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Preventing Issues with CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", function (req, res) {
  res.json({
    message: "API Initialized"
  });
});

app.get("/review", function (req, res) {
  Review.find(function (err, reviews) {
    if (err) {
      console.log("Error ", err);
      res.send(err);
    }
    res.send(reviews);
  });
});

//Create new review
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

//Product Search
app.get("/search", function (req, res) {
  Product.find({}, function (err, products) {
    if (err) {
      console.log("Error ", err);
      res.send(err);
    }
    res.send(products);
  });
});

//Add new survey fillout
app.post("/survey", function (req, res) {
  var survey = new Survey();
  survey.responses = req.body.responses;
  survey.user = req.body.token;
  survey.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Survey Results Successfully Logged"
    });
  });
});

//Signup
app.post(
  "/account/signup/:email/:password/:display_name/:name_first/:name_last/:teaching_title",
  function (req, res) {
    var user = new User();

    user.email = req.params.email;
    user.password = req.params.password;
    user.display_name = req.params.display_name;
    user.name_first = req.params.name_first;
    user.name_last = req.params.name_last;
    user.teach_title = req.params.teaching_title;
    user.image = req.body.image;

    user.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        passport.authenticate('local');
        res.send(user);
        //res.redirect("/survey/" + res.data._id);
        //res.redirect("/Survey");
      }
    });

  });

//Passport configuration
app.use(require("express-session")({
  secret: "DiscoverEd",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());


//Login
app.get('/account/signin/:email/:password', (req, res) => {
  let currEmail = req.params.email;
  let currPassword = req.params.password;

  User.find({
    email: currEmail
  }, function (err, users) {
    if (err) {
      console.log("Error ", err);
      res.send(err);
    }

    if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }

    const user = users[0];
    console.log(currPassword);
    console.log(user);
    if (user.validPassword(currPassword)) {
      passport.authenticate('local');
      res.send(users);
      console.log(users);
    } else {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }
  });
});


app.post('/account/logout/', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({
      msg: 'logging out'
    });
  } else {
    res.send({
      msg: 'no user to log out'
    });
  }
});

//auth user on every page
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//Add new product
app.post(
  "/product/new/:title/:url/:image/:developer/:language/:ageRange/:summary/:date",
  function (req, res) {
    var product = new Product();
    product.title = req.params.title;
    product.developer = req.params.developer;
    product.url = req.body.url;
    product.image = req.body.image;
    product.language = req.params.language;
    product.summary = req.params.summary;
    product.ageRange = req.params.ageRange;
    product.date = req.params.date;
    product.save(function (err) {
      if (err) {
        res.send(err);
      }
    });
  }
);

//Get product info
app.get("/review/:id", function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) {
      console.log("Error ", err);
      res.send(err);
    }
    res.send(product);
  });
});

//ToDo: Add middleware check between the url & the function in this first line
app.post("/review/:id", function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) {
      console.log(err);
      res.redirect("/search");
    } else {
      var review = new Review();
      review.text = req.body.review;
      review.title = req.body.headline;
      review.review = req.body.review;
      review.rating = req.body.rating;
      review.age = req.body.age;
      review.disabilities = req.body.disabilities;
      review.platforms = req.body.platforms;
      var n = product.reviews.length;
      product.rating = ((product.rating * n) + review.rating) / (n + 1);

      User.findById(req.body.uid, function (err, user) {
        review.author = user;
        review.save();

        product.reviews.push(review);
        product.save();
        res.redirect("/review/" + req.params.id);
        res.end();
      });
    }
  });
});

app.get("/reviews/:id", function (req, res) {
  Review.findById(req.params.id, function (err, review) {
    if (err) {
      console.log("Error ", err);
      res.send(err);
    }
    res.send(review);
  });
});

app.delete("/product/delete/:id", function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    res.redirect("/search");
  });
});

// Makes a new forum post 
app.post("/forum/new/:id", function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      console.log(err);
      res.send(err);
    }

    var forumPost = new ForumPost();
    forumPost.title = req.body.title;
    forumPost.author = user;
    forumPost.subject = req.body.subject;
    forumPost.category = req.body.category;
    forumPost.summary = req.body.summary;
    forumPost.date = req.body.date;

    forumPost.save(function (err) {
      if (err) {
        res.send(err);
      }
    });


  });


});

// Adds a high level comment to a forum post 
app.post("/forum/:id", function (req, res) {
  Forum.findById(req.params.id, function (err, post) {
    if (err) {
      console.log(err);
      res.redirect("/forum");
    }
    var forumComment = new ForumComment();
    forumComment.author = req.body.author;
    forumComment.content = req.body.content;
    forumComment.date = req.body.date;
    post.comments.push(forumComment)
    post.save();
    res.redirect('/forum/' + req.param.id);
    res.end();
  });
});

// Adds a reply to a comment 
app.post("/forum/:id/:commentID", function (req, res) {
  ForumComment.findById(req.params.commentID, function (err, comment) {
    var commentReply = new ForumComment();
    commentReply.author = req.body.author;
    commentReply.content = req.body.content;
    commentReply.date = req.body.date;
    comment.replies.push(commentReply);
    comment.save();
    res.redirect('/forum/' + req.param.id);
    res.end();
  });
});




//Passport configuration
// app.use(require("express-session")({
//     secret: "METS ARMA",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// //Authenticate user on each page
// app.use(function(req, res, next) {
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
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