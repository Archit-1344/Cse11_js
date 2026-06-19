function calculateResult() {
    const n = document.getElementById("subjects").value;
    let total = 0 ;
    for(let i = 0 ; i < n ; i++){
        let marks = prompt(`Enter marks for subject ${i+1}`);
        total += parseInt(marks);
    }
    let average = total / n;
    let grade;
    if(average >90){
        grade = "A+";
    } else if(average > 80){
        grade = "A";
    } else if(average > 70){
        grade = "B";
    } else if(average > 50){
        grade = "C";
    }
    else{
        grade = "D";
    }
    let r ;
    if(average>40){
        r = "Pass";
    }
    else{   
        r = "Fail";
    }
    let result = document.getElementById("result");
    result.innerHTML = `Total Marks: ${total} <br> Average Marks: ${average} <br> Grade: ${grade} <br> Result: ${r}`;
}