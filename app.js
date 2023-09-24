
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

function addTask(){
    if(inputBox.value ===''){
        alert("musis mit neco napsaneho!!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}