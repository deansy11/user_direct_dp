const express = require("express");
const mustacheExpress = require('mustache-express');
const path = require("path");
const fs = require("fs");
const app = express();
const DATA = require("./data");

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "public")));

// To link CSS sheets check Express static notes
app.get("./styles.css", (req,res) => {
  res.send(fs.readFileSync('./styles.css'));
});

// express.static('public');
app.get("/", (req, res) => {
  console.log("Is working?");
  res.render("main", DATA);
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  let robotProfile = DATA.users.find( function(user) {
    return user.id == req.params.id;
  });
  res.render("user", robotProfile);
  console.log(req.params.id);
});

app.listen(3000, () => {
  console.log("Node running at http://localhost:3000");
});
