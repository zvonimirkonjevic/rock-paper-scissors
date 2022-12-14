const AVAILABLECHOICES = ['Rock', 'Paper', 'Scissors'];

const humanScoreCard = document.querySelector('#h-score');
const computerScoreCard = document.querySelector('#c-score');

const humanTitle = document.querySelector('#h-title');
const computerTitle = document.querySelector('#c-title');

let humanScore = 0;
let computerScore = 0;
let roundResult = "";

function getComputerChoice(){
    let index = Math.floor(Math.random() * AVAILABLECHOICES.length);
    return AVAILABLECHOICES[index];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        humanScore += 0;
        computerScore += 0;
        roundResult = "tie";
    }
    else if((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        humanScore++;
        roundResult = "win";
    }
    else{
        computerScore++;
        roundResult = "lose";
    }
}

function showRoundWinner(roundResult){
    if(roundResult === 'win'){
        humanTitle.textContent = "Winner!";
    }
    else if(roundResult === 'lose'){
        computerTitle.textContent = "Winner!";
    }
    else{
        humanTitle.textContent = "Tie!";
        computerTitle.textContent = "Tie!";
    }
}

function resetRoundWinner(){
    humanTitle.textContent = "Human";
    computerTitle.textContent = "Computer";
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

const humanChoice = document.querySelectorAll('.human');

for(let i=0; i<humanChoice.length; i++){
    humanChoice[i].addEventListener('click', () => {
        playRound(humanChoice[i].innerHTML, getComputerChoice());
        updateScore();
        showRoundWinner(roundResult);
        setTimeout(() => {
            resetRoundWinner();
        }, 700);
        setTimeout(() => {
            resetScore();
        }, 3000);
    });
}