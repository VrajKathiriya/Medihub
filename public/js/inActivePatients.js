const activeBtn = document.querySelector('#active');
const deletePatientButton = document.querySelectorAll('.deletePatient');

deletePatientButton.forEach((patient) => {
  patient.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(this.getAttribute('data-id'));
    const target = e.target.closest('.deletePatient');
    console.log(target);
    const id = target.getAttribute('data-id');
    deletePatient(id);
    location.reload('/getAllPatients');
  });
});

const deletePatient = async (id) => {
  await fetch(`http://127.0.0.1:8000/api/v1/patients/${id}`, {
    method: 'DELETE',
  });
};

activeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  location.href = `http://127.0.0.1:8000/getAllPatients`;
});
