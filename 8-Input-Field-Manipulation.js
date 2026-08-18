function getInputFieldValue(){
    let inputValue = document.getElementById('name').value;
    document.getElementById('heading').innerText=inputValue;
}
function setInputFieldValue(){
    let message = "Code step by step";
    document.getElementById('name').value=message;
}
function removeInputFieldValue(){
    document.getElementById('name').value="";
    document.getElementById('others').value="";
    document.getElementById('heading').innerText="";
}
function copyInputFieldValue(){
    let othersValue =document.getElementById('others').value
    document.getElementById('name').value=othersValue;
}






