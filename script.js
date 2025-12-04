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
    let playerScoreElem = document.querySelector("#playerScore");
    playerScoreElem.textContent = humanScore;
    console.log(`You won! ${userChoice} beats ${computerChoice}`);

    let playerbtn = document.querySelector(".player.choice." + userChoice);
    let aibtn = document.querySelector(".ai.choice." + computerChoice);

    playerbtn.classList.add("winner");
    aibtn.classList.add("loser");
}

function lose(userChoice, computerChoice){
    computerScore++;
    let aiScoreElem = document.querySelector("#aiScore");
    aiScoreElem.textContent = computerScore;
    console.log(`You lost! ${computerChoice} beats ${userChoice}`);

    let playerbtn = document.querySelector(".player.choice." + userChoice);
    let aibtn = document.querySelector(".ai.choice." + computerChoice);

    playerbtn.classList.add("loser");
    aibtn.classList.add("winner");
}

function tie(userChoice, computerChoice){
    console.log(`You tied!`);

    let playerbtn = document.querySelector(".player.choice." + userChoice);
    let aibtn = document.querySelector(".ai.choice." + computerChoice);

    playerbtn.classList.add("tie");
    aibtn.classList.add("tie");
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
                    tie(userChoice, computerChoice);
                    break;
                case "paper":
                    lose(userChoice, computerChoice);
                    break;
                case "scissors":
                    win(userChoice, computerChoice);
                    break;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    win(userChoice, computerChoice);
                    break;
                case "paper":
                    tie(userChoice, computerChoice);
                    break;
                case "scissors":
                    lose(userChoice, computerChoice);
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    lose(userChoice, computerChoice);
                    break;
                case "paper":
                    win(userChoice, computerChoice);
                    break;
                case "scissors":
                    tie(userChoice, computerChoice);
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

    let rockbtn = document.querySelector(".player.rock");
    let paperbtn = document.querySelector(".player.paper");
    let scissors = document.querySelector(".player.scissors");

    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissors.disabled = false;

    let choicebtns = document.querySelectorAll(".choice");
    choicebtns.forEach((button) => {
        button.classList.remove("winner");
        button.classList.remove("loser");
        button.classList.remove("tie");
    });
}

function endRound(){
    let rockbtn = document.querySelector(".player.rock");
    let paperbtn = document.querySelector(".player.paper");
    let scissors = document.querySelector(".player.scissors");
    let roundbtn = document.querySelector(".newRound");
    roundbtn.disabled = false;

    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissors.disabled = true;


}

function setEvents(){
    let rockbtn = document.querySelector(".player.rock");
    let paperbtn = document.querySelector(".player.paper");
    let scissors = document.querySelector(".player.scissors");

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