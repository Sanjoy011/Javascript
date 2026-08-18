document.getElementById("name").style.color="orange"


//This function using Update style
function stylehandle(){
    let inputElement = document.getElementById("name").style;
    inputElement.color="white";
    inputElement.height="100px";
    inputElement.width="350px";
    inputElement.borderColor="Green";

}   

// This function using range width style
function handleWidth(myEvent){
    console.log(myEvent.target.value);
    let eventWidth = myEvent.target.value +"px";
    document.getElementById("name").style.width = eventWidth;
}


//This function using range hight style
function handleHight(myEvent){
    console.log(myEvent.target.value);
    let eventHight = myEvent.target.value + "px";
    document.getElementById("name").style.height = eventHight;
}





