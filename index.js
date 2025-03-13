const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TravelDataSet = require('./TravelData');
const app = express();
app.use(express.json());
app.use(cors());
const mongoDBUrl =
  "mongodb+srv://2211cs010607:icH7Tmd8pnQH56q1@traveldataset.5ciyd.mongodb.net/travelDB";

mongoose
  .connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


app.post("/Addtravels", async (req, res) => {
  try {
    const newTravel = new TravelDataSet(req.body);
    await newTravel.save();
    res.status(201).json({ message: "Travel experience added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/travels", async (req, res) => {
  try {
    const travels = await TravelDataSet.find();
    console.log("Fetched Travels:", travels); // Debug log
    res.status(200).json(travels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
