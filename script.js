function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        console.log("rock");
    } else if (computerChoice === 1) {
        console.log("paper");
    } else {
        console.log("scissors");
    }

}

function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors:");
    return playerChoice;
}

let humanScore = 0;
let computerScore = 0;

const compterChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function playRound(playerChoice, computerChoice) {
    if (playerChoice === compterChoice) {
        return "It's a tie!"
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors."
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock."
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper."
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}.`
    }
}