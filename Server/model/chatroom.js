var mongoose = require("mongoose");

var ChatRoomSchema = mongoose.Schema({
    type : {}, //group || 1 - 1
    messageID : {
        type : String,
        ref : "Message"
    },
    userID : {
        type : String,
        ref : "User"
    },
    roomMaster : {
        type : String
    }
})

var chatRoom = mongoose.model("ChatRoom", ChatRoomSchema, "chatrooms");
module.exports = chatRoom;