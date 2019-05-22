const express = require("express");
const bodyParser = require("body-parser");

const apiDataRoutes = require("./routes/api-data");
// Dotenv file validation
require("dotenv");
// Creating Express App, Enabling Body-parser for Inputs
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//Importing routes

app.use("/api-data", apiDataRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Hello World from NodeJS</h1>");
});

// Server Listen
app.listen(3000);
