const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const credentials = require("./middlewares/credentials");
const corsOptions = require("./config/corsOptions");
const userRouter = require("./routes/user.routes");
const cors = require("cors");
const tripsRouter = require("./routes/trips.routes");
var bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(express.json());

app.use(credentials);

app.use(cors(corsOptions));

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@rakendusteproge.vyilhmi.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e));

app.get("/Searchresults", (req, res) => {
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
});

// MAIN ROUTES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.use("/myTrips", tripsRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
