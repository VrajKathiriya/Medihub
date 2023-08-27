const Staff = require('../models/staffModel');

exports.addStaff = async (req, res, next) => {
  try {
    const nurse = await Staff.create(req.body);

    res.status(200).json({
      status: 'success',
      data: nurse,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllStaff = async (req, res, next) => {
  try {
    const nurse = await Staff.find();

    res.status(200).json({
      status: 'success',
      length: nurse.length,
      data: nurse,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getStaff = async (req, res, next) => {
  try {
    const nurse = await Staff.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: nurse,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
