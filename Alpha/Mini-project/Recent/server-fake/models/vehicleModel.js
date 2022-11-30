const mongoose = require("mongoose")

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
    Name : {
        type: String
    },
    Image : {
        type: String
    },
    Detailed_URL : {
        type: String
    },
    Real_URL : {
        type: String
    },
    Large_Details : {
        type: String
    },
    Small_Details : {
        type: String
    },
    Price : {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('vehicle', vehicleSchema)