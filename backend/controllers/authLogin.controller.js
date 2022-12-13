const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.login = async (req, res) => {
  const { user, pwd } = req.body;
  console.log(req.body);
  if (!user || !pwd)
    return res.status(400).json({ message: "username and password required" });

  const foundUser = await User.findOne({ email: user }).exec();
  if (!foundUser) return res.sendStatus(401);
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const accessToken = jwt.sign(
      {
        userInfo: {
          email: foundUser.email,
          firstname: foundUser.firstname,
          lastname: foundUser.lastname,
          gender: foundUser.gender,
          country: foundUser.country,
          birth: foundUser.birthdate,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );
    const refreshToken = jwt.sign(
      { email: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      accessToken,
    });
  }
};
