let users = ["Sanjoy","Subhas","Krishna","Sourav"];
console.log(users);

//last element add
users.push("Pratistha");
console.log(users);

//First element add
users.unshift("Anadi");
console.log(users)

//using add splice element
users.splice(1,0,"Purnima","Kalipada");
console.log(users)


function addElement(){
    let valueElements = document.getElementById("value").value;
    let positionElements = document.getElementById("position").value;
    users.splice(positionElements,0,valueElements);
    let finalUserData = users
    console.log(finalUserData);
}