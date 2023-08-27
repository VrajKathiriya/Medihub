const admin123=
{
    id:"admin123",
    password:"a",
    role:"Admin"
}
const staff1=
{
    id:"staff1",
    password:"staff1",
    role:"Staff"
}

const staff2=
{
    id:"staff2",
    password:"staff2",
    role:"Staff"
}
const staff3=
{   
    id:"staff3",
    password:"staff3",
    role:"Staff"
}

const patient1=
{
    id:"patient1",
    password:"patient1",
    role:"Patient"
}

const accounts=[admin123,staff1,staff2,staff3,patient1];

const loginButton = document.querySelector(".loginBtn");

loginButton.addEventListener("click",function()
{

    const id = document.querySelector("#id").value;
    const pwd= document.querySelector("#pwd").value;
    const role = document.querySelector("#role").value;
    console.log(id,pwd,role);

    let currentAccount = accounts.find((acc) => acc.id === id);
    console.log(currentAccount);

    if(!currentAccount)
    {
        alert("Invalid ID");
        return;
    }

    console.log("account found");

    if(currentAccount.password == pwd)
    {
        console.log("congraculations correct password");
    }
    else
    {
        alert("Invalid Password");
        return;
    }

    if(currentAccount.role == role)
    {
        console.log("7 carror");
    }
    else
    {
        alert("Invalid Role");
        return;
    }


    if(role == "Admin" || role=="Staff")
    {
        window.location.href= "http://127.0.0.1:5500/patients.htm";
        return;
    }

    if(role == "Patient")
    {
        window.location.href= "http://127.0.0.1:5500/details.html";
    };
}); 
