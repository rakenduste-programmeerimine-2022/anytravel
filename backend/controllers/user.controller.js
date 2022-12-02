const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const user = require("../models/User");

const saltrounds = 10;
exports.createAcc = async (req, res) => {
  const info = req.body;
  const fname = info.firstname;
  const lname = info.lastname;
  const email = info.email;
  const gender = info.gender;
  const country = info.country;
  const bdate = info.birthdate;
  const password = await bcrypt.hash(info.password, saltrounds);
  const acc = await user.create([
    {
      firstname: fname,
      lastname: lname,
      email: email,
      gender: gender,
      country: country,
      birthdate: bdate,
      password: password,
    },
  ]);
  res.send(acc);
};
