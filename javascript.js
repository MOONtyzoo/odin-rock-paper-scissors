let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = compareMoves(humanChoice, computerChoice)
    if (result == -1) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (result == 0) {
        console.log(`It's a draw! Both players chose ${humanChoice}.`);
    } else if (result == 1) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
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
    let input = prompt("Choose rock, paper, or scissors?: ")
    if (input == "rock" || input == "paper" || input == "scissors") {
        return input;
    }
    // User has entered an incorrect input
    while (true){
        input = prompt("Incorrect input. Please choose rock, paper, or scissors");
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


playRound(getHumanChoice(), getComputerChoice())