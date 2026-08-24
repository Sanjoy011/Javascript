let users = [];
console.log(users);

function displayItems(){
    let valueItems = document.getElementById("value").value;
    let positionItems = document.getElementById("position").value;

    if(valueItems && positionItems){
        users.splice(positionItems,0,valueItems);

        document.getElementById("value").value = "";
        document.getElementById("position").value = "";

        console.log(users);
    }

    
    let list = document.getElementById("list");
    list.innerHTML="";
    for(let user of users){
        list.innerHTML+="<li>"+user+"</li>";
    }

}