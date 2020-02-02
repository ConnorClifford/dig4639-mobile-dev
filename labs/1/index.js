const Adder = require("./Adder.js");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let a = getRandomInt(50);
let b = getRandomInt(50);

let adder = new Adder(a,b); 

adder.render();