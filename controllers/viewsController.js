const Patient = require('../models/patientModel');

exports.getHomePage = async (req, res, next) => {
  res.status(200).render('base');
};

exports.getLoginPage = async (req, res, next) => {
  res.status(200).render('login');
};

exports.getAllPatientsPage = async (req, res, next) => {
  // 1) Get patient data from collection
  const patients = await Patient.find({ active: true });

  // 2) Build template

  // 3) Render that template using data from 1)
  res.status(200).render('patients', {
    patients,
  });
};

exports.getAllInActivePatientsPage = async (req, res, next) => {
  const patients = await Patient.find({ active: false });

  res.status(200).render('inActivePatients', { patients });
};

exports.getAddPatientPage = async (req, res, next) => {
  res.status(200).render('addPatient');
};

exports.getPatientDetailPage = async (req, res, next) => {
  // 1) get the data for the requested patient
  const patient = await Patient.findOne({ patientID: req.params.id });

  // 2) Build template
  // console.log(patient);
  // 3) Render template
  res.status(200).render('details', {
    patientMedicine: patient.medicines,
    role: req.params.role,
    patient,
  });
};

// exports.deletePatient = async (req, res, next) => {
//   try {
//     console.log(req.params.id);
//     await Patient.findOneAndDelete({ patientID: req.params.id });
//     res.status(204).json({
//       status: 'success',
//       data: null,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

exports.editPatient = async (req, res, next) => {
  // 1) get the data for the requested patient
  // const patient = await Patient.findOneAndUpdate({ patientID: req.params.id });
  const patient = await Patient.findOne({ patientID: req.params.id });

  // 2) Build template
  // console.log(patient);
  // 3) Render template
  res.status(200).render('editPatient', {
    patientMedicine: patient.medicines,
    patient,
  });
};

exports.getAboutPage = async (req, res, next) => {
  res.status(200).render('about');
};

exports.getContactPage = async (req, res, next) => {
  res.status(200).render('contact');
};
