let userData = {};


function addObjectMethod(){
    let lisElement = document.getElementById("list");
    lisElement.innerHTML="";

    for(let key in userData){
        lisElement.innerHTML += "<li>" + key + " : " + userData[key] + "</li>";
        
    }
}
function addDisplayMethod(){
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
    userData[key]=value;  //userData[name] = Sanjoy

    addObjectMethod();

    document.getElementById("key").value = "";
    document.getElementById("value").value = "";

    console.log(key + " is " +userData[key]);
    
    
}
addObjectMethod(); //in the future, if there is already data in userData.