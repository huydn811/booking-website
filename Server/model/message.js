const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    chatroomID : {
        type : String,
        ref : "ChatRoom"
    },
    messages : [],
});

var Message = mongoose.model("Message", messageSchema,"messages");
module.exports = Message;   