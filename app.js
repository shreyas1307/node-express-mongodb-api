// Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

// Root Directory File
const rootDir = require("./util/path");

// Importing Route Files
const apiDataRoutes = require("./routes/api-data");

// Dotenv file validation
require("dotenv/config");

// Creating Express App, Enabling Body-parser for Inputs
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//Routes

app.use("/api-data", apiDataRoutes);
app.get("/", (req, res) => {
  res.send("<h1>Hello World from NodeJS</h1>");
});

// Connecting to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("DB Connected!");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
