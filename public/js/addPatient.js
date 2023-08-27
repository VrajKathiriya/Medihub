const createHTML = (data) => {
  return `
    <tr>
        <td class="medicine--data">
        <input type="text" name="medicine-data" id="timing_field" class="medicine--time" placeholder="enter time">
        </td>
        <td class="medicine--lable">
        <input type="text" name="Medicine" class="medicine--task"  placeholder="Enter task Here">
        </td>
    </tr>
    `;
};
const addMedicine = document.querySelector('.medicine--add');
const medicineTable = document.querySelector('.medicine--table');
addMedicine.addEventListener('click', () => {
  medicineTable.insertAdjacentHTML('beforeend', createHTML());
});
const submit = document.getElementById('submit');
const p_name = document.getElementById('p_name');
const p_id = document.getElementById('p_id');
const p_age = document.getElementById('p_age');
const sex = document.getElementById('sex');
const p_date = document.getElementById('p_date');
const p_bed = document.getElementById('p_bed');
const p_phone = document.getElementById('p_phone');
const p_blood = document.getElementById('p_blood');
const disease = document.getElementById('disease');
const heartBeat = document.getElementById('heartBeat');
const bodyTemp = document.getElementById('bodyTemp');
const BP = document.getElementById('BP');
const SPO2 = document.getElementById('SPO2');
const treatment = document.getElementById('treatment');
const medicineTime = document.getElementsByClassName('medicine--time');
const medicineTask = document.getElementsByClassName('medicine--task');
const reportBtn = document.querySelector('#report');

submit.addEventListener('click', (e) => {
  // e.preventDefault();
  console.log(medicineTime);
  console.log(medicineTask);

  const medicines = [];
  // medicineTime.forEach((medicine, index-) => {
  //     const data = {
  //         "time": medicineTime[index].value,
  //         "task": medicine.value,
  //         "isDone": false
  //     }
  //     medicines.push(data);
  // })
  for (let i = 0; i < medicineTask.length; i++) {
    const data = {
      time: medicineTime[i].value,
      task: medicineTask[i].value,
      isDone: false,
    };
    console.log(data);
    medicines.push(data);
  }

  // console.log(medicines);
  reportName = reportBtn.value.split('fakepath\\')[1];
  const data = {
    name: `${p_name.value}`,
    patientID: `${p_id.value}`,
    gender: `${sex.value}`,
    age: `${p_age.value}`,
    bloodGroup: `${p_blood.value}`,
    password: 'test1234',
    active: true,
    role: 'patient',
    mobile_no: `${p_phone.value}`,
    bed_no: `${p_bed.value}`,
    admitDate: `${p_date.value}`,
    disease: `${disease.value}`,
    health: {
      heartBeat: `${heartBeat.value}`,
      SPO2: `${SPO2.value}`,
      BP: `${BP.value}`,
      bodyTemp: `${bodyTemp.value}`,
    },
    medicines: medicines,
    treatments: `${treatment.value}`,
    report: `${reportName}`,
  };
  console.log(data);
  sendJSON(url, data);
});

const url = 'http://127.0.0.1:8000/api/v1/patients';
const sendJSON = async function (url, data) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await Promise.race([fetchPro]);
    const jsonData = await res.json();
    console.log(jsonData);
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};
