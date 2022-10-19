const mongoose = require('mongoose')
const { Schema } = mongoose //destructuring => const Schema = mongoose.Schema

// define the schema
const classSchema = new Schema({ 
    type: String,
    schedule: String,
    startDate: String,
});

//generate the model from the schema and export for use elsewhere
const Class = mongoose.model('Class', classSchema)

module.exports = Class
