// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/items", function (req, res) {

    db.Item.findAll({

    }).then(function (dbItem) {

      res.json(dbItem);
    });

  });

  app.post("/api/items", function (req, res) {
    db.Item.create(req.body).then(function (dbItem) {
      res.json(dbItem);

    })
  })



};