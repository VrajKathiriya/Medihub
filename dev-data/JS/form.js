const createHTML=(data)=>
{
    return `
    <tr>
        <td class="medicine--time">
        <input type="time" name="medicine-data" id="timing_field" placeholder="enter timing here!">
        </td>
        <td class="medicine--task">
        <input type="text" name="Medicine" id="" placeholder="Enter task Here">
        </td>
        <td class="medicine--isDone">
            <input type="checkbox" name="isDone" id="isDone"} >
        </td>
    </tr>
    `
}

const addMedicine = document.querySelector('.medicine--add');
const medicineTable = document.querySelector('.medicine--table');
addMedicine.addEventListener('click',()=>{
    medicineTable.insertAdjacentHTML('beforeend',createHTML());
});


const submit = document.getElementById('submit')
const p_name = document.getElementById('p_name');
const p_id = document.getElementById('p_id');
const p_age = document.getElementById('p_age');
const sex = document.getElementById('sex');
const p_date = document.getElementById('p_date');
const p_bed = document.getElementById('p_bed');
const p_phone = document.getElementById('p_phone');
const p_blood = document.getElementById('p_blood');
submit.addEventListener('click', () => {



    const data = {
        "name": `${p_name.value}`,
        "patientID": `${p_id.value}`,
        "gender": `${sex.value}`,
        "age": `${p_age.value}`,
        "bloodGroup": `${p_blood.value}`,
        "password": "test1234",
        "mobile_no": `${p_phone.value}`,
        "bed_no": `${p_bed.value}`,
        "admitDate": `${p_date.value}`,
        "disease": "fever",
        "health": {
            "heartBeat": "12",
            "SPO2": "98",
            "BP": "111/33",
            "bodyTemp": "60"
        },
        "medicines": [
            {
                "name": "Paracetamol",
                "lastTaken": "10:30am"
            },
            {
                "name": "DOLO 650",
                "lastTaken": "10:40am"
            }
        ],
        "treatments": ["Yoga", "physio Therapy"]
    }
    console.log(data)


    Patients.push(data);
    console.log(Patients[0]);
    window.location.href = "http://127.0.0.1:60968/patients.htm";
})


console.log(darshan);