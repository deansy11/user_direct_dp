const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const DATA = require("./views/data");

const mustacheExpress = require('mustache-express');
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index.mustache", DATA);
});

module.exports

// To link CSS sheets
app.get("/styles.css", (req,res) => {
  res.send(fs.readFileSync('./styles.css'));
});


app.listen(3000, function() {
  console.log("https://localhost:3000");
})
