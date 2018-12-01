var comp = ["rock", "paper", "scissors"]
var playr = ["rock", "paper", "scissors"]



function rs() {

  var randp = playr[Math.floor(Math.random(1) * playr.length)]
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

  var randp = playr[Math.floor(Math.random(1) * playr.length)]
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

  var randp = playr[Math.floor(Math.random(1) * playr.length)]
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