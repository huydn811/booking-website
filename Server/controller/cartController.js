var Cart = require("../model/cart");

module.exports.getCart = (req,res) => {
    let cart = Cart.find()
    .then((cart)=> {
        res.status(200);
       res.json(cart);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}

module.exports.addToCart = (req, res) => {
    let cart = new Cart({
        userID : req.body.user_id,
        tourID : req.body.tour_id,
    });
    cart.save()
    .then((cart)=>{
        res.status(200)
       res.json(cart)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}