const Tour = require("../model/tour");

const fuzzySearch = (text) => {
    const regex = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    return new RegExp(regex, 'gi');
}

module.exports.getAllTour = (req, res) => {
    const { q } = req.query;
    const conditionFind = {};
    if (q) {
        conditionFind.tourName = fuzzySearch(q)
    }

    Tour.find(conditionFind)
        .then((tour) => {
            res.json(tour);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
};

module.exports.addTour = async (req, res) => {
    let tour = new Tour(req.body);

    tour.avatarTour = 'demo.jpeg';

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
    Tour.findOne({ _id: tourID })
        .then((tour) => {
            res.json(tour)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
}

module.exports.updateTour = async (req, res) => {
    let tourID = req.params.tourID;
    let updateTour = req.body

    updateTour.avatarTour = 'demo.jpeg';

    Tour.findByIdAndUpdate({ _id: tourID }, { $set: updateTour })
        .then((tour) => {
            res.json(tour);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

module.exports.deleteTour = (req, res) => {
    let tourID = req.params.tourID;
    Tour.findByIdAndDelete({ _id: tourID })
        .then((tour) => {
            res.json(tour)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
}