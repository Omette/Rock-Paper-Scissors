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
    let playerScoreElem = document.querySelector("#playerScore");
    playerScoreElem.textContent = humanScore;
    console.log(`You won! ${userChoice} beats ${computerChoice}`);
}

function lose(){
    computerScore++;
    let aiScoreElem = document.querySelector("#aiScore");
    aiScoreElem.textContent = computerScore;
    console.log(`You lost! ${computerChoice} beats ${userChoice}`);
}

function tie(){
    console.log(`You tied!`);
}

function getUserChoice(buttonText){
    console.log(buttonText);
    let choice = buttonText;
    return choice.toLowerCase();
}


function playRound(e){
    console.log(e);
    userChoice = getUserChoice(e.target.value);
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
            break;
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
            break;
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
            break;
    }
    endRound();
}

function newRound(){
    let roundbtn = document.querySelector(".newRound");
    roundbtn.disabled = true;

    roundNum++;

    let roundElem = document.querySelector("#roundNum");
    roundElem.textContent = roundNum;

    let rockbtn = document.querySelector(".choiceRock");
    let paperbtn = document.querySelector(".choicePaper");
    let scissors = document.querySelector(".choiceScissors");

    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissors.disabled = false;
}

function endRound(){
    let rockbtn = document.querySelector(".choiceRock");
    let paperbtn = document.querySelector(".choicePaper");
    let scissors = document.querySelector(".choiceScissors");
    let roundbtn = document.querySelector(".newRound");
    roundbtn.disabled = false;

    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissors.disabled = true;
}

function setEvents(){
    let rockbtn = document.querySelector(".choiceRock");
    let paperbtn = document.querySelector(".choicePaper");
    let scissors = document.querySelector(".choiceScissors");

    let roundbtn = document.querySelector(".newRound");
    console.log(rockbtn);

    rockbtn.addEventListener('click', playRound);
    paperbtn.addEventListener('click', playRound);
    scissors.addEventListener('click', playRound);
    roundbtn.addEventListener('click', newRound);

}

//-------------------MAIN---------------------

let humanScore = 0;
let computerScore = 0;
let roundNum = 0;

setEvents();
newRound();