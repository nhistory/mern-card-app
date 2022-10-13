var express = require('express')
var router = express.Router()

// DEFINE ANY SUB-ROUTERS OF OUR API
// SONGS
var songsRouter = require('./songs')
router.use('/songs', songsRouter)
//USERS
var usersRouter = require('./users')
router.use('/users', usersRouter)



// OUR WELCOME ENDPOINT
router.get('/', (req, res)=>{
    res.send('Welcome to our API!!! :)')
})




module.exports = router