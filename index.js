// All the JS Code for the Add Students Page Goes Here
var studentArray = JSON.parse(localStorage.getItem("admission")) || [];

document.querySelector("#form").addEventListener("submit", submitFun);

function submitFun(event) {
    event.preventDefault();
    console.log(1)
    var stuobj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        gender: document.querySelector("#gender").value,
        course: document.querySelector("#course").value,
    };

    studentArray.push(stuobj);
    localStorage.setItem("admission", JSON.stringify(studentArray));

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#gender").value = "Male";
    document.querySelector("#course").value = "";
}