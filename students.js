// All the Code for All Students Page Goes Here
var studentData = JSON.parse(localStorage.getItem("admission"));
var admittedArray = JSON.parse(localStorage.getItem("adaccepted")) || [];
var rejectedArray = JSON.parse(localStorage.getItem("adrejected")) || [];

studentData.map(function(elem) {
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.name;

    var td2 = document.createElement("td");
    td2.innerText = elem.email;

    var td3 = document.createElement("td");
    td3.innerText = elem.course;

    var td4 = document.createElement("td");
    td4.innerText = elem.gender;

    var td5 = document.createElement("td");
    td5.innerText = elem.phone;

    var td6 = document.createElement("td");
    td6.innerText = "Admitted";
    td6.style.backgroundColor = "green"
    td6.addEventListener("click", function() {
        admittedFun(elem);
    });

    var td7 = document.createElement("td");
    td7.innerText = "Rejected";
    td7.style.backgroundColor = "red"
    td7.addEventListener("click", function() {
        rejectedFun(elem);
    });

    row.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(row)
});

function admittedFun(elem) {
    admittedArray.push(elem);
    localStorage.setItem("adaccepted", JSON.stringify(admittedArray));
};

function admittedFun(elem) {
    rejectedArray.push(elem);
    localStorage.setItem("adrejected", JSON.stringify(rejectedArray));
};