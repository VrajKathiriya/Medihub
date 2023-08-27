const Patient = require('../models/patientModel');

exports.getAllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    // console.log(patients);
    res.status(200).json({
      status: 'success',
      length: patients.length,
      data: patients,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getPatient = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: patient,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updatePatient = async (req, res, next) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: updatedPatient,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deletePatient = async (req, res, next) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.addPatient = async (req, res, next) => {
  try {
    const newPatient = await Patient.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newPatient,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
