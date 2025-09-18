function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors:");
    return playerChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors."
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock."
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper."
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}.`
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("The game is a tie overall!");
    }
}