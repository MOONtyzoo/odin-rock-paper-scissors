let humanScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rockButton")
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()))
let paperButton = document.querySelector("#paperButton")
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()))
let scissorsButton = document.querySelector("#scissorsButton")
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()))

let resultsDisplay = document.querySelector("#resultsDisplay")
function displayPara(text) {
    let para = document.createElement("p")
    para.textContent = text
    resultsDisplay.appendChild(para)
}

function playGame(totalRounds) {
    for (let round = 1; round <= totalRounds; round++) {
        displayPara("---------- ROUND " + round + " ----------")
        displayPara("Your score: " + humanScore)
        displayPara("Opponent's score: " + computerScore)
        playRound(getHumanChoice(), getComputerChoice())
    }
    
    displayPara("---------- FINAL RESULTS ----------")
    displayPara("Your score: " + humanScore)
    displayPara("Opponent's score: " + computerScore)
    if (humanScore > computerScore) {
        displayPara("YOU WON!")
    } else if (humanScore < computerScore) {
        displayPara("YOU LOSE!")
    } else {
        displayPara("IT'S A DRAW!")
    }
}

function playRound(humanChoice, computerChoice) {
    let result = compareMoves(humanChoice, computerChoice)
    if (result == -1) {
        displayPara(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (result == 0) {
        displayPara(`It's a draw! Both players chose ${humanChoice}.`);
    } else if (result == 1) {
        displayPara(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
}

// returns -1 on loss, 0 on draw, and 1 on a win
function compareMoves(move1, move2) {
    if (move1 == "rock") {
        if (move2 == "rock") {
            return 0;
        } else if (move2 == "paper") {
            return -1;
        } else if (move2 == "scissors") {
            return 1;
        }
    } else if (move1 == "paper") {
        if (move2 == "rock") {
            return 1;
        } else if (move2 == "paper") {
            return 0;
        } else if (move2 == "scissors") {
            return -1;
        }
    } else if (move1 == "scissors") {
        if (move2 == "rock") {
            return -1;
        } else if (move2 == "paper") {
            return 1;
        } else if (move2 == "scissors") {
            return 0;
        }
    }
}

function getHumanChoice() {
    let input = prompt("Choose rock, paper, or scissors?: ").toLowerCase()
    if (input == "rock" || input == "paper" || input == "scissors") {
        return input;
    }
    // User has entered an incorrect input
    while (true){
        input = prompt("Incorrect input. Please choose rock, paper, or scissors").toLowerCase();
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
        }
    }
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3)
    let decision = ""
    switch (randomChoice) {
        case 0: decision = "rock"; break;
        case 1: decision = "paper"; break;
        case 2: decision = "scissors"; break;
        default: "rock"
    }
    return decision
}

function testComputerChoice() {
    let rocks = 0;
    let papers = 0;
    let scissors = 0;
    for (let i = 1; i <= 3000; i++) {
        let computerChoice = getComputerChoice();
        if (computerChoice == "rock") rocks++;
        if (computerChoice == "paper") papers++;
        if (computerChoice == "scissors") scissors++;
    }
    console.log(`Rocks: ${rocks}\nPapers: ${papers}\nScissors: ${scissors}`)
}