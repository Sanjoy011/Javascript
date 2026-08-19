let users = ["Sanjoy","Subhas","Krishna","Sourav"]
console.log(users);
console.log(users[2]);
console.log(users[0]);

let userData = [
    {name:"Sanjoy",age:24,address:"Haldia;Chaitanyapur"},
    {name:"Subhas",age:64,address:"Haldia;Chaitanyapur"},
    {name:"Krishna",age:54,address:"Haldia;Chaitanyapur"},
    {name:"Sourav",age:27,address:"Haldia;Chaitanyapur"}
]

console.log(userData);

// all data show
for(let j=0; j < userData.length; j++){
    console.log(userData[j]);
}

//You want to print only "krishna"
for(let i=0; i< userData.length; i++){
    if(userData[i].name ==="Krishna"){
        console.log(userData[i]);
    } 
}