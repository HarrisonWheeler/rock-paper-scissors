//computer choices in an array
let gameChoice = [
  "Rock", "Paper", "Scissors"
]

// function for play - takes in a random computer choice and compares it to the player choice. if computer choice value is higher than player choice value, return "Loss" - if player choice value is higher, return "Win"
// whatever button player uses, compare to computer choice from array.

function play(playerChoice) {
  let cChoice = computerChoice()
  console.log(cChoice)
  if (playerChoice == cChoice) {
    document.getElementById("result").innerHTML = "tie"
  } else if (playerChoice == "Rock") {
    if (cChoice == "Paper") {
      document.getElementById("result").innerHTML = "loss"
    } else {
      document.getElementById("result").innerHTML = "win"
    }
  } if (playerChoice == cChoice) {
    document.getElementById("result").innerHTML = "tie"
  } else if (playerChoice == "Paper") {
    if (cChoice == "Scissors") {
      document.getElementById("result").innerHTML = "loss"
    } else {
      document.getElementById("result").innerHTML = "win"
    }
  } if (playerChoice == cChoice) {
    document.getElementById("result").innerHTML = "tie"
  } else if (playerChoice == "Scissors") {
    if (cChoice == "Rock") {
      document.getElementById("result").innerHTML = "loss"
    } else {
      document.getElementById("result").innerHTML = "win"
    }
  }
}

//function to have computer randomly pick value from gameChoice array.

function computerChoice() {
  let gameChoiceIndex = Math.floor(Math.random() * gameChoice.length)
  let choice = gameChoice[gameChoiceIndex]
  return choice
}

// function for drawing what choice computer used to A.I. Choice on page

function drawComputerChoice() {
  computerChoice()

}






// function for win result - takes in win or loss from play function and prints it to the result portion of the html page - see javascript alert on google for help







