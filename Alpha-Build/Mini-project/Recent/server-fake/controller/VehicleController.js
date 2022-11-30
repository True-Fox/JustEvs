const Vehicle = require("../models/vehicleModel")

//get all vehicles
const getVehicles = async (req, res) => {
    const vehicles = await Vehicle.find({}).sort({createdAt: -1})

    res.status(200).json(vehicles)
}

module.exports = {
    getVehicles,
}