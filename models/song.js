const mongoose = require('mongoose')
const { Schema } = mongoose //destructuring => const Schema = mongoose.Schema

// define the schema
const songSchema = new Schema({ 
        title: String, 
        artist: String,
        releaseYear: Number,
        genres: [ String ],
        ratings: [ Number ]
});

//generate the model from the schema and export for use elsewhere
const Song = mongoose.model('Song', songSchema)

module.exports = Song

