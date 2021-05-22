var User = require("../model/user");
var jwt = require('jsonwebtoken');
module.exports.login = async (req, res)=> {
    var email = req.body.txt_userName;
    var password = req.body.txt_password;
    var user = await User.findOne({email : email});
    if(!user) {
        return res.json({
            err : "email and password is incorrect!",
            code : 401
        })
    }
    if(user.password !== password ){
        return res.json({
            err : "email and password is incorrect!",
            code : 401
        })
    }
    let accessToken = jwt.sign({name : user.userName}, 'accessToken', {expiresIn : '1h'});
    let refreshToken = jwt.sign({name : user.userName},'refreshToken',{expiresIn: '7d'})
    res.json({
        code : 200,
        expiresIn : 60*60,
        expiresInRefToken : 60*60*24*7,
        user : user,
        refreshToken,
        accessToken
    })
}

module.exports.register = (req, res) => {
    let user = new User({
        userName : req.body.userName,
        password : req.body.password,
        avatarUser : req.body.avatarUser,
        role : req.body.role,
        email : req.body.email,
        numberPhoneUser : req.body.numberPhoneUser
    });
    user.save()
    .then((user)=> {
        res.json(user);
    })
    .catch((err)=>{
        res.json(err)
    })
}
