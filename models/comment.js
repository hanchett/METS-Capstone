'use strict';
var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        display_name: String
    }, 
    date: Date
});
    
    
module.exports = mongoose.model("Comment", commentSchema);