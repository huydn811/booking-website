var Message = require("../model/message");

module.exports.getAllMessage = async (req, res) => { //noi bang n-1
    let message = await Message.find()
    .populate({ path: "userID", populated: { path: "message" }})
    .populate({ path: "chatroomID"})
    .exec();
    res.json(message);
}

module.exports.CreateMessage = async (req,res) => {
    let message = new Message(req.body);
    let { userID, content, sendAt} = req.body;
    let chatroomIDSendMsg  = req.body.chatroomID;
    let chatroomIDExists = await Message.findOne({chatroomID : chatroomIDSendMsg})
    if(chatroomIDExists) {
        await Message.findOneAndUpdate({chatroomID : chatroomIDSendMsg}, {
            $push : {
                messages : {
                    userID,
                    content,
                    sendAt
                }
            }
        })
        res.status(200).json({
            data : message,
            message : "push successfully"
        })
    }else {
        await message.save()
            res.status(200).json({
                data : message,
                message : "save successfully"
        });
    }
}

