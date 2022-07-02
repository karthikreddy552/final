// All the Code for the Rejected page goes here
var rejectedArray = JSON.parse(localStorage.getItem("adrejected"));

rejectedArray.map(function(elem) {
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

    row.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(row)
})