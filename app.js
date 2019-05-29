// Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

// Root Directory File
const rootDir = require("./util/path");

// Importing Route Files
const createApiDataRoutes = require("./routes/add-api-data");
const viewApiDataRoutes = require("./routes/view-api");

// Dotenv file validation
require("dotenv/config");

// Creating Express App, Enabling Body-parser for Inputs
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Serving static files
app.use(express.static("public"));

//Routes
app.use("/add-data", createApiDataRoutes);
app.use("/view-data", viewApiDataRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

// Connecting to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("DB Connected");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
