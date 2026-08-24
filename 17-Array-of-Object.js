let users = [
    {name:"Sanjoy",age:25,address:"Haldia;Chaitanyapur"},
    {name:"Ram",age:35,address:"Tamluk;Hospitalmore"},
    {name:"Sam",age:28,address:"Contai;Rupohi"},

];

// console.log(users);
function userIn(){
    for( let user in users){
        console.log( users[user].name +" : "+ users[user].age +" : "+ users[user].address);  
    }
}
function userOf(){
    for (let index of users){
        console.log(index.name +" , "+ index.age + " , " + index.address)
    }
}


// userIn();
// userOf();


let userData=[];

function addArrayOf(){
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("age").value;
    let usercity = document.getElementById("city").value;

    if(userName && userAge && usercity){
         userData = {
            User_Name:userName,
            User_Age:userAge,
            User_City:usercity,
        };
    }
   
    console.log(userData);
    
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("city").value="";
}

function displayArrayOf(){

    addArrayOf()

    let userList = document.getElementById("list");
    userList.innerHTML="";

    for(let key in userData){
        userList.innerHTML+= "<li>" + key +" : "+ userData[key] + "</li>";
    }

}


