function ifElse(){
    let marks1 = Number(prompt("How many marks did you get? "));
    if(marks1>=80){
        alert("You are Grade-A");
    }else if(marks1>60 && marks1<80){
        alert("You are Grade-A");
    }else{
        alert("You are Grade-D");
    }
}

function TernaryOperator(){
    let age =Number(prompt("Enter Your Age: "));
    age >= 18 ? alert("You are an adult"):alert("You are Minor");
} 

function TernaryOperatorPart2(){
    let marks = Number(prompt("Enter Your Marks: "));

    let  grade = marks>80 ? "Grade-A":marks>60 ? "Grade-B":marks>50 ? "Grade-C":marks>30 ? "Grade-D":"Fail";
    alert(grade);
}