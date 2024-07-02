console.log("External .js file connected");

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

console.log(getHumanChoice())