const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.route('/').get(viewsController.getHomePage);
router.route('/login').get(viewsController.getLoginPage);
router.route('/getAllPatients').get(viewsController.getAllPatientsPage);
router
  .route('/getAllPatients/inActive')
  .get(viewsController.getAllInActivePatientsPage);
router.route('/addPatient').get(viewsController.getAddPatientPage);
router.route('/getPatient/:id').get(viewsController.getPatientDetailPage);
router.route('/about').get(viewsController.getAboutPage);
router.route('/contact').get(viewsController.getContactPage);
// router.route('/deletePatient/:id').delete(viewsController.deletePatient);

router.route('/editPatient/:id').get(viewsController.editPatient);

module.exports = router;
