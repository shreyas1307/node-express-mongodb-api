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

route.post("/", (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    img: req.body.img,
    technologies: req.body.technologies,
    url: req.body.url,
    sourceCode: req.body.sourcecode
  });

  // newForm.save().then(form => res.json(form));
  console.log(newProject);
});

module.exports = route;
