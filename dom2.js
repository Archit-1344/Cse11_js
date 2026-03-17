function oc(){
    console.log("clicked");
}
function omo(){
       console.log("over");
}
function omou(){
       console.log("out");
}
function omd(){
       console.log("down");
}
function omu(){
       console.log("up");
}
function omm(){
       console.log("move");
}
var text = '{ "employees": [' +
    '{ "firstName":"John","lastName":"Doe" },' +
    '{ "firstName":"Jane","lastName":"Smith" },' +
    '{ "firstName":"Alice","lastName":"Johnson" }' +
'] }';

var obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
    obj.employees[0].firstName + " " + obj.employees[0].lastName;

document.getElementById("demo").innerHTML += "<br>" +
    obj.employees[1].firstName + " " + obj.employees[1].lastName;

document.getElementById("demo").innerHTML += "<br>" +
    obj.employees[2].firstName + " " + obj.employees[2].lastName;