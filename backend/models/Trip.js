const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new mongoose.Schema(
  {
    tripname: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    hotel: { type: String, required: false },
    notes: { type: String, required: false },
    plan: { type: String, required: false },
    userID: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", TripSchema);
