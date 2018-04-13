var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    title: String,
    developer: String,
    url: String,
    rating: { type: Number, min: 0, max: 5, default: 3.5 },
    summary: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    category: String,
    language: [[]],
    age: Number,
    tags: [[]],
    date: Date
});

module.exports = mongoose.model("Product", productSchema);