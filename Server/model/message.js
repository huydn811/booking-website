const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    nameRoom : {
        type : String,
    },
    userID : {
        type : String,
        ref : "User"
    },
    message : {
        type : String,
    },
    TimeSendMessage : {
        type : Date,
        default : Date.now
    }
});

var Message = mongoose.model("Message", messageSchema,"messages");
module.exports = Message;