//First method
const add = ()=>{
    console.log(2+2);
}

add();

//Second Method
const number = ()=>{
    return 20+20;
}
console.log(number());

//Third method
const addNumber = ()=> 40+20;

console.log(addNumber());

//Fourth method in parametter
const addNumberPara = (a,b)=>{
    return a + b;
}
console.log(addNumberPara(200,50));

//Fifth method
const withOutPara = (x,y)=> x + y;
console.log(withOutPara(30,20));

//Single parameter
const squre = num => num * num;
console.log(squre(20));