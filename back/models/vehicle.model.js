const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    
        description: {
        
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true
    },
    year: {
        type:Number,
        required:true
    },
    available: {
        type: Boolean,
        default: true
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;