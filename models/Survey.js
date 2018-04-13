'use strict';
var mongoose = require("mongoose");

var surveySchema = mongoose.Schema({
    responses: [],
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId
        }
    }
});

module.exports = mongoose.model("Survey", surveySchema);