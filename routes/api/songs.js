var express = require("express");
var router = express.Router();

// import the Song model
const Song = require("../../models/song");

// define endpoints for songs resource

// GET ALL SONGS
router.get("/", (req, res) => {
  // res.send('GET ALL SONGS ENDPOINT WAS REACHED')

  Song.find({}, (err, songs) => {
    //handle if err occurred
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred");
    }

    console.log(songs);
    res.send(songs);
  });
});

// GET ONE SONG BY ID
router.get("/:id", (req, res) => {
  // res.send(`GET ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`)

  Song.findById(req.params.id, (err, song) => {
    if (err) {
      return res.status(400).send(`Error: ${err.message}`);
    }

    if (!song) {
      return res.status(404).send();
    }
    res.send(song);
  });
});

// CREATE SONG
router.post("/", (req, res) => {
  // res.send(`CREATE SONGS ENDPOINT WAS REACHED`)

  Song.create(req.body, (err, savedSong) => {
    console.log(savedSong);
    res.status(201).send();
  });
});

// UPDATE SONG BY ID
router.put("/:id", (req, res) => {
  router.get("/:id", (req, res) => {
    res.send(
      `UPDATE ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`
    );
  });
});

// DELETE SONG BY ID
router.delete("/:id", (req, res) => {
  router.get("/:id", (req, res) => {
    res.send(
      `DELETE ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`
    );
  });
});

module.exports = router;
