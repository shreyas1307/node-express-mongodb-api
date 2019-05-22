const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("<h1> Connection Success </h1>");
});

route.post("/", (req, res) => {
  res.send("<h1>Your data has been submitted!</h1>");
});

module.exports = route;
