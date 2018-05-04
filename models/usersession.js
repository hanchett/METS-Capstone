const mongoose = require("mongoose");

const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        efault: ''
    },
    timestamp: {
        type: Date,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("UserSession", UserSessionSchema);