let FruitExpression = function fruit(){
    console.log("Apple");
}

FruitExpression()


//Using Parameter
let FruitDetails = function fruit(items,items2){
    console.log(items+","+items2);
}

FruitDetails("Banana","Orange");

let recursionX = function recursuion(val){

    console.log(val);
    if(val > 5){  
        recursuion(val-1)
    }
    
}
recursionX(10);


//For example, imagine an e-commerce website calculating the total price:
let calculateTotal = function(price, quantity) {
    return price * quantity;
};

let total = calculateTotal(500, 3);

console.log(total); // 1500