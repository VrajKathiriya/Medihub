const data= {
    "name": "nilesh korat",
    "patientID": "1212",
    "gender": "Male",
    "age": 22,
    "bloodGroup": "B+ve",
    "password":"test1234",
    "mobile_no": "0956565656",
    "bed_no":222,
    "admitDate": "12-12-2002",
    "disease": "fever",
    "health": {
        "heartBeat": "12",
        "SPO2": "98",
        "BP": "111/33",
        "bodyTemp": "60"
    },
    "medicines": [
        {
            "time": "10:30",
            "task": "Paracetamol",
            "isDone":true
        },
        {
            "time": "10:00",
            "task": "DOLO",
            "isDone":false
        }
    ],
    "treatments": ["Yoga", "physio Therapy"]
}

const generateHTML =(data)=>
{
    return `
    <div class="details--container">
        <div class="details">
            <div class="personalDetail">
                <img src="cheetah.jfif" alt="">
                <table class="details_table">
                    <tr>
                        <td class="detail--label">name</td>
                        <td class="detail--data">${data.name}</td>
                    </tr>
                    <tr>
                        <td class="detail--label">patient ID</td>
                        <td class="detail--data">${data.patientID}</td>
                    </tr>
                    <tr>
                        <td class="detail--label">age</td>
                        <td class="detail--data">${data.age}</td>
                    </tr>
                    <tr>
                        <td class="detail--label">Gender</td>
                        <td class="detail--data">${data.gender}</td>
                    </tr>
                    <tr>
                        <td class="detail--label">admit date</td>
                        <td class="detail--data">${data.admitDate}</td>
                    </tr>
                    <tr>
                        <td class="detail--label">bed Number</td>
                        <td class="detail--data">${data.bed_no}</td>
                    </tr>
                    <tr>
                        <td class="detail--label">mobile</td>
                        <td class="detail--data">${data.mobile_no}</td>
                    </tr>
                    <tr>
                        <td class="detail--label">blood Group</td>
                        <td class="detail--data">${data.bloodGroup}</td>
                    </tr>
                </table>
            </div>
            <div class="medicalDetail">
                <div class="disease">
                    <div class="label">DISEASE</div>
                    <span>${data.disease}</span>
                </div>
                <div class="health">
                    <div class="label">HEALTH</div>
                    <table class="health--table">
                        <tr class="health--odd">
                            <td>Heart beat</td>
                            <td>${data.health.heartBeat}</td>
                        </tr>
                        <tr class="health--even">
                            <td>SP O2</td>
                            <td>${data.health.SPO2}</td>
                        </tr>
                        <tr class="health--odd">
                            <td>BP</td>
                            <td>${data.health.BP}</td>
                        </tr>
                        <tr class="health--even">
                            <td>body Temp</td>
                            <td>${data.health.bodyTemp}</td>
                        </tr>
                    </table>
                </div>
                <div class="medicine">
                    <div class="label">MEDICINE</div>
                    <div class="table--container">
                    <table class="medicine--table">

                        ${data.medicines.map((medicine,index)=>{
                            return `
                            <tr class=${index%2==0  ? "medicine--odd" :""}>
                                <td class="medicine--time">${medicine.time}</td>
                                <td class="medicine--task">${medicine.task}</td>
                                <td class="medicine--isDone">
                                    <input type="checkbox" name="isDone" id="isDone" ${medicine.isDone ? "checked" :""} >
                                </td>
                            </tr>
                            `
                        }).join('')}
                    </table>
                    </div>
                </div>
                <div class="treatments">
                    <div class="label">TREATMENTS</div>
                    <table class="treatments--table">
                        ${data.treatments.map((treatment,index)=>{
                            return `
                            <td>${treatment}</td>
                            `
                        }).join('')}
                    </table>
                </div>
            </div>
        </div>
    </div>
    `
}

const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend',generateHTML(data));

const darshan = "darshan jagani";