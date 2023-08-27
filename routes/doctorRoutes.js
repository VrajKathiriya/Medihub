const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctorController');
const authController = require('../controllers/authController');

router
  .route('/')
  .post(doctorController.addDoctor)
  .get(doctorController.getAllDoctors);

router.route('/login').post(authController.login);

module.exports = router;
