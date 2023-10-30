let playerScore = 0
let computerScore = 0



function getComputerChoice() {
  let computerChoice = Math.random();

if (computerChoice < .33) {
  return "Rock";
  
} else if (computerChoice <= .67) {
return "Paper";

} else {
return "Scissors";
}


}

 const playGame = (playerInput) => {
  const computerSelection = getComputerChoice().toLowerCase();
  const playerSelection = playerInput.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "You tied, you both picked rock"
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++
    return "You lose. Paper beats rock"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    return "You win, rock beats scissors"
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "You tied, you both picked paper"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    return "You won, paper beats rock"
  } else if (playerSelection === "paper" && computerSelection ==="scissors") {
    computerScore++
    return "You lost, scissors beats paper"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    return "You won, scissors beats paper"
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "You tied, you both picked scissors"
  } else if (playerSelection === "scissors" && computerSelection ==="rock") {
    computerScore++
    return "You lost, rock beats scissors" 
    
}
 }


function game() {
for (let i = 0; i < 5; i++) {
  const playerInput = prompt('Pick your choice, rock paper or scissors')
  let computerSelection = getComputerChoice();
  console.log(playGame(playerInput));
}
  if (playerScore > computerScore) {
    return "You beat the computer!"
  } else if (playerScore < computerScore) {
    return "The computer beat you!"
  } else {
    return "You tied"
  }

}

console.log(game());