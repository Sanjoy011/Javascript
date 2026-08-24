function fruits(items){  //Parameter
    console.log(items);
}

fruits("Orange"); //Argument


function fruit(...items){  //Parameter [Spread Operator]
    console.log(items);
}

fruit("Orange","banana","watermelon","mango"); //Argument


console.log(typeof fruits);
console.log(fruits instanceof Object) //True
console.log(fruits instanceof Array)  //False

//Spread Operator

let users = ["sanjoy","sourav","Krishna"];
let newUsers = [...users];
console.log(newUsers);

let first = ["Sanjoy", "Ram"];
let second = ["Krishna", "Sam"];

let allUsers = [...first, ...second];

console.log(allUsers);