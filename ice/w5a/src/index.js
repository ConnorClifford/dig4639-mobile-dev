let element = undefined;
let taskInput = undefined;

function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);

    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
    
}

function onClick() {
    console.log("clicked!");

    let newTask = document.createElement("div");
    let input = document.createElement("input");
    input.type ="checkbox";
    let span = document.createElement("span");
    span.innerHTML = taskInput.value;
    newTask.appendChild(input);
    newTask.appendChild(span);
    
    function onChange(){
        console.log(span.innerHTML);
    }
    input.addEventListener("change", onChange);
}


window.addEventListener("DOMContentLoaded", runOnLoad);