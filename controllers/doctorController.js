const Doctor = require('../models/doctorModel');

exports.getAllDoctors = async (req, res, next) => {
  try {
    const doctor = await Doctor.find();

    res.status(200).json({
      status: 'success',
      data: doctor,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.addDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      status: 'success',
      data: doctor,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
