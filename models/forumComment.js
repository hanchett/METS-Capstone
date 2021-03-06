var mongoose = require("mongoose");

var forumCommentSchema = mongoose.Schema({
    author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        display_name: String
    }, 
    summary: String,
    date: Date,
    likes: {type: Number, default: 0}, 
    replies: []
});


module.exports = mongoose.model("ForumComment", forumCommentSchema);