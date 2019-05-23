const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const formSchematics = mongoose.model("formSchematics", formSchema);

module.exports = formSchematics;
