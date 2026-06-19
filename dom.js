const result = document.getElementById("para");
result.innerHTML = "Hello world";
result.title = "AS" ;
console.log(result);
const r = document.getElementsByClassName("my");
r[0].innerHTML = "Hello1";
r[1].innerHTML = "Hello2";
r[2].innerHTML = "Hello3";
r[3].innerHTML = "Hello4";
console.log(r);
const x = document.getElementsByTagName("p");
x[1].style.color = "blue";
x[2].style.fontWeight = "bold";
console.log(x);
const y = document.querySelectorAll("ul li");
for (let i in y ) {
    y[i].style.backgroundColor = "blue";
    y[i].style.margin = "10px";
    y[i].style.color = "green";
}
console.log(y);