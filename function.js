function myFunction(){
    alert("Hello World" );
}
function say(name,age){
    document.write(name+" is "+age+" years old");
}
//arrow functions theory
function add(x,y){
    console.log(x+y);
}
add(10,20);//simple functin theory 

var add2= (x,y) =>{
    console.log(x+y);
}
add2(102 ,106);//arrow function 

var add3 = (a,b) =>console.log(a+b);
add3(102,106);
