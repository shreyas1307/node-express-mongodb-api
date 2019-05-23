const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  firstName: String,
  lastName: String,
  emailId: String
});

const formSchematics = mongoose.model("formSchematics", formSchema);

module.exports = formSchematics;
