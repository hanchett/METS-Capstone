var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    display_name: String,
    name_first: String,
    name_last: String,
    teach_title: String,
    image: String
});

UserSchema.pre('save', function(next) {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.generateHash(this.password);
    next()
});

UserSchema.methods.generateHash = function(password) {
     return bcrypt.hashSync(password, 10);
};

UserSchema.methods.validPassword = function(password) {
     result =  bcrypt.compareSync(password, this.password);
     console.log(result);
     return result;
};

//UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);