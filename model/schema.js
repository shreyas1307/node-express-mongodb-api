const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
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
    default: Date.now
  }
});

const formSchematics = mongoose.model("Projects", ProjectSchema);

module.exports = formSchematics;
