var num=10;
console.log(num);
console.log(typeof(num));
num=false; 
console.log(num);
console.log(typeof(num));
num="Archit";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined ;
console.log(num);
console.log(typeof(num));
var count ;
document.write("starting loop"+"<br/>");
for(count=0 ; count<10 ; count++){
    document.write("current count"+count);
    document.write("<br/>")
}
document.write("loop stopped");
var count=0;
document.write("Starting loop <br>");
  while(count<5){
   document.write(count+"<br>");
   count++;
            }
            document.write("loop ended <br>");
            document.write("Starting loop <br>");
            for(var i=0;i<5;i++){
                document.write(i+"<br>");
            }
            document.write("loop ended <br>");
var count=0 ;
document.write("starting loop"+"<br>");

while (count<10){
    document.write("current count" + count + "<br>")
    count++ ;
}
document.write("loop stopped"+"<br>");
let age=20;
if(age>18){
    document.write("<b>You are an adult</b>");
}
else{
    document.write("<b>You are a minor</b>")
}
var grade = 'a';
document.write("<br>entering switch block<br>");
switch(grade){
    case'a':document.write("Good Job <br>");
    break;
     
    case'b':document.write("pretty Good<br>");
    break;

    case'c':document.write("passed <br>");
    break;

    case'd':document.write("not so good<br>");
    break;

    case'f':document.write("failed <br>");
    break;

    default:document.write("invalid grade");
    break;
}
function myFunction(){
    alert("Hello World" );
}
function say(name,age){
    document.write(name+"is"+age+"years old");
}