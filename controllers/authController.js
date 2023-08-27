const Doctor = require('../models/doctorModel');

exports.login = async (req, res, next) => {
  try {
    const { doctorID, password, role } = req.body;
    const doctor = await Doctor.findOne({ doctorID });

    if (!doctor) {
      res.status(404).json({
        status: 'fail',
        message: 'user not found',
      });
    } else if (doctor.password !== password) {
      res.status(400).json({
        status: 'fail',
        message: 'password is incoorect please enter correct password',
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: doctor,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'you are not logged in',
    });
  }
};
