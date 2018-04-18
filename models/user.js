var mongoose = require("mongoose");
//var bcrypt = require("bcrypt");
//var SALT_WORK_FACTOR = 10;
    //passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    display_name: String,
    name_first: String,
    name_last: String,
    grade_level: String,

});

module.exports = mongoose.model("User", UserSchema);