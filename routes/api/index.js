var express = require('express')
var router = express.Router()
// var validateToken = require('../../middleware/validateToken')

// DEFINE ANY SUB-ROUTERS OF OUR API
// SONGS
var songsRouter = require('./songs')
router.use('/songs', songsRouter)
// USERS
var usersRouter = require('./users')
router.use('/users', usersRouter)
// CLASSES
var classesRouter = require('./classes')
// classesRouter.use(validateToken)
router.use('/classes', classesRouter)



// OUR WELCOME ENDPOINT
router.get('/', (req, res)=>{
    res.header("custom-header", "foo")
    res.send('Welcome to our API!!! :)')
})




module.exports = router