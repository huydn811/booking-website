const User = require("../model/user");

module.exports.getAllUser = async (req, res) => {
    await User.find()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
};

module.exports.addUser = async (req, res) => {
    let user = new User(req.body);
  
    user.avatarUser = 'demo.jpeg';
    user.save()
        .then((user) => {
            res.json(user);
            console.log(user, '[user]');
        })
        .catch((err) => {
            console.log(err, '[err]');
        })
};


module.exports.getUserID = (req, res) => {
    let userID = req.params.userID;
    User.findOne({ _id: userID })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

module.exports.updateUser = async (req, res) => {
    let userID = req.params.userID;
    let updateUser = new User(req.body);
    user.avatarUser = 'demo.jpeg';
    updateUser.avatarUser = saveImg.fileName;
    User.findByIdAndUpdate({ _id: userID }, { $set: updateUser })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

module.exports.deleteUser = (req, res) => {
    let userID = req.params.userID;
    User.findByIdAndDelete({ _id: userID })
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}


