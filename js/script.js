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

function playRound(humanSelection, computerSelection){
    highlightSelected(humanSelection, computerSelection);
    if(humanSelection === computerSelection){
        humanScore += 0;
        computerScore += 0;
        roundResult = "tie";
    }
    else if((humanSelection === 'Rock' && computerSelection === 'Scissors') || (humanSelection === 'Paper' && computerSelection === 'Rock') || (humanSelection === 'Scissors' && computerSelection === 'Paper')){
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
        computerTitle.textContent = "Loser!";
        container[0].style.cssText = "background-color: #121212; color: #fff;";
    }
    else if(roundResult === 'lose'){
        computerTitle.textContent = "Winner!";
        humanTitle.textContent = "Loser!";
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

function toggleAnnouncement(){
    const announcement = document.querySelector('.announcement');
    const announcementText = document.querySelector('.announcement-text');
    if(humanScore === 5 || computerScore === 5){
        announcement.classList.add('visible');
        if(humanScore > computerScore){
            announcementText.textContent = "You win!";
        }
        else{
            announcementText.textContent = "You lose!";
        }
    }
    setTimeout(() => {
        announcement.classList.remove('visible');
    }, 900);
}

function highlightSelected(human, computer){
    if(human === 'Rock'){
        humanChoice[0].classList.add('selected');
        setTimeout(() => {
            humanChoice[0].classList.remove('selected');
        }, 700);
    }
    if(human === 'Paper'){
        humanChoice[1].classList.add('selected');
        setTimeout(() => {
            humanChoice[1].classList.remove('selected');
        }, 700);
    }
    if(human === 'Scissors'){
        humanChoice[2].classList.add('selected');
        setTimeout(() => {
            humanChoice[2].classList.remove('selected');
        }, 700);
    }
    if(computer === 'Rock'){
        computerChoice[0].classList.add('selected');
        setTimeout(() => {
            computerChoice[0].classList.remove('selected');
        }, 700);
    }
    if(computer === 'Paper'){
        computerChoice[1].classList.add('selected');
        setTimeout(() => {
            computerChoice[1].classList.remove('selected');
        }, 700);
    }
    if(computer === 'Scissors'){
        computerChoice[2].classList.add('selected');
        setTimeout(() => {
            computerChoice[2].classList.remove('selected');
        }, 700);
    }
}

for(let i=0; i<humanChoice.length; i++){
    humanChoice[i].addEventListener('click', () => {
        playRound(humanChoice[i].innerHTML, getComputerChoice());
        updateUI(roundResult);
        toggleAnnouncement();
        setTimeout(() => {
            resetUI();
        }, 700);
    });
}