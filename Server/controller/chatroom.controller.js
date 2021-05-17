var ChatRoom = require("../model/chatroom");

module.exports.getAllRoom = async (req,res) => {
    let room = await ChatRoom.find()
    .populate({path: "userID"})
    .populate({ path: "messageID" })
    .exec();
    res.json(room);
}

module.exports.getChatRoomByID = async (req, res) => {
    let chatRoomID = req.params.id;
    await ChatRoom.findOne({ _id : chatRoomID })
    .populate({ path: "messageID" })
    .then((chatroom)=> {
        res.json(chatroom);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}
module.exports.createChatRoom = async (req, res) => {
    let room = new ChatRoom(req.body);
    let messageIDExists = room.messageID;
    let checkRoomExists = await ChatRoom.findOne({messageID : messageIDExists})
    if(!checkRoomExists){
        room.save()
        .then((room)=> {
            res.json(room);
        })
        .catch((err)=>{
            console.log(err, '[err]');
        })
    }else{
        res.json({
            message : "room is already!"
        })
    }
}
