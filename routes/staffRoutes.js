const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

router
  .route('/')
  .get(staffController.getAllStaff)
  .post(staffController.addStaff);

router.route('/:id').get(staffController.getStaff);

module.exports = router;
