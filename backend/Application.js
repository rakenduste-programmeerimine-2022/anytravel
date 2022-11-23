const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const userRouter = require("./routes/user.routes");

require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@rakendusteproge.vyilhmi.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e));

app.get("/", (req, res) => {
  res.send("Hello world whoross!");
});

app.get("/Searchresults", (req, res) => {
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
});

// MAIN ROUTES

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
