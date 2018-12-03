var comp = ["rock", "paper", "scissors"]
var playr = ["rock", "paper", "scissors"]
// var resultrs = ["Computer chose Paper, You win!", "Tie!", "You lose!"]
// var resultps = ["You win!", "Tie!", "You lose!"]
// var resultss = ["You win!", "Tie!", "You lose!"]
var result = ["You win!", "Tie!", "You lose!"]


function rs() {

  var randp = comp[Math.floor(Math.random(1) * comp.length)]
  console.log(randp);

  if (randp === "rock") {
    document.getElementById("winorlose").innerHTML = result[1] + randp;
  }
 
  if (randp === "paper") {
    document.getElementById("winorlose").innerHTML = result[2];
  }
  
  if (randp === "scissors") {
    document.getElementById("winorlose").innerHTML = result[0];
  }
}

function ps() {

  var randp = comp[Math.floor(Math.random(1) * comp.length)]
  console.log(randp);
  
  if (randp === "rock") {
    document.getElementById("winorlose").innerHTML = result[1];
  }
 
  if (randp === "paper") {
    document.getElementById("winorlose").innerHTML = result[2];
  }
  
  if (randp === "scissors") {
    document.getElementById("winorlose").innerHTML = result[0];
  }
}

function ss() {

  var randp = comp[Math.floor(Math.random(1) * comp.length)]
  console.log(randp);
  
  if (randp === "rock") {
    document.getElementById("winorlose").innerHTML = result[1];
  }
 
  if (randp === "paper") {
    document.getElementById("winorlose").innerHTML = result[2];
  }
  
  if (randp === "scissors") {
    document.getElementById("winorlose").innerHTML = result[0];
  }
}