const express = require("express");
const mustacheExpress = require('mustache-express');
const path = require("path");
const fs = require("fs");
const app = express();
const DATA = require("./views/data");

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.get("/", function(req, res){
  console.log("Is working?");
  res.render("main", DATA);
});

// let userData = DATA.module.exports.users

// To link CSS sheets check Express static notes
app.use(express.static('public'));

app.get("/styles.css", (req,res) => {
  res.send(fs.readFileSync('./styles.css'));
});


app.listen(8080, function() {
  console.log("here we are");
});
