const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const loginAuthController = require("../controllers/authLogin.controller");
const { body } = require("express-validator");
const checkToken = require("../middlewares/checkToken");

router.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

router.post("/signup", userController.createAcc);
router.post("/loginAuth", loginAuthController.login);

module.exports = router;
