var comp = ["rock", "paper", "scissors"]
var playr = ["rock", "paper", "scissors"]
var result = ["win", "tie", "lose"]


function rs() {

  var randp = comp[Math.floor(Math.random(1) * comp.length)]
  console.log(randp);

  if (randp === "rock") {
    alert ("Tie!");
  }
 
  if (randp === "paper") {
    alert ("You Lose!");
  }
  
  if (randp === "scissors") {
    alert ("You Win!");
  }
}

function ps() {

  var randp = comp[Math.floor(Math.random(1) * comp.length)]
  console.log(randp);
  
  if (randp === "rock") {
    alert ("Tie!");
  }
 
  if (randp === "paper") {
    alert ("You Lose!");
  }
  
  if (randp === "scissors") {
    alert ("You Win!");
  }
}

function ss() {

  var randp = comp[Math.floor(Math.random(1) * comp.length)]
  console.log(randp);
  
  if (randp === "rock") {
    alert ("Tie!");
  }
 
  if (randp === "paper") {
    alert ("You Lose!");
  }
  
  if (randp === "scissors") {
    alert ("You Win!");
  }
}