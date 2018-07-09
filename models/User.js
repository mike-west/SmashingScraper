const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // saved articles
    saved: {
        type: [Schema.Types.ObjectId]
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;