const Tour = require("../model/tour");
const helper = require("../helpers/helper");

module.exports.getAllTour = (req,res) => {
    Tour.find()
    .then((tour) => {
        res.json(tour);
    })
    .catch((err)=> {
        res.status(400).send(err)
    })
};

module.exports.addTour = async (req, res) => {
    let tour = new Tour(req.body);
    let imgBase = req.body.imgBase;
    const saveImg = await helper.SaveImgBase64(imgBase,"/tours");
    tour.avatarTour = saveImg.fileName;
    tour.save()
    .then((tour) => {
        res.json(tour);
    })
    .catch((err) => {
        console.log(err, '[err]');
        res.status(400).send(err);
    })
};

module.exports.getTourID = (req, res) => {
    let tourID = req.params.tourID;
    Tour.findOne({_id : tourID})
    .then((tour) => {
        res.json(tour)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

module.exports.updateTour = async (req, res) => {
    let tourID  = req.params.tourID;
    let updateTour = new Tour(req.body);
    let imgBase = req.body.imgBase;
    const saveImg = await helper.SaveImgBase64(imgBase,"/tours");
    updateTour.avatarTour = saveImg.fileName;
    Tour.findByIdAndUpdate({_id : tourID}, {$set : updateTour})
    .then((tour) => {
        res.json(tour);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
};

module.exports.deleteTour = (req, res) => {
    let tourID = req.params.tourID;
    Tour.findByIdAndDelete({_id : tourID})
    .then((tour) => {
        res.json(tour)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}