let userData = [
    {name:"Sanjoy",age:24,address:"Haldia;Chaitanyapur",pin:721645},
    {name:"Subhas",age:64,address:"Contai;Marishda",pin:721675},
    {name:"Krishna",age:54,address:"Tamluk;Bhavanipur",pin:721671},
]
for(key of userData){
    console.log(key);
}

// userData.shift();
// console.log(userData);

// userData.pop();
// console.log(userData);

// userData.splice(0,2);
// console.log(userData);

function deleteItems(mydeleteItems){
    let position = mydeleteItems.target.value;
    if(position > userData.length-1){
        alert("Position not valid!");
    }else{
        userData.splice(position, 1);
        console.log(userData);
    }
}