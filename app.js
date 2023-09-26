
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let id = 0;

function addTask(){
    if(inputBox.value ===''){
        alert("musis mit neco napsaneho!!")
    }
    else{
        id += 1;
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.id = id;
        let button = document.createElement("button");
        button.innerText = "Remove";
        button.onclick =  function(){ removeTask(li.id)};
        li.addEventListener("click", function(){ toggleTask(li.id); })
        
        li.appendChild(button);
        listContainer.appendChild(li);

    }
    inputBox.value = "";
}

function toggleTask(id) {
    let task = document.getElementById(id);

    if (task.classList.contains("checked")) {
        task.classList.remove("checked");
    } else {
        task.classList.add("checked");
    }


}

function removeTask(id){
    let task = document.getElementById(id);
    listContainer.removeChild(task);
}