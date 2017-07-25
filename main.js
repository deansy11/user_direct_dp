const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const mustacheExpress = require('mustache-express');
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "public") )

const DATA = {
  
}


app.listen(3000, function() {
  console.log("https://localhost:3000");
})
