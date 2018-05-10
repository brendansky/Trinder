var express        = require("express");
var exphbs         = require("express-handlebars");
var path           = require("path");
var bodyParser     = require("body-parser");
var app  = express();
var PORT = process.env.PORT || 3000;

// Set up Express to handle parsing data
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": false}));

// Set handlebars
app.engine("handlebars", exphbs({"defaultLayout": "main"}));
app.set("view engine", "handlebars");


app.listen(PORT, () => console.log(`App listening on ${PORT}.`));