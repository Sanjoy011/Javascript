function forloop(){
    let number = Number(prompt("Enter a number: "));

    for(let i =1; i<=10; i++){
        console.log(number + " x " + i + " = " + (number*i))
    }
}

function whileloop(){
    let number = Number(prompt("Enter Your number: "));
    let i=1;
    while(i <= number){ 
        i++;

        let x = 100;
        while(x < 105){
            x++;
            console.log(x);
            
        }
        console.log("_________");
    }
   
}

function doWhileloop(){

    let number = Number(prompt("Enter the number: "));
    let i = 1;
    do{
        
        let x=100;
        do{
            x++;
            console.log(x)
            
        }while(x < 105);

        i++
        console.log("______");
    }while(i<=number);
}

//ForOf Loop 1st normal for loop then for of loop
function forOfLoop(){
    let name = "Sanjoy Bhai how are You?"
    for(let i = 0; i < name.length; i++){
        // console.log(name[i]);
    }
}
forOfLoop();

//Or

function forofLoop1(){
    let number = prompt("Enter here something new : ");
    for(char of number){
        if(char == "j"){
            break;
        }
        // console.log(char);
    }
}
forofLoop1();

//ForIn loop
function forInLoop(){
    let user = {
        name : prompt("Enter your name: "),
        age : Number(prompt("Enter your age: ")),
        email: prompt("Enter your email: ")
    };
    for(let key in user){
        console.log(key + " is :" + user[key]);
        
    }
}
forInLoop();

function Sanjoy(){
    let user = {
        name : prompt("Enter your name: "),
        age : Number(prompt("Enter your age: ")),
        email: prompt("Enter your email: ")
    };
    for(let key in user){
        console.log(key + " is :" + user[key]);
        
    }
}
Sanjoy();


