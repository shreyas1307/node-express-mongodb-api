const express = require("express");
const route = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const Project = require("../model/schema");

route.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "addApiData.html"));
});

route.post("/", (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    img: req.body.img,
    technologies: req.body.technologies,
    url: req.body.url,
    sourceCode: req.body.sourcecode
  });

  newProject.save().then(data => res.json(data));
  res.redirect("/");
});

module.exports = route;
