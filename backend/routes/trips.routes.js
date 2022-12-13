const express = require("express");
const router = express.Router();
const TripsController = require("../controllers/trips.controller");
const getTokenInfo = require("../middlewares/getTokenInfo");

router.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

router.post("/createTrip", TripsController.CreateTrips);

module.exports = router;
