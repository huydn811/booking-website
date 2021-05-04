const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    chatroomID : {
        type : String,
        ref : "ChatRoom"
    },
    userID : {
        type : String,
        ref : "User"
    },
    messages : [],
    TimeSendMessage : {
        type : Date,
        default : Date.now
    }
});

var Message = mongoose.model("Message", messageSchema,"messages");
module.exports = Message;