let Patients, Doctors, Staff;

async function getPatientData() {
  const response = await fetch('http://127.0.0.1:8000/api/v1/patients');
  const patients = await response.json();
  console.log(patients);
  Patients = patients.data;
}
async function getDoctorData() {
  const response = await fetch('http://127.0.0.1:8000/api/v1/doctors');
  const doctors = await response.json();
  console.log(doctors);
  Doctors = doctors.data;
}
async function getStaffData() {
  const response = await fetch('http://127.0.0.1:8000/api/v1/staff');
  const staff = await response.json();
  console.log(staff);
  Staff = staff.data;
}

const loginButton = document.querySelector('.loginBtn');
const temp = document.getElementById('temp');

loginButton?.addEventListener('click', async function (e) {
  e.preventDefault();
  const id = document.querySelector('#id').value;
  const pwd = document.querySelector('#pwd').value;
  const role = document.querySelector('#role').value;
  console.log(id, pwd, role);
  await getPatientData();
  await getDoctorData();
  await getStaffData();

  let currentAccount;

  if (role == 'role') {
    alert('Select The Appropriate Role');
    return;
  }

  if (role == 'Patient') {
    console.log('Patient');
    currentAccount = Patients.find((acc) => acc.patientID == id);
    if (!currentAccount) {
      alert('Patient Not Found');
      return;
    }

    if (currentAccount.password == pwd) {
      console.log('logged in');
      // window.location.href = `http://127.0.0.1:8000/getPatient/${id}`;
      temp.setAttribute('action', `/getPatient/${id}`);
      temp.submit();
    } else {
      alert('Invalid Password');
    }
  } else if (role == 'Doctor') {
    console.log('doctor');
    currentAccount = Doctors.find((acc) => acc.doctorID == id);
    if (!currentAccount) {
      alert('Doctor Not Found');
      return;
    }

    if (currentAccount.password == pwd) {
      console.log('logged in');
      window.location.href = `http://127.0.0.1:8000/getAllPatients`;
    } else {
      alert('Invalid Password');
    }
  } else {
    console.log('\nstaff');
    currentAccount = Staff.find((acc) => acc.staffID == id);
    if (!currentAccount) {
      alert('Staff Not Found');
      return;
    }

    if (currentAccount.password == pwd) {
      console.log('logged in');
      window.location.href = `http://127.0.0.1:8000/getAllPatients`;
    } else {
      alert('Invalid Password');
    }
  }
});
