var mongoose = require("mongoose");

var forumSchema = mongoose.Schema({
    title: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }, 
    subject: String, 
    category: String, 
    views: {type: Number, default: 0}, 
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]


});

module.exports = mongoose.model("Forum", forumSchema);