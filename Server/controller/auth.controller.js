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
 
module.exports.register = async(req, res) => {
    try {
        let user = new User(req.body);
        req.body.avatar = req.file.filename;
        await User.create(req.body);
        res.status(200).json({
            data : user,
            message : "register successfully"
        })
    } catch (error) {
        res.status(400).json({
            error,
            message : "register fail"
        })
    }
}
