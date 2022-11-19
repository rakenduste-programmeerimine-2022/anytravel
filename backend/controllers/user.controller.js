const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const saltrounds = 10;

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    country: { type: String, required: true },
    birthdate: { type: Date, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);

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
