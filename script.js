function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    switch(randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function win(userChoice, computerChoice){
    humanScore++;
    console.log(`You won! ${userChoice} beats ${computerChoice}`);
}

function lose(userChoice, computerChoice){
    computerScore++;
    console.log(`You lost! ${computerChoice} beats ${userChoice}`);
}

function getUserChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}



//MAIN

let humanScore,
    computerScore 
    = 0;

