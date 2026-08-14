function logicalAnd() {
    let age = Number(prompt("Enter your age:"));
    let hasID = prompt("Do you have ID? (yes/no)");
    
    if(age >= 18 && hasID === "yes"){
        alert("You are right to vote");
    }else{
        alert("You are under 18");
    }
       
}

function logicalOr() {
    let age = Number(prompt("Enter your age:"));
    let hasID = prompt("Do you have ID? (yes/no)");

    if(age >= 18 || hasID === "yes"){
        alert("You are right to vote");
    }else{
        alert("You are under 18");
    }
}

function logicalNot() {
    let value = prompt("Enter true or false:");

    let result = !(value === "true");

    alert("NOT Result: " + result);
}