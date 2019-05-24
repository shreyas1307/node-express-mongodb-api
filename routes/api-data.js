const express = require("express");
const route = express.Router();
// const path = require("path");
// const rootDir = require("../util/path");
const Form = require("../model/schema");

route.get("/", (req, res) => {
  Form.find()
    .sort({ index: -1 })
    .then(forms => res.json(forms));
});

route.post("/", (req, res) => {
  const newForm = new Form({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId
  });

  newForm.save().then(form => res.json(form));
});

module.exports = route;
