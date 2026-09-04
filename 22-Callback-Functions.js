function greet(name,callback){
    console.log("Hello! " + name);
    callback();
}

function sayHi(){
    console.log("Welcome!");
}

greet("Sanjoy",sayHi);