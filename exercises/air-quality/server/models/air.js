const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const qualityOpts = ["Good", "Moderate", "Unhealthy for Sensitive Groups", "Unhealthy", "Very Unhealthy", "Hazardous"]

const airSchema = new Schema({
    ppm: Number,
    quality: {
        type: String,
        enum: qualityOpts
    },
    location: {
        lat: String,
        long: String
    }
}, {timestamps: true});

module.exports = mongoose.model("AirQuality", airSchema);
