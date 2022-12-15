const AVAILABLECHOICES = ['Rock', 'Paper', 'Scissors'];

const humanScoreCard = document.querySelector('#h-score');
const computerScoreCard = document.querySelector('#c-score');

const humanTitle = document.querySelector('#h-title');
const computerTitle = document.querySelector('#c-title');

const humanChoice = document.querySelectorAll('.human');
const computerChoice = document.querySelectorAll('.computer');

const container = document.querySelectorAll('.container');

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

function updateUI(roundResult){
    humanScoreCard.textContent = humanScore;
    computerScoreCard.textContent = computerScore;
    if(roundResult === 'win'){
        humanTitle.textContent = "Winner!";
        container[0].style.cssText = "background-color: #121212; color: #fff;";
    }
    else if(roundResult === 'lose'){
        computerTitle.textContent = "Winner!";
        container[1].style.cssText = "background-color: #121212; color: #fff;";
    }
    else{
        humanTitle.textContent = "Tie!";
        computerTitle.textContent = "Tie!";
    }
}

function resetUI(){
    humanTitle.textContent = "Human";
    computerTitle.textContent = "Computer";
    container[0].style.cssText = "background-color: white; color: black;";
    container[1].style.cssText = "background-color: white; color: black;";
    if(humanScore === 5 || computerScore === 5){
        humanScore = 0;
        computerScore = 0;
        humanScoreCard.textContent = humanScore;
        computerScoreCard.textContent = computerScore;
    }
}

for(let i=0; i<humanChoice.length; i++){
    humanChoice[i].addEventListener('click', () => {
        playRound(humanChoice[i].innerHTML, getComputerChoice());
        updateUI(roundResult);
        setTimeout(() => {
            resetUI();
        }, 700);
    });
}