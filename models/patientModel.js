const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter patient name'],
  },
  patientID: {
    type: Number,
    required: [true, 'Please enter patient ID'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter patient password'],
  },
  active: Boolean,
  report: String,
  gender: {
    type: String,
  },
  role: String,
  mobile_no: Number,
  age: Number,
  bed_no: Number,
  admitDate: String,
  health: {
    heartBeat: Number,
    SPO2: Number,
    BP: String,
    bodyTemp: Number,
  },
  bloodGroup: String,
  disease: String,
  treatments: String,
  medicines: [
    {
      time: String,
      task: String,
      isDone: Boolean,
    },
  ],
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
