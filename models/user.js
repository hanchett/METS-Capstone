var mongoose = require("mongoose");
var bcrypt = require("bcrypt");


var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    display_name: String,
    name_first: String,
    name_last: String,
    teach_title: String,

});

UserSchema.methods.generateHash = function(password) {
     return bcrypt.hash(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
     return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", UserSchema);