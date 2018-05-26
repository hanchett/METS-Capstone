var mongoose = require("mongoose");

var forumCommentSchema = mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }, 
    content: String,
    date: Date,
    likes: {type: number, default: 0}, 
    replies: []
});


module.exports = mongoose.model("ForumComment", forumCommentSchema);