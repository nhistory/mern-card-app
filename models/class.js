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
  type: {
    type: String,
    enum: ['music', 'censory', 'art'],
    required: [true, 'Class type must be required!!'],
  },
  schedule: {
    type: String,
    required: [true, 'Schedule must be required!!'],
  },
  startDate: {
    type: String,
    required: [true, 'Start Date must be required!!'],
  },
  teacher: teacherSchema,
  student: [studentSchema],
});

//generate the model from the schema and export for use elsewhere
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
