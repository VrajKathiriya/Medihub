// let p_id = document.getElementById('p_id');
// let thead = document.getElementById('thead');
// let p_allocateroom = document.getElementById('p_allocateroom');
// let disease = document.getElementById('disease');

// // let patients = [
// //     {
// //         "id": 1,
// //         "name": "nilesh korat",
// //         "Age": 22,
// //         "Sex": "Male",
// //         "Bed_Number": 1,
// //         "Mobile": 6354382256,
// //         "disease": "maleriya"
// //     },
// //     {
// //         "id": 2,
// //         "name": "darshan jagani",
// //         "Age": 22,
// //         "Sex": "Male",
// //         "Bed_Number": 2,
// //         "Mobile": 6354382256,
// //         "disease": "taifod"
// //     },
// //     {
// //         "id": 3,
// //         "name": "raj khunt",
// //         "Age": 23,
// //         "Sex": "Male",
// //         "Bed_Number": 3,
// //         "Mobile": 6354382256,
// //         "disease": "kabjiyat"
// //     },
// //     {
// //         "id": 4,
// //         "name": "vraj kathiriya",
// //         "Age": 21,
// //         "Sex": "Male",
// //         "Bed_Number": 4,
// //         "Mobile": 6354382256,
// //         "disease": "jada"
// //     },
// //     {
// //         "id": 5,
// //         "name": "yash limbani",
// //         "Age": 22,
// //         "Sex": "Male",
// //         "Bed_Number": 5,
// //         "Mobile": 6354382256,
// //         "disease": "lakva"
// //     },
// //     {
// //         "id": 6,
// //         "name": "smit suriya",
// //         "Age": 22,
// //         "Sex": "Male",
// //         "Bed_Number": 6,
// //         "Mobile": 6354382256,
// //         "disease": "colera"
// //     },
// //     {
// //         "id": 7,
// //         "name": "Amrut moghriya",
// //         "Age": 23,
// //         "Sex": "Male",
// //         "Bed_Number": 7,
// //         "Mobile": 6354382256,
// //         "disease": "pimple"
// //     },
// //     {
// //         "id": 8,
// //         "name": "jigar virani",
// //         "Age": 23,
// //         "Sex": "Male",
// //         "Bed_Number": 8,
// //         "Mobile": 6354382256,
// //         "disease": "corona"
// //     },
// // ]








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




let p_id = document.getElementById('p_id');
let thead = document.getElementById('thead');
let p_allocateroom = document.getElementById('p_allocateroom');
let disease = document.getElementById('disease');

let patients = [
    {
        "id": 1,
        "name": "nilesh korat",
        "Age": 22,
        "Sex": "Male",
        "Bed_Number": 1,
        "Mobile": 6354382256,
        "disease": "maleriya"
    },
    {
        "id": 2,
        "name": "darshan jagani",
        "Age": 22,
        "Sex": "Male",
        "Bed_Number": 2,
        "Mobile": 6354382256,
        "disease": "taifod"
    },
    {
        "id": 3,
        "name": "raj khunt",
        "Age": 23,
        "Sex": "Male",
        "Bed_Number": 3,
        "Mobile": 6354382256,
        "disease": "kabjiyat"
    },
    {
        "id": 4,
        "name": "vraj kathiriya",
        "Age": 21,
        "Sex": "Male",
        "Bed_Number": 4,
        "Mobile": 6354382256,
        "disease": "jada"
    },
    {
        "id": 5,
        "name": "yash limbani",
        "Age": 22,
        "Sex": "Male",
        "Bed_Number": 5,
        "Mobile": 6354382256,
        "disease": "lakva"
    },
    {
        "id": 6,
        "name": "smit suriya",
        "Age": 22,
        "Sex": "Male",
        "Bed_Number": 6,
        "Mobile": 6354382256,
        "disease": "colera"
    },
    {
        "id": 7,
        "name": "Amrut moghriya",
        "Age": 23,
        "Sex": "Male",
        "Bed_Number": 7,
        "Mobile": 6354382256,
        "disease": "pimple"
    },
    {
        "id": 8,
        "name": "jigar virani",
        "Age": 23,
        "Sex": "Male",
        "Bed_Number": 8,
        "Mobile": 6354382256,
        "disease": "corona"
    },
]




patients.forEach(myFunction);


function myFunction(item) {

    thead.innerHTML +=
        `    
    <tr class="tbody">
        <td id="p_id">${item.id}</td>
        <td id="p_name">${item.name}</td>
        <td id="p_Age">${item.Age}</td>
        <td id="p_Sex">${item.Sex}</td>
        <td id="p_bednumber">${item.Bed_Number}</td>
        <td id="p_Mobile">${item.Mobile}</td>
        <td id="p_disease">${item.disease}</td>
        <td id="p_moreinfo"><button class="viewmore">View More</button></td>
    </tr>
`
}