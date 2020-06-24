//computer choices in an array
let gameChoice = [
  {
    name: "rock",
    value: 1
  },
  {
    name: "paper",
    value: 2
  },
  {
    name: "scissors",
    value: 3
  }
]





// function for play - takes in a random computer choice and compares it to the player choice. if computer choice value is higher than player choice value, return "Loss" - if player choice value is higher, return "Win"
// whatever button player uses, compare to computer choice from array.


function playerChoice() {
  // console.log("player choice");




  // computerChoice()
}


//function to have computer randomly pick value from gameChoice array.

function computerChoice() {
  let gameChoiceIndex = Math.floor(Math.random() * gameChoice.length)
  let choice = gameChoice[gameChoiceIndex]
  return choice
}


// function for draw result - takes in win or loss from play function and prints it to the result portion of the html page - see javascript alert on google for help

function drawResult() {

}






