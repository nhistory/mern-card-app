var express = require("express");
var router = express.Router();

// import the Class model
const Class = require("../../models/class");

// define endpoints for classes resource

// GET ALL CLASSES
router.get("/", (req, res) => {
    // res.send('GET ALL SONGS ENDPOINT WAS REACHED')
  
    Class.find({}, (err, classes) => {
      //handle if err occurred
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred");
      }
  
      console.log(classes);
      res.send(classes);
    });
});

// GET ONE CLASS BY ID
router.get("/:id", (req, res) => {
    // res.send(`GET ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`)
  
    Class.findById(req.params.id, (err, oneClass) => {
      if (err) {
        return res.status(400).send(`Error: ${err.message}`);
      }
  
      if (!oneClass) {
        return res.status(404).send();
      }
      res.send(oneClass);
    });
});
  
// CREATE CLASS
router.post("/", (req, res) => {
    // res.send(`CREATE SONGS ENDPOINT WAS REACHED`)
  
    Class.create(req.body, (err, savedClass) => {
      if (err) {
        return res.status(400).send(`Error: ${err.message}`);
      }
      console.log(savedClass);
      res.status(201).send();
    });
});
  
// UPDATE CLASS BY ID
router.put("/:id", (req, res) => {
    Class.findByIdAndUpdate(req.params.id, req.body, (err, updatedClass) => {
        if (err) {
            return res.status(400).send(`Error: ${err.message}`);
        }
      
          if (!updatedClass) {
            return res.status(404).send();
        }
    
        res.send(updatedClass);
    });
});
  
// DELETE CLASS BY ID
router.delete("/:id", (req, res) => {
    Class.findByIdAndDelete(req.params.id, req.body, (err, deletedClass) => {
        if (err) {
            return res.status(400).send(`Error: ${err.message}`);
        }
      
        if (!deletedClass) {
            return res.status(404).send();
        }
        res.send(deletedClass)
    })
});
  

module.exports = router;