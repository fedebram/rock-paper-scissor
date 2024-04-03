let playerSelection = "";
let playerPoint = 0;
let computerPoint = 0;

let body = document.querySelector("body");
let container = document.querySelector("#container");
let representation = document.querySelector(".representation");
let computer = document.querySelector("#computer");
let player = document.querySelector("#player");

const playerChoice = document.querySelector("#player-choice");
playerChoice.addEventListener("click", function (event) {
    let target = event.target;
    switch (target.id) {
        case "rock":
            playerSelection = "rock";
            player.textContent = "rock";
            break;
        case "paper":
            playerSelection = "paper";
            player.textContent = "paper";
            break;
        case "scissors":
            playerSelection = "scissors";
            player.textContent = "scissors";
            break;
    }
    playRound();
    if (playerPoint === 5 || computerPoint === 5) {
        container.textContent = `${playerPoint} - ${computerPoint}`;
        removeGame();
    }
    else {
        container.textContent = `${playerPoint} - ${computerPoint}`;
    }
});

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);


    if (computerSelection === 0) {
        computerSelection = "rock";
        computer.textContent = "rock";
    }
    else if (computerSelection === 1) {
        computerSelection = "paper";
        computer.textContent = "paper";
    }
    else if (computerSelection === 2) {
        computerSelection = "scissors";
        computer.textContent = "scissors";
    }
    return computerSelection;
}

function playRound() {
    let computerSelection = getComputerChoice();
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")) {
        computerPoint++;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerPoint++;
    }
}

function removeGame() {
    if (playerPoint === 5){
        representation.textContent = "Player win the game!";
    }
    else representation.textContent = "Computer win the game!";
    playerChoice.remove();
    const newDiv = document.createElement("button");
    body.append(newDiv);
    newDiv.textContent = "reload page";
    newDiv.addEventListener("click", () => window.location.reload());
}