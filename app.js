const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
// const Patient = require('./models/patientModel');

const patientRouter = require('./routes/patientRoutes');
const staffRouter = require('./routes/staffRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const viewsRouter = require('./routes/viewsRoutes');

const app = express();

// Set Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// DATABASE CONNECTION
// const DB = 'mongodb://localhost:27017/Medihub';
const DB = 'mongodb://127.0.0.1/Medihub';
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log('DB connection successful!');
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ROUTES

app.use('/', viewsRouter);
app.use('/api/v1/patients', patientRouter);
app.use('/api/v1/staff', staffRouter);
app.use('/api/v1/doctors', doctorRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log('app running on PORT', PORT);
});
