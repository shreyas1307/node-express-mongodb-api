const express = require("express");
const route = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const Project = require("../model/schema");

route.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "addApiData.html"));
});

route.post("/", (req, res) => {
  const project = new Project({
    name: req.body.name,
    img: req.body.img,
    technologies: req.body.technologies,
    url: req.body.url,
    sourceCode: req.body.sourcecode
  });

  project
    .save()
    .then(data => res.json(data))
    // .then(data => console.log(data))
    .catch(err => {
      console.error(err);
    });
  res.redirect("/");
});

module.exports = route;
