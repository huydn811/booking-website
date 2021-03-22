var Message = require("../model/message");

module.exports.getAllMessage = async (req, res) => { //noi bang n-1
    let message = await Message.find()
    .populate({ path: "userID", populated: { path: "message" } })
    .exec();
    res.json(message);
}



module.exports.CreateMessage = (req,res) => {
    let message = new Message(req.body);
    message.save()
    .then((message)=> {
        res.json(message);
    })
    .catch((err)=>{
        console.log(err, '[err]');
    })

}