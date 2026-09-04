let nameFunction = function(){
    console.log("Sanjoy");
}

nameFunction();

let nameFunctionAll = function(...items){
    console.log(...items);
}
nameFunctionAll("sanjoy","sourav","Subhas");




// Real-world example: button click
// button.addEventListener("click", function() {
//     console.log("Product added to cart!");
// });


const onTime = function(){
    console.log("On time called");
}

setTimeout(onTime,2000);