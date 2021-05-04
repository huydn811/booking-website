var mongoose = require("mongoose");

var ChatRoomSchema = mongoose.Schema({
    type : {}, //group || 1 - 1
    messageID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message",
        trim : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        trim : true
    },
    roomMaster : {
        type : String
    }
})

var ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema, "chatrooms");
module.exports = ChatRoom;