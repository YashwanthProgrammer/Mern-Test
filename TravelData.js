const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    title: String,
    location: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TravelDataSet', travelSchema);
