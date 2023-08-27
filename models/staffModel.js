const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter patient name'],
  },
  staffID: {
    type: Number,
    required: [true, 'Please enter patient ID'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter patient password'],
  },
  gender: {
    type: String,
    required: [true, 'Please enter patient gender'],
  },
  role: String,
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
