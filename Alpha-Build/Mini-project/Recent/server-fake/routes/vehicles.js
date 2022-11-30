const express = require('express')

const {
    getVehicles,
} = require('../controller/VehicleController')

const router = express.Router()

//GET all vehicles 
router.get('/', getVehicles)

module.exports = router 