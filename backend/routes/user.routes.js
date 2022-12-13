const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const loginAuthController = require("../controllers/authLogin.controller");
const { body } = require("express-validator");
const checkToken = require("../middlewares/checkToken");
const getTokenInfo = require("../middlewares/getTokenInfo");

router.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

router.post("/signup", userController.createAcc);
router.post("/loginAuth", loginAuthController.login);
router.post("/accountAuth", getTokenInfo);

module.exports = router;
