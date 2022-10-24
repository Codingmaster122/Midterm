//COMP229-F2022-MidTerm-301216298-START-010
let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
