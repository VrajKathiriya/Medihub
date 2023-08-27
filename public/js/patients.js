// // patients.forEach(myFunction);
// console.log(Patients);

// Patients.forEach(myFunction);

// function myFunction(item) {

//     thead.innerHTML +=
//         `
//     <tr class="tbody">
//         <td id="p_id">${item.patientId}</td>
//         <td id="p_name">${item.name}</td>
//         <td id="p_Age">${item.age}</td>
//         <td id="p_Sex">${item.gender}</td>
//         <td id="p_bednumber">${item.bed_no}</td>
//         <td id="p_Mobile">${item.nobile_no}</td>
//         <td id="p_disease">${item.disease}</td>
//         <td id="p_moreinfo"><button class="viewmore">View More</button></td>
//     </tr>
// `
// }

// patients.forEach(myFunction);

// function myFunction(item) {
//   thead.innerHTML += `
//     <tr class="tbody">
//         <td id="p_id">${item.id}</td>
//         <td id="p_name">${item.name}</td>
//         <td id="p_Age">${item.Age}</td>
//         <td id="p_Sex">${item.Sex}</td>
//         <td id="p_bednumber">${item.Bed_Number}</td>
//         <td id="p_Mobile">${item.Mobile}</td>
//         <td id="p_disease">${item.disease}</td>
//         <td id="p_moreinfo"><button class="viewmore">View More</button></td>
//     </tr>
// `;
// }

const deletePatientButton = document.querySelectorAll('.deletePatient');
deletePatientButton.forEach((patient) => {
  patient.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(this.getAttribute('data-id'));
    const target = e.target.closest('.deletePatient');
    console.log(target);
    const id = target.getAttribute('data-id');
    updateJSON(`http://127.0.0.1:8000/api/v1/patients/${id}`, {
      active: false,
    });
    location.reload('/getAllPatients');
  });
});

const updateJSON = async function (url, data) {
  try {
    const fetchPro = fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await Promise.race([fetchPro]);
    const jsonData = await res.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

const editPatientButton = document.querySelectorAll('.editPatient');
editPatientButton.forEach((patient) => {
  patient.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(patient);
    const target = e.target.closest('.editPatient');
    const id = target.getAttribute('data-id');
    location.href = `http://127.0.0.1:8000/editPatient/${id}`;
  });
});

const inActiveBtn = document.querySelector('#inActive');
inActiveBtn.addEventListener('click', (e) => {
  e.preventDefault();

  location.href = `http://127.0.0.1:8000/getAllPatients/inActive`;
});

// const url = `http://127.0.0.1:8000/api/v1/patients/${id}`;
// const sendJSON = async function (url, data) {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const res = await Promise.race([fetchPro]);
//     const jsonData = await res.json();
//     console.log(jsonData);
//     return jsonData;
//   } catch (err) {
//     console.log(err);
//   }
// };
// sendJSON(url, data);
