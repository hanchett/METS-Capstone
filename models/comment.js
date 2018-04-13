'use strict';
var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: String
    // {
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User"
    //     },
    //     username: String
    // }
    , 
    date: Date
});
    
    
module.exports = mongoose.model("Comment", commentSchema);