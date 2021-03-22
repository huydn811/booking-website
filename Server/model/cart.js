const mongoose = require("mongoose");

var CartSchema = new mongoose.Schema({
    ip : {
        type : String,
    },
    userID : {
        type : String,
        ref : "User"
    },
    cartDetail : [{
        tourID : {
            type : String,
            ref : "Tours"
        },
        QtyPeople : {
            type : Number,
            trim : true,
            default : 1
        },
        QtyPrice : {
            type : Number,
            trim : true,
            default : 0
        }
    }],
});

var CartSchema = mongoose.model("Cart", CartSchema , "cart");
module.exports = CartSchema;