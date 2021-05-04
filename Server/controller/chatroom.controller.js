var ChatRoom = require("../model/chatroom");

module.exports.getAllRoom = async (req,res) => {
    let room = await ChatRoom.find()
    .populate({path : "userID"})
    .populate({ path: "messageID" })
    .exec();
    res.json(room);
}

module.exports.getChatRoomByID = async (req, res) => {4
    let chatRoomID = req.params.id;
    await ChatRoom.findOne({_id : chatRoomID })
    .populate({ path: "userID" })
    .populate({ path: "messageID" })
    .then((chatroom)=> {
        console.log(chatroom, '[chatroom]');
        res.json(chatroom);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}
module.exports.createChatRoom = async (req, res) => {
    let room = new ChatRoom(req.body);
    let userIDExists = room.userID;
    //check room exists ?
    let checkRoomExists = await ChatRoom.findOne({userID : userIDExists})
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
