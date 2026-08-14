//Useing Var

var username="Sanjoy var"
console.log(username);

var username="sanjoy var"
console.log(username);

if(true){
    var username="sanjoy var"
}
console.log(username)



//Useing let

let name1 ="Sanjoy Details";
// alert(name1);

let name="Sanjoy";
let age=24;
let isOnline=false;

console.log(name);
console.log(age);
console.log(isOnline);



let user ="Sourav";
user = 30;
user=false;

console.log(typeof user);
// console.log(typeof user);

//Useing const

const userName ="Sourav";  //Uncaught TypeError: Assignment to constant variable.
userName = 30;
userName=false;

console.log(typeof userName);