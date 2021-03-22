const mongoose = require("mongoose");

var userSchema =  new mongoose.Schema({
    userName : {
        type : String,
        trim : true,
    },
    password : { 
        type : String,
        trim : true,
    },
    avatarUser : {
        type : String
    },
    role : {
        type : String,
    },
    email : {
        type : String,
        trim : true,
    },
    numberPhoneUser : {
        type : Number,
        trim : true,
    }
});

var User = mongoose.model("User", userSchema, "users");
module.exports = User;