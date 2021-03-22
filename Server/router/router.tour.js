const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller");
const multer = require("multer");
const upload =  multer({dest : "./uploads",fileFilter : (req,file,cb)=>{
    console.log("aaaaaaaaaaaaa", '["aaaaaaaaaaaaa"]');
}});

//get all tour
router.get("/get-all-tour", tourController.getAllTour);
//add tour
router.post("/add-tour",upload.single("avatarTour") ,tourController.addTour);
//get tour id
router.get("/get-tourid/:tourID", tourController.getTourID);
//update tour
router.put("/update-tour/:tourID",upload.single("avatarTour"), tourController.updateTour);
//delete tour
router.delete("/delete-tour/:tourID", tourController.deleteTour);

module.exports = router;