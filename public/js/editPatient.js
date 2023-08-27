const saveButton = document.querySelector('.back');

const heartBeat = document.getElementById('heartBeat');
const bodyTemp = document.getElementById('bodyTemp');
const BP = document.getElementById('BP');
const SPO2 = document.getElementById('SPO2');
const medicineTime = document.getElementsByClassName('medicine--time');
const medicineTask = document.getElementsByClassName('medicine--task');
const isDone = document.getElementsByClassName('isDone');
const patientID = document.getElementById('patientID').textContent;

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
    console.log(jsonData);
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target.closest('.back');
  const id = target.getAttribute('data-id');
  const medicines = [];
  for (let i = 0; i < medicineTask.length; i++) {
    const temp = {
      time: medicineTime[i].textContent,
      task: medicineTask[i].textContent,
      isDone: isDone[i].checked,
    };
    console.log(temp);
    medicines.push(temp);
  }
  const data = {
    health: {
      heartBeat: `${heartBeat.value}`,
      SPO2: `${SPO2.value}`,
      BP: `${BP.value}`,
      bodyTemp: `${bodyTemp.value}`,
    },
    medicines: medicines,
  };
  console.log(data);
  updateJSON(`http://127.0.0.1:8000/api/v1/patients/${id}`, data);
});
