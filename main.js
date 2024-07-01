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

// function getHumanChoice(){
//     const btn =document.querySelector("button");
//     const userChoice = .value;
//     return userChoice;


// }

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        humanScore++;
        const para = document.createElement('p');
        para.textContent=(`Human Wins Human Score: ${humanScore}`);
        document.body.appendChild(para);
        

        //console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        computerScore++;
        const para = document.createElement('p');
        para.textContent=(`Computer Wins Computer Score: ${computerScore}`);
        document.body.appendChild(para);
        //console.log(`You Lose!! ${computerChoice} beats ${humanChoice}`);
    }

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function playGame(event){
            const humanChoice = event.target.value;
            console.log(humanChoice);
            playRound(humanChoice,getComputerChoice());
}
        
function endGame(){
    if (humanScore>computerScore){
        alert('Human Wins');
    }
    else if (humanScore===computerScore){
        alert('Its a Draw');
    }
    else{
        alert('Computer Wins');
    }
}

// const btn = Array.from(document.querySelectorAll('button'));
// btn.forEach(element=>{
//     element.addEventListener('click',()=>{
//         alert('Working');
//     });
// });

const btn = Array.from(document.querySelectorAll('button'));

btn.forEach(element=>{
    element.addEventListener('click',playGame);
});
// playGame();





