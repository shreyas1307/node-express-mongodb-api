const express = require("express");
const route = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const Project = require("../model/schema");
const mongoose = require("mongoose");

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

  console.log(project);

  project
    .save()
    .then(data => {
      res.status(201).json({
        message: "Handling POST requests to /project data",
        createdProject: data
      });
    })
    .catch(err => {
      res.send({ message: err });
    });
  res.redirect("/");
});

module.exports = route;
