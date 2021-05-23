var mongoose = require("mongoose");

var ChatRoomSchema = mongoose.Schema({
    type : {}, //group || 1 - 1
    message : [
        {
            userID : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "User"
            },
            content :{
                type : String
            },
            sendAt : {
                type : Date,
                default : Date.now()
            }
        }
    ],
    roomMaster : {
        type : String
    }
})

var ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema, "chatrooms");
module.exports = ChatRoom;