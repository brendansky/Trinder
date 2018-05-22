// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.post("/api/items", function (req, res) {
    db.Item.create(req.body).then(function (dbPost) {
      res.json(dbPost);

      console.log("hello world")
    });
  });

};