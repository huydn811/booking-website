const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();
const multer = require("multer");
const upload =  multer({dest : "./uploads/tours"});
//get all user
router.get("/get-all-user", userController.getAllUser);
//add user
router.post("/add-user",upload.single("avatar"), userController.addUser);
//get user with id
router.get("/get-userID/:userID", userController.getUserID);
//update user
router.put("/update-user/:userID", userController.updateUser);
//delete user   
router.delete("/delete-user/:userID", userController.deleteUser);

module.exports = router;