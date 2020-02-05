import Task from "./components/Task/index.js";
let element = undefined;
let taskInput = undefined;
let input;

function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    let addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
    
}

function onClick() {
    console.log("clicked!");

    let newTask = new Task({content:input.value, done:false});
    if(input.value !== ""){
        element.appendChild(newTask.render());
    }
    else{
        console.log("Please enter a value.");
    }
}


window.addEventListener("DOMContentLoaded", runOnLoad);