var ChatRoom = require("../model/chatroom");
const User = require("../model/user");

module.exports.getAllRoom = async (req,res) => {
    let room = await ChatRoom.find()
    .populate({ path: "messages", populate: { path: 'userID' }})
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
    try {
        const { userID } = req.body;
        const  room = new ChatRoom(req.body);
        const chatroom = await ChatRoom.create(room);
        const user = await User.findOneAndUpdate({_id : userID} , { $set : {chatRoomID : chatroom._id}});
        console.log(user, '[user]');
        res.status(200).json({
            chatroom
        })
    } catch (error) {
        res.status(400).json({
            error
        })
    }

}
