// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const faculties = require("../models/faculties");

// define the faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/index", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

//  GET the faculty Details page in order to add a new faculty
router.get("/add", (req, res, next) => {
res.render("faculties/details",{
  title: "faculties",
  faculties: "",
})

});

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   const {Facultyid,Facultyname, Department, Subject} = req.body; // Extrapolating data from req.body

  const newfaculties = new faculties({
    Facultyid,
    Facultyname,
    Department,
    Subject
  });

  faculties.create(newfaculties, (err, faculties) => {
    if (err) res.end(err);
    else res.redirect("/faculties");
  });
});
   


// GET the faculty  Details page in order to edit an existing faculty
router.get("/edit/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id;
   faculties.findById(id, (err, facultiesToEdit) => {
     if (err) res.end(err);
     else {
       res.render("facultiess/details", {
         title: "faculties",
         facultiess: facultiesToEdit,
       });
     }
   });
 });

// POST - process the information passed from the details form and update the document
router.post("/edit/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id;
  const {Title, Price, Author, Genre, Description} = req.body;

  const updatedfaculties = new faculties({
    _id: id,
    Facultyid,
    Facultyname,
    Department,
    Subject
  });
  faculties.updateOne({_id: id}, updatedfaculties, (err) => {
    if (err) {
      res.end(err);
    } else {
      res.redirect("/faculties");
    }
  });
});

// GET - process the delete
router.get("/delete/:id", (req, res, next) => {
 
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id;
  faculties.deleteOne({_id: id}, (err) => {
    if (err) res.end(err);
    else res.redirect("/faculties");
  });
});



module.exports = router;
