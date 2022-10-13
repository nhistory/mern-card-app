var express = require('express');
var router = express.Router();

// define endpoints for songs resource

// GET ALL SONGS
router.get('/', (req,res) => {
    res.send('GET ALL SONGS ENDPOINT WAS REACHED')
});

// GET ONE SONG BY ID
router.get('/:id', (req,res) => {
    res.send(`GET ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`)
})

// CREATE SONG
router.post('/', (req,res) => {
    router.get('/:id', (req,res) => {
        res.send(`CREATE SONGS ENDPOINT WAS REACHED`)    
    })
})

// UPDATE SONG BY ID
router.put('/:id', (req,res) => {
    router.get('/:id', (req,res) => {
        res.send(`UPDATE ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`)    
    })
})

// DELETE SONG BY ID
router.delete('/:id', (req,res) => {
    router.get('/:id', (req,res) => {
        res.send(`DELETE ONE SONGS ENDPOINT WAS REACHED and the ID is ${req.params.id}`)
    })
})




module.exports = router