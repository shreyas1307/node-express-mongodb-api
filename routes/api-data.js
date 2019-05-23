const express = require("express");
const route = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const authSchema = require("../model/schema");

route.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

route.post("/", (req, res) => {
  // if (req.body.users === authSchema.userName && req.body.password)
  console.log(req.body.username, req.body.password);
  // console.log(authSchema);
  res.send("<h1>Your data has been submitted!</h1>");
});

module.exports = route;
