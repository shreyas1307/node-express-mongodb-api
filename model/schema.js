const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  userName: String,
  password: String
});

const authentication = mongoose.model("authentication", authSchema);

module.exports = authentication;
