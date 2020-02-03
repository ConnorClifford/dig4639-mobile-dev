import Component from "./Component.js";
import Task from "./Task.js";
function runOnLoad()
{
    
    let element = document.createElement("div");
    element.id = "Test";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
<<<<<<< HEAD:ice/w4/src/index.js
    container.appendChild(element2);
    console.log("Hello world, truly.");
=======
    console.log("Hello World truly");
>>>>>>> 2efa89853dfc53baa85961bd76c13064a188dcb1:ice/w4b/src/index.js
}

window.addEventListener("DOMContentLoaded", runOnLoad);