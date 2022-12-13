const AVAILABLECHOICES = ['Rock', 'Paper', 'Scissors'];

const humanScoreCard = document.querySelector('#h-score');
const computerScoreCard = document.querySelector('#c-score');

const humanTitle = document.querySelector('#h-title');
const computerTitle = document.querySelector('#c-title');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let index = Math.floor(Math.random() * AVAILABLECHOICES.length);
    return AVAILABLECHOICES[index];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        humanScore++;
        computerScore++;
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
        humanScore++;
    }
    else{
        computerScore++;
    }
}

function updateScore(){
    humanScoreCard.textContent = humanScore;
    computerScoreCard.textContent = computerScore;
}

function resetScore(){
    if(humanScore === 5 || computerScore === 5){
        humanScore = 0;
        computerScore = 0;
        humanScoreCard.textContent = humanScore;
        computerScoreCard.textContent = computerScore;
    }
}

const hRock = document.querySelector('#h-rock');
const hPaper = document.querySelector('#h-paper');
const hScissors = document.querySelector('#h-scissors');

hRock.addEventListener('click', () =>{
    playRound(hRock.innerHTML, getComputerChoice());
    updateScore();
    setTimeout(() => resetScore(), 3000);
});

hPaper.addEventListener('click', () =>{
    playRound(hScissors.innerHTML, getComputerChoice());
    updateScore();
    setTimeout(() => resetScore(), 3000);
});

hScissors.addEventListener('click', () =>{
    playRound(hPaper.innerHTML, getComputerChoice());
    updateScore();
    setTimeout(() => resetScore(), 3000);
});