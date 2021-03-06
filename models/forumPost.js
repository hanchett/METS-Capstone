var mongoose = require("mongoose");

var forumSchema = mongoose.Schema({
    title: String,
    author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        display_name: String
    },  
    subject: String, 
    category: String, 
    summary: String,
    views: {type: Number, default: 0}, 
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    date: Date
});

module.exports = mongoose.model("ForumPost", forumSchema);