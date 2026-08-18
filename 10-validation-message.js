function showMessage(myName){
    console.log(myName.target.value);
    let myNameEl = myName.target.value
    let myNamevalue = document.getElementById("name-message");
    myNamevalue.style.display="block";

    if(myNameEl.length < 3){
        myNamevalue.innerText="Min valid length is 3";

    }else if(myNameEl.length >14){
        myNamevalue.innerText="Max valid length is 14";

    }else{
        myNamevalue.textContent="";
        myNamevalue.style.display="none";

    }
}

function showEmailMessage(myEmailMessage){
    console.log(myEmailMessage.target.value)
    let myEmail = myEmailMessage.target.value;
    let myEmailEle = document.getElementById("name-email");
    myEmailEle.style.display="block";

    if (!myEmail.includes("@")) {
        myEmailEle.innerText = "Please enter a valid email";

    } else if (!myEmail.includes(".")) {
        myEmailEle.innerText = "Please enter a valid email";

    } else {
        myEmailEle.innerText = "";
        myEmailEle.style.display = "none";
    }
}


