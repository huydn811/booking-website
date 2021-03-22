require ("dotenv").config();

const express = require("express");
const app = express();
const PORT = require("http").createServer(app);
const io = require("socket.io")(PORT);

const tourRouter = require("./router/router.tour");
const userRouter =  require("./router/router.user");
const transportRouter = require("./router/router.transport");
const employeeRouter = require("./router/router.employee");
const authRouter = require("./router/router.auth");
const cartRouter = require("./router/router.cart");
const storageRouter = require("./router/router.storages");
const chatRouter = require("./router/router.chat");

const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function(){
    const port = process.env.PORT || 9000;
    app.use(cors());
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(
        bodyParser.urlencoded({
            extended : true
        })
    );
    app.use(express.static("public"));
    app.use(morgan("dev"));
    app.use(session({
        resave: true, 
        saveUninitialized: true, 
        secret: 'somesecret', 
        cookie: { maxAge: 60000 }
    }))

    

    app.use("/api", authRouter);
    app.use("/api", cartRouter);
    app.use("/api/tour", tourRouter);
    app.use("/api/user",userRouter);
    app.use("/api/transport", transportRouter);
    app.use("/api/employee", employeeRouter);
    app.use("/api/storages", storageRouter);
    app.use("/api/chat/", chatRouter)

    app.listen(port,()=>{
        console.log("app is running with port " + port);
    });

    //create connect between client & server
    io.on("connection", (socket) => {
        console.log("user connected", '["user connected"]');
        // console.log(socket, '[socket]');

        // socket.on("disconnect", () => {
        //     console.log(socket.id, '[disconnected]');
        // })
        // //server listen data from client
        // socket.on("newMessage-client-sent", dataNewMessage => {
        //     console.log(dataNewMessage, '[dataNewMessage]');
        //     //server send data to client
        //     io.socket.emit("newMessage-server-sent",{
        //         data : dataNewMessage, 
        //         id : socket.id
        //     })
        // })
    })
});

module.exports = app;