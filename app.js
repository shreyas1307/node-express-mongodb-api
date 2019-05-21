const express = require("express");

const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Hello World from NodeJS</h1>");
});

// Server Listen
app.listen(3000);
