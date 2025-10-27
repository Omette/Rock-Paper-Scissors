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

function win(){
    humanScore++;
    console.log(`You won! ${userChoice} beats ${computerChoice}`);
}

function lose(){
    computerScore++;
    console.log(`You lost! ${computerChoice} beats ${userChoice}`);
}

function tie(){
    console.log(`You tied!`);
}

function getUserChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}


function playRound(){
   userChoice = getUserChoice();
   computerChoice = getComputerChoice();

    switch(userChoice){
        case "rock":
            switch(computerChoice){
                case "rock":
                    tie();
                    break;
                case "paper":
                    lose();
                    break;
                case "scissors":
                    win();
                    break;
            }
            return;
        case "paper":
            switch(computerChoice){
                case "rock":
                    win();
                    break;
                case "paper":
                    tie();
                    break;
                case "scissors":
                    lose();
                    break;
            }
            return;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    lose();
                    break;
                case "paper":
                    win();
                    break;
                case "scissors":
                    tie();
                    break;
            }
            return;
    }
}


//MAIN

let humanScore = 0;
let computerScore = 0;

playRound();