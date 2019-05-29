const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  technologies: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  sourceCode: {
    type: String,
    required: true
  },
  id: {
    type: Date,
    default: Date.now()
  }
});

const formSchematics = mongoose.model("project", projectSchema);

module.exports = formSchematics;
