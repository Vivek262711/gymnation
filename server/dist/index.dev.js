"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

require("dotenv").config();

var helmet = require("helmet");

var morgan = require("morgan");

var userRoutes = require("./routes/userRoutes");

var paymentRoutes = require("./routes/paymentRoutes");

var app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({
  policy: "cross-origin"
}));
app.use(morgan("dev"));
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/payment", paymentRoutes);
var PORT = process.env.MONGO_PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  app.listen(process.env.MONGO_PORT, function () {
    console.log("Server listening on ".concat(PORT));
  });
})["catch"](function (err) {
  console.log(err, console.log(process.env.MONGO_PORT));
});