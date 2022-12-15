const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Trip = require("../models/Trip");

exports.CreateTrips = async (req, res) => {
  const data = req.body;
  const userID = data.id;
  const tripname = data.tripname;
  const startdate = data.startdate;
  const enddate = data.enddate;
  const hotel = data.hotel;
  const notes = data.notes;
  const plan = data.plan;
  const newTrip = await Trip.create([
    {
      tripname: tripname,
      start: startdate,
      end: enddate,
      hotel: hotel,
      notes: notes,
      plan: plan,
      userID: userID,
    },
  ]);
  res.send(newTrip);
};

exports.GetTrips = async (req, res) => {
  const id = req.body;
  const allTripsWithID = await Trip.find({ userID: id.userID }).exec();

  res.send(allTripsWithID);
};
