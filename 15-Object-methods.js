let userData = {
    name:"Sanjoy Maity",
    age:25,
    city:"Haldia",

    hello:function(){
        return "Hello " + this.name + " How are You? Currently i live in " + this.city + ","
    },
    greet:function(datapass){
        return "hello " + this.name + " how Are you? this is " + datapass;
    },
    myFunctionPass:function(datapassed){
        return this.hello() + " This is " + datapassed
    }
}

// for (let key in userData){
//     console.log(key + " is: " + userData[key])
// }

console.log(userData.hello());
console.log(userData.greet("Sourav"));
console.log(userData.myFunctionPass("Krishna"));



