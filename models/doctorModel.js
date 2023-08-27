const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter doctor name'],
  },
  doctorID: {
    type: String,
    required: [true, 'Please enter doctor id'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
  },
  degree: {
    type: String,
  },
  role: String,
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
