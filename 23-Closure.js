function outer() {
    let x = 10;

    return function(){
        console.log(x)
    };
}

const fn = outer();
fn();


function createMessage(){         //  Create a function called createMessage
    let message = "Hello!";

    return function(){            //  Return another function
        console.log(message);     //  This function uses message   message comes from the outer function
    };
}

const box = createMessage();       // Call createMessage()  and The returned function is stored in box So, box is now a function

box();                             // Call the function stored in box.


function countApp(){
    let data = Number(prompt("Enater the number: "));

    return{
        increment:function(){
            console.log(++data);
        },
        decrement:function(){
            console.log(--data);
        }
    }
}

let counter = countApp();
// counter.increment();
// counter.decrement();