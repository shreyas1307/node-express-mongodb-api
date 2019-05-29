const express = require("express");
const route = express.Router();
// const path = require("path");
// const rootDir = require("../util/path");
const Project = require("../model/schema");

route.get("/", (req, res) => {
  Project.find()
    .sort({ index: -1 })
    .then(projects => res.json(projects));
});

module.exports = route;
