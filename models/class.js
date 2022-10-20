const mongoose = require('mongoose');
const { Schema } = mongoose; //destructuring => const Schema = mongoose.Schema

// define the schema
const studentSchema = new Schema({
  name: String,
  motherName: String,
  phone: String,
  address: String,
});

const teacherSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  image: String,
});

const classSchema = new Schema({
  type: String,
  schedule: String,
  startDate: String,
  teacher: teacherSchema,
  student: [studentSchema],
});

//generate the model from the schema and export for use elsewhere
const Class = mongoose.model('Class', classSchema);

module.exports = Class;