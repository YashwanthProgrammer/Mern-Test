const mongoose = require('mongoose');
const TravelData = require('./TravelData');

// Sample data object
const sampleTravelData = new TravelData({
    destination: "New York",
    date: new Date("2023-12-15"),
    description: "Visit to Times Square and Central Park"
});

// Function to save sample data
async function saveSampleData() {
    try {
        await sampleTravelData.save();
        console.log("Sample data saved successfully:", sampleTravelData);
    } catch (error) {
        console.error("Error saving sample data:", error);
    }
}

// Ensure MongoDB connection is established before saving
mongoose.connect('mongodb://localhost:27017/travelDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        saveSampleData();
    })
    .catch(error => {
        console.error("MongoDB connection error:", error);
    });
