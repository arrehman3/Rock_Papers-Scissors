// const { get } = require("http");
let humanScore = 0;
let computerScore=0;

function getComputerChoice(){
    let computerchoice = Math.random();

    if(computerchoice<0.5){
        return 'rock';
    }
    else if(computerchoice>=0.7){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getHumanChoice(){
    return prompt('Enter your choice').toLowerCase();
}

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        computerScore++;
        console.log(`You Lose!! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame(){
    for(i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore>computerScore){
        console.log('Human wins');
    }
    else if (humanScore===computerScore){
        console.log('Its a Draw');
    }
    else{
        console.log('Computer Wins');
    }
}

playGame();





