const mongoose = require("mongoose")

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
    Name : {
        type: String,
        required: true
    },
    Image : {
        type: String,
        required: true
    },
    Real_URL : {
        type: String,
        required: true
    },
    Small_Details : {
        type: String,
        required: true
    },
    Price : {
        type: Number,
        required: true
    },
    Type : {
        type: String,
        required: true
    },
    Mileage : {
        type: Number,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('vehicle', vehicleSchema)