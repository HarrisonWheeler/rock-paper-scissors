//computer choices in an array
let gameChoice = [
  "Rock", "Paper", "Scissors"
]

// function for play - takes in a random computer choice and compares it to the player choice. if computer choice value is higher than player choice value, return "Loss" - if player choice value is higher, return "Win"
// whatever button player uses, compare to computer choice from array.

function play(playerChoice) {
  let cChoice = computerChoice()
  // console.log(cChoice)
  if (playerChoice == cChoice) {
    document.getElementById("result").innerHTML = "Tie!"
  } else if (playerChoice == "Rock") {
    if (cChoice == "Paper") {
      document.getElementById("result").innerHTML = "You Lose!"
    } else {
      document.getElementById("result").innerHTML = "You Win!"
    }
  } if (playerChoice == cChoice) {
    document.getElementById("result").innerHTML = "Tie!"
  } else if (playerChoice == "Paper") {
    if (cChoice == "Scissors") {
      document.getElementById("result").innerHTML = "You Lose!"
    } else {
      document.getElementById("result").innerHTML = "You Win!"
    }
  } if (playerChoice == cChoice) {
    document.getElementById("result").innerHTML = "Tie!"
  } else if (playerChoice == "Scissors") {
    if (cChoice == "Rock") {
      document.getElementById("result").innerHTML = "You Lose!"
    } else {
      document.getElementById("result").innerHTML = "You Win!"
    }
  }
}

//function to have computer randomly pick value from gameChoice array.

function computerChoice() {
  let gameChoiceIndex = Math.floor(Math.random() * gameChoice.length)
  let choice = gameChoice[gameChoiceIndex]
  return choice
}

// function for drawing what choice computer used to A.I. draw to screen.

// function takes in random computer generated choice on button click and displays at same time that player win/loss info is displayed.

function drawComputerChoice() {
  play()
  let compChoice = computerChoice()
  console.log(compChoice)
}






// function for win result - takes in win or loss from play function and prints it to the result portion of the html page - see javascript alert on google for help







