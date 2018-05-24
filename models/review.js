'use strict';
var mongoose = require("mongoose");

var reviewSchema = mongoose.Schema({
    title: String,
    text: String,
    author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        display_name: String
    }, 
    author: String, 
    date: Date, 
    surveyQ: [],
    rating: { type: Number, min: 0, max: 5, default: 3.5 } 
});
    
    
module.exports = mongoose.model("Review", reviewSchema);