const mongoose = require("mongoose");

var CartSchema = new mongoose.Schema({
    // ip : {
    //     type : String,
    // },
    userID : {
        type : String,
        ref : "User"
    },
    customerID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer"
    },
    tourInCart : [],
    dateCreateCart : {
        type : Date,
        default : Date.now
    },
});

var CartSchema = mongoose.model("Cart", CartSchema , "cart");
module.exports = CartSchema;