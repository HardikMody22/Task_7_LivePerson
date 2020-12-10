const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index");
const table_users = require("./models/table_users.js");

//For local dev env
require("dotenv").config();

var app = (module.exports = express());

//Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//setup middleware body parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", require("./routers/baseRoutes"));

// Define the port to run on
app.set("port", process.env.PORT || 1080);

db.sequelize.sync().then(() => {
  app.listen(app.get("port"), function () {
    console.log("Application Listening");
  });
});
