// modules required for routing
//COMP229-F2022-MidTerm-301216298-START-010
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let faculty = require("../models/faculties");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

module.exports = router;
