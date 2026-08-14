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